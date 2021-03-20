function methodInBeat(invokeId, timestamp, methodName, executor) {
    var startTime = timestamp;
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var threadClz = Java.use("java.lang.Thread");
    var currentThread = threadClz.currentThread();
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    console.log("------------startFlag:" + invokeId + ",objectHash:" + executor + ",thread(id:" + currentThread.getId() + ",name:" + currentThread.getName() + "),timestamp:" + startTime + "---------------");
    console.log(methodName);
    console.log(stackInfo.substring(20));
    console.log("------------endFlag:" + invokeId + ",usedtime:" + (new Date().getTime() - startTime) + "---------------\n");
};

Java.perform(function() {
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var ContextWrapper = Java.use("android.content.ContextWrapper");
    if (ContextWrapper.sendBroadcast) {
        ContextWrapper.sendBroadcast.overload("android.content.Intent").implementation = function(intent) {
            var invokeId = Math.random().toString(36).slice( - 8);
            var startTime = new Date().getTime();
            var executor = this.hashCode();
            console.log("Intent toString: " + intent.toString());
            console.log("Intent getExtras: " + intent.getExtras());
            console.log("Intent getFlags: " + intent.getFlags());
            var ret = this.sendBroadcast.overload("android.content.Intent").apply(this, arguments);
            methodInBeat(invokeId, startTime, 'android.content.ContextWrapper.sendBroadcast(android.content.Intent)', executor);
            return ret;
        };

        ContextWrapper.sendBroadcast.overload("android.content.Intent", "java.lang.String").implementation = function(intent, receiverPermission) {
            var invokeId = Math.random().toString(36).slice( - 8);
            var startTime = new Date().getTime();
            var executor = this.hashCode();
            console.log("Intent toString: " + intent.toString());
            console.log("Intent getExtras: " + intent.getExtras());
            console.log("Intent getFlags: " + intent.getFlags());
            console.log("Intent receiverPermission: " + receiverPermission);
            var ret = this.sendBroadcast.overload("android.content.Intent", "java.lang.String").apply(this, arguments);
            methodInBeat(invokeId, startTime, 'android.content.ContextWrapper.sendBroadcast(android.content.Intent, java.lang.String)', executor);
            return ret;
        };
    }

    if (ContextWrapper.sendStickyBroadcast) {
        ContextWrapper.sendStickyBroadcast.overload("android.content.Intent").implementation = function(intent) {
            var invokeId = Math.random().toString(36).slice( - 8);
            var startTime = new Date().getTime();
            var executor = this.hashCode();
            console.log("Intent toString: " + intent.toString());
            console.log("Intent getExtras: " + intent.getExtras());
            console.log("Intent getFlags: " + intent.getFlags());
            var ret = this.sendStickyBroadcast.overload("android.content.Intent").apply(this, arguments);
            methodInBeat(invokeId, startTime, 'android.content.ContextWrapper.sendStickyBroadcast(android.content.Intent)', executor);
            return ret;
        };
    }

    if (ContextWrapper.startActivity) {
        ContextWrapper.startActivity.overload("android.content.Intent").implementation = function(intent) {
            var invokeId = Math.random().toString(36).slice( - 8);
            var startTime = new Date().getTime();
            var executor = this.hashCode();
            console.log("Intent: " + intent);
            var ret = this.startActivity.overload("android.content.Intent").apply(this, arguments);
            methodInBeat(invokeId, startTime, 'android.content.ContextWrapper.startActivity(android.content.Intent)', executor);
            return ret;
        };

        ContextWrapper.startActivity.overload("android.content.Intent", "android.os.Bundle").implementation = function(intent, bundle) {
            var invokeId = Math.random().toString(36).slice( - 8);
            var startTime = new Date().getTime();
            var executor = this.hashCode();
            console.log("Intent: " + intent);
            console.log("Bundle: " + bundle);
            var ret = this.startActivity.overload("android.content.Intent", "android.os.Bundle").apply(this, arguments);
            methodInBeat(invokeId, startTime, 'android.content.ContextWrapper.startActivity(android.content.Intent, android.os.Bundle)', executor);
            return ret;
        };
    }

    if (ContextWrapper.startService) {
        ContextWrapper.startService.implementation = function(service) {
        	var invokeId = Math.random().toString(36).slice( - 8);
            var startTime = new Date().getTime();
            var executor = this.hashCode();
            var ret = this.startService.apply(this, arguments);
            console.log("startService: " + service);
            methodInBeat(invokeId, startTime, 'android.content.ContextWrapper.startService(android.content.Intent)', executor);
            return ret;
        };
    }

    if (ContextWrapper.stopService) {
        ContextWrapper.stopService.implementation = function(name) {
        	var invokeId = Math.random().toString(36).slice( - 8);
            var startTime = new Date().getTime();
            var executor = this.hashCode();
            console.log("stopService: " + name);
            var ret = this.stopService.apply(this, arguments);
            methodInBeat(invokeId, startTime,  'android.content.ContextWrapper.stopService(android.content.Intent)', executor);
            return ret;
        };
    }

    if (ContextWrapper.registerReceiver) {
        ContextWrapper.registerReceiver.overload("android.content.BroadcastReceiver", "android.content.IntentFilter").implementation = function(receiver, filter) {
            var invokeId = Math.random().toString(36).slice( - 8);
            var startTime = new Date().getTime();
            var executor = this.hashCode();
            var ret = this.registerReceiver.apply(this, arguments);
            methodInBeat(invokeId, startTime, 'android.content.ContextWrapper.registerReceiver(android.content.BroadcastReceiver, android.content.IntentFilter)', executor);
            return ret;
        };
		
        ContextWrapper.registerReceiver.overload("android.content.BroadcastReceiver", "android.content.IntentFilter", "java.lang.String", "android.os.Handler").implementation = function(receiver, filter, broadcastPermission, scheduler) {
            var invokeId = Math.random().toString(36).slice( - 8);
            var startTime = new Date().getTime();
            var executor = this.hashCode();
            var ret = this.registerReceiver.apply(this, arguments);
            methodInBeat(invokeId, startTime, 'android.content.ContextWrapper.registerReceiver(android.content.BroadcastReceiver, android.content.IntentFilter, java.lang.String, android.os.Handler)', executor);
            return ret;
        };
    }
});