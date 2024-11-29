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

Java.perform(function() {
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var textViewClz = Java.use("android.widget.TextView");
	var charSequenceClz = Java.use("java.lang.CharSequence");
    if (textViewClz.setText) {
        var setTextFunc = textViewClz.setText.overload("java.lang.CharSequence");
        setTextFunc.implementation = function(v0) {
        	var startTime = new Date().getTime();
            setTextFunc.call(this, v0);
            if (isClass(this, "android.widget.EditText")) {
                var clz = this.getClass().getName();
                var viewId = this.getId();
                console.log("EditTextClz: " + clz);
                console.log("ViewId: " + viewId);
                console.log("text: " + v0);
                var invokeId = Math.random().toString(36).slice( - 8);
        		var executor = this.hashCode();
                methodInBeat(invokeId, startTime, 'android.widget.EditText.setText()', executor);
            }
        };
    }
    //EditText的getText继承自TextView
    if (textViewClz.getText) {
        var getTextFunc = textViewClz.getText.overload();
        getTextFunc.implementation = function() {
        	var startTime = new Date().getTime();
            var editable = getTextFunc.call(this);
            if (isClass(this, "android.widget.EditText")) {
                var clz = this.getClass().getName();
                var viewId = this.getId();
                console.log("EditTextClz: " + clz);
                console.log("ViewId: " + viewId);
                console.log("Text: " + Java.cast(editable, charSequenceClz));
                var invokeId = Math.random().toString(36).slice( - 8);
        		var executor = this.hashCode();
        		methodInBeat(invokeId, startTime, 'android.widget.EditText.getText()', executor);
            }
            return editable;
        };
    }
    //AppCompatEditText 有自定义的getText所以单独hook
    if (classExists("androidx.appcompat.widget.AppCompatEditText")) {
        var appCompatEditTextClz = Java.use("androidx.appcompat.widget.AppCompatEditText");
        var appCompatEditTextClzGetTextFunc = appCompatEditTextClz.getText.overload();
        appCompatEditTextClzGetTextFunc.implementation = function() {
        	var startTime = new Date().getTime();
            var editable = appCompatEditTextClzGetTextFunc.call(this);
            var clz = this.getClass().getName();
            var viewId = this.getId();
            console.log("EditTextClz: " + clz);
            console.log("ViewId: " + viewId);
            console.log("Text: " + Java.cast(editable, charSequenceClz));
            var invokeId = Math.random().toString(36).slice( - 8);
        	var executor = this.hashCode();
        	methodInBeat(invokeId, startTime, 'androidx.appcompat.widget.AppCompatEditText.getText()', executor);
            return editable;
        };
    }
});