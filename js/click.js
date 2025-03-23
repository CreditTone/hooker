function methodInBeat(invokeId, timestamp, methodName, executor) {
	var startTime = timestamp;
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var threadClz = Java.use("java.lang.Thread");
    var currentThread = threadClz.currentThread();
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    var str = ("------------startFlag:" + invokeId + ",objectHash:"+executor+",thread(id:" + currentThread.getId() +",name:" + currentThread.getName() + "),timestamp:" + startTime+"---------------\n");
    str += methodName + "\n";
    str += stackInfo.substring(20);
    str += ("------------endFlag:" + invokeId + ",usedtime:" + (new Date().getTime() - startTime) +"---------------\n");
	console.log(str);
};

function sleep(time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while (new Date().getTime() < startTime) {}
};

function makeClass(className) {
    var classClz = Java.use("java.lang.Class");
    var forNameFunc = classClz.forName.overload("java.lang.String");
    return forNameFunc.call(classClz, className);
};

function isClass(obj, superClzName) {
    var objClz = obj.getClass();
    var superClz = makeClass(superClzName);
    return superClz.isAssignableFrom(objClz);
};

Java.perform(function() {
    var textViewClz = Java.use("android.widget.TextView");
    var android_view_View_clz = Java.use('android.view.View');
    var android_view_View_clz_method_performClick_u6ef = android_view_View_clz.performClick.overload();
    android_view_View_clz_method_performClick_u6ef.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'obj:' + this.hashCode();
        var ret = android_view_View_clz_method_performClick_u6ef.call(this);
        var clz = this.getClass().getName();
        var viewId = this.getId();
        //console.log("ViewText: " + Java.cast(this, textViewClz).getText());
        console.log("ViewClz: " + clz);
        console.log("ViewId: " + viewId);
        methodInBeat(invokeId, startTime, 'public boolean android.view.View.performClick()', executor);
        return ret;
    };
});