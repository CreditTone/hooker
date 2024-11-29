function methodInBeat(invokeId, timestamp, methodName, executor) {
	var startTime = timestamp;
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var threadClz = Java.use("java.lang.Thread");
    var currentThread = threadClz.currentThread();
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    console.log("------------startFlag:" + invokeId + ",objectHash:"+executor+",thread(id,name:" + currentThread.getId() +"," + currentThread.getName() + "),timestamp:" + startTime+"---------------");
    console.log(methodName);
    console.log(stackInfo.substring(20));
    console.log("------------endFlag:" + invokeId + ",usedtime:" + (new Date().getTime() - startTime) +"---------------\n");
};

Java.perform(function() {
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var textViewClz = Java.use("android.widget.TextView");

    if (textViewClz.setText) {
        var setTextFunc = textViewClz.setText.overload("java.lang.CharSequence");
        setTextFunc.implementation = function(v0) {
            var startTime = new Date().getTime();
            var clz = this.getClass().getName();
            var viewId = this.getId();
            console.log("TextViewClz: " + clz);
            console.log("ViewId: " + viewId);
            console.log("Text:" + v0);
            setTextFunc.call(this, v0);
            var invokeId = Math.random().toString(36).slice( - 8);
            var executor = this.hashCode();
            methodInBeat(invokeId, startTime, "android.widget.TextView.setText()", executor);
        };
    }
    if (textViewClz.getText) {
        var getTextFunc = textViewClz.getText.overload();
        getTextFunc.implementation = function() {
            var clz = this.getClass().getName();
            var viewId = this.getId();
            var editable = getTextFunc.call(this);
            console.log("TextViewClz: " + clz);
            console.log("ViewId: " + viewId);
            console.log("Text: " + editable.toString());
            var invokeId = Math.random().toString(36).slice( - 8);
            var executor = this.hashCode();
            methodInBeat(invokeId, startTime, "android.widget.TextView.getText()", executor);
            return editable;
        };
    }
});