function printStacks(androidLogClz, exceptionClz, methodName) {
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    console.log(new Date().getTime() + ":" + methodName);
    console.log(stackInfo.substring(20));
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
            setTextFunc.call(this, v0);
            if (isClass(this, "android.widget.EditText")) {
                var clz = this.getClass().getName();
                var viewId = this.getId();
                console.log("EditTextClz: " + clz);
                console.log("ViewId: " + viewId);
                printStacks(androidLogClz, exceptionClz, 'android.widget.EditText.setText(String:' + v0 + ')');
            }
        };
    }
    //EditText的getText继承自TextView
    if (textViewClz.getText) {
        var getTextFunc = textViewClz.getText.overload();
        getTextFunc.implementation = function() {
            var editable = getTextFunc.call(this);
            if (isClass(this, "android.widget.EditText")) {
                var clz = this.getClass().getName();
                var viewId = this.getId();
                console.log("EditTextClz: " + clz);
                console.log("ViewId: " + viewId);
                console.log("Text: " + Java.cast(editable, charSequenceClz));
                printStacks(androidLogClz, exceptionClz, 'android.widget.EditText.getText()');
            }
            return editable;
        };
    }
    //AppCompatEditText 有自定义的getText所以单独hook
    if (classExists("androidx.appcompat.widget.AppCompatEditText")) {
        var appCompatEditTextClz = Java.use("androidx.appcompat.widget.AppCompatEditText");
        var appCompatEditTextClzGetTextFunc = appCompatEditTextClz.getText.overload();
        appCompatEditTextClzGetTextFunc.implementation = function() {
            var editable = appCompatEditTextClzGetTextFunc.call(this);
            var clz = this.getClass().getName();
            var viewId = this.getId();
            console.log("EditTextClz: " + clz);
            console.log("ViewId: " + viewId);
            console.log("Text: " + Java.cast(editable, charSequenceClz));
            printStacks(androidLogClz, exceptionClz, 'androidx.appcompat.widget.AppCompatEditText.getText()');
            return editable;
        };
    }

});