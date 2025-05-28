# 自实现系统函数一个重要的前提就是它们都有标准的系统调用号，标准的机器码。所以我们绕过的时候也可以用同样的思路。
# Frida的Memory API可以直接查找整个系统的内存内容，我们直接搜索对应函数的特征码，定位到之后再使用Interceptor进行Hook。（要注意每个架构对应的特征可能不一样）

function hookSysOpen() {
    let SYS_OPEN;
    let SVC_INSTRUCTION_HEX;
    const arch = Process.arch;

    if (arch === "arm64") {
        SYS_OPEN = 56;  // ARM64架构下open系统调用的编号
        SVC_INSTRUCTION_HEX = "01 00 00 D4";  // ARM64架构下svc指令的十六进制表示
    } else if (arch === "arm") {
        SYS_OPEN = 5;  // ARM架构下open系统调用的编号
        SVC_INSTRUCTION_HEX = "00 00 00 EF";  // ARM架构下svc指令的十六进制表示
    } else {
        console.log("不支持的架构: " + arch);
        return;
    }

    console.log("当前架构: " + arch);
    console.log("开始搜索SYS_OPEN系统调用...");

    //系统调用指令（如svc）通常位于可执行代码段中（r-x）
    Process.enumerateRanges('r-x').forEach(function(range) {
        if (range.file && range.file.path && range.file.path.endsWith(".so")) {
            console.log("搜索模块: " + range.file.path);
            
            Memory.scan(range.base, range.size, SVC_INSTRUCTION_HEX, {
                onMatch: function(address) {
                    let sysCallNumber;
                    if (arch === "arm64") {
                        // 在ARM64中，系统调用号在svc指令之前的指令中
                        sysCallNumber = address.sub(4).readU32() & 0xFFFF;
                    } else if (arch === "arm") {
                        // 在ARM中，系统调用号通常在r7寄存器中，这里我们只能近似处理
                        sysCallNumber = address.sub(4).readU16() & 0xFF;
                    }
                    
                    if (sysCallNumber === SYS_OPEN) {
                        console.log("找到SYS_OPEN调用，地址: " + address);
                        
                        Interceptor.attach(address, {
                            onEnter: function(args) {
                                let fileName;
                                if (arch === "arm64") {
                                    fileName = args[1].readUtf8String();
                                } else if (arch === "arm") {
                                    fileName = args[0].readUtf8String();
                                }
                                console.log("SYS_OPEN被调用，文件名: " + fileName);
                            },
                            onLeave: function(retval) {
                                console.log("SYS_OPEN返回值: " + retval);
                            }
                        });
                    }
                },
                onComplete: function() {
                    console.log("搜索完成");
                }
            });
        }
    });
}

hookSysOpen();
