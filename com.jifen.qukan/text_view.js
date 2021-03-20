function printStacks(androidLogClz, exceptionClz, methodName) {
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    console.log(new Date().getTime()+":"+methodName);
    console.log(stackInfo.substring(20));
};

Java.perform(function() {
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var textViewClz = Java.use("android.widget.TextView");

    if (textViewClz.setText) {
    	var setTextFunc = textViewClz.setText.overload("java.lang.CharSequence");
    	setTextFunc.implementation = function(v0) {
    		var clz = this.getClass().getName();
    		var viewId = this.getId();
            console.log("TextViewClz: " + clz);
            console.log("ViewId: " + viewId);
            printStacks(androidLogClz, exceptionClz, 'android.widget.TextView.setText(String:'+v0+')');
            setTextFunc.call(this, v0);
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
            printStacks(androidLogClz, exceptionClz, 'android.widget.TextView.getText()');
            return editable;
        };
    }
});