function classExists(className) {
    var exists = false;
    try {
        var clz = Java.use(className);
        exists = true;
    } catch(err) {
        //console.log(err);
    }
    return exists;
};

function checkLoadDex(className, dexfile) {
    Java.perform(function() {
        if (!classExists(className)) {
            Java.openClassFile(dexfile).load();
            //console.log("load " + dexfile);
        }
    });
};

function encrypt(src) {
    var ret = "";
    Java.perform(function() {
        var com_changba_api_url_ChangbaUrlRewriter_clz = Java.use('com.changba.api.url.ChangbaUrlRewriter');
        var changbaUrlRewriterObj = com_changba_api_url_ChangbaUrlRewriter_clz.$new();
        var com_changba_api_url_ChangbaUrlRewriter_clz_method_a_kvjq = com_changba_api_url_ChangbaUrlRewriter_clz.a.overload('java.lang.String');
        ret = com_changba_api_url_ChangbaUrlRewriter_clz_method_a_kvjq.call(changbaUrlRewriterObj, src);
    });
    return ret;
};

function startWebServer() {
    Java.perform(function() {
        var networkEncryptMockerClz = Java.use('gz.changba.EncryptMocker');
        networkEncryptMockerClz.startRestServer();
    });
};

function stopWebServer() {
    Java.perform(function() {
        var networkEncryptMockerClz = Java.use('gz.changba.EncryptMocker');
        networkEncryptMockerClz.stopRestServer();
    });
};

checkLoadDex("gz.changba.EncryptMocker", "/data/local/tmp/com.changba/spider.dex");

//启动服务
startWebServer();