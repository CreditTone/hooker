function printStacks(androidLogClz, exceptionClz, methodName) {
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    console.log(new Date().getTime()+":"+methodName);
    console.log(stackInfo.substring(20));
};

function containsCheck(v0 , v1) {
    var stringClz = Java.use('java.lang.String');
	var stringClzContains = stringClz.contains.overload("java.lang.CharSequence");
	var createString = stringClz.$new.overload("java.lang.String");
	var v = createString.call(stringClz, v0);
	return stringClzContains.call(v, v1)
};

Java.perform(function() {
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var textViewClz = Java.use("android.widget.TextView");
    if (textViewClz.setText) {
    	var setTextFunc = textViewClz.setText.overload("java.lang.CharSequence");
    	setTextFunc.implementation = function(v0) {
    		if (!v0){
    			return;
    		}
    		setTextFunc.call(this, v0);
            if (containsCheck(v0, "阿耀")) {
            	var clz = this.getClass().getName();
    			var viewId = this.getId();
            	console.log("EditTextClz: " + clz);
            	console.log("ViewId: " + viewId);
            	printStacks(androidLogClz, exceptionClz, 'android.widget.TextView.setText(String:'+v0+')');
            }
        };
    }
});