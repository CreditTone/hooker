function printStacks(androidLogClz, exceptionClz, methodName) {
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    console.log(new Date().getTime()+":"+methodName);
    console.log(stackInfo.substring(20));
};

Java.perform(function() {
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var ContextWrapper = Java.use("android.content.ContextWrapper");

    if (ContextWrapper.sendBroadcast) {
        // Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#sendBroadcast(android.content.Intent)
        ContextWrapper.sendBroadcast.overload("android.content.Intent").implementation = function(intent) {
            console.log("Intent toString: " + intent.toString());
            console.log("Intent getExtras: " + intent.getExtras());
            console.log("Intent getFlags: " + intent.getFlags());
            printStacks(androidLogClz, exceptionClz, 'android.content.ContextWrapper.sendBroadcast(android.content.Intent)');
            return this.sendBroadcast.overload("android.content.Intent").apply(this, arguments);
        };

        // Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#sendBroadcast(android.content.Intent, java.lang.String)
        ContextWrapper.sendBroadcast.overload("android.content.Intent", "java.lang.String").implementation = function(intent, receiverPermission) {
            console.log("Intent toString: " + intent.toString());
            console.log("Intent getExtras: " + intent.getExtras());
            console.log("Intent getFlags: " + intent.getFlags());
            console.log("Intent receiverPermission: " + receiverPermission);
            printStacks(androidLogClz, exceptionClz, 'android.content.ContextWrapper.sendBroadcast(android.content.Intent, java.lang.String)');
            return this.sendBroadcast.overload("android.content.Intent", "java.lang.String").apply(this, arguments);
        };
    }

    if (ContextWrapper.sendStickyBroadcast) {
        // Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#sendStickyBroadcast(android.content.Intent)
        ContextWrapper.sendStickyBroadcast.overload("android.content.Intent").implementation = function(intent) {
            console.log("Intent toString: " + intent.toString());
            console.log("Intent getExtras: " + intent.getExtras());
            console.log("Intent getFlags: " + intent.getFlags());
            printStacks(androidLogClz, exceptionClz, 'android.content.ContextWrapper.sendStickyBroadcast(android.content.Intent)');
            return this.sendStickyBroadcast.overload("android.content.Intent").apply(this, arguments);
        };
    }

    if (ContextWrapper.startActivity) {
        //Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#startActivity(android.content.Intent)
        ContextWrapper.startActivity.overload("android.content.Intent").implementation = function(intent) {
            console.log("Intent: " + intent);
            printStacks(androidLogClz, exceptionClz, 'android.content.ContextWrapper.startActivity(android.content.Intent)');
            return this.startActivity.overload("android.content.Intent").apply(this, arguments);
        };

        //Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#startActivity(android.content.Intent, android.os.Bundle)
        ContextWrapper.startActivity.overload("android.content.Intent", "android.os.Bundle").implementation = function(intent, bundle) {
            console.log("Intent: " + intent);
            console.log("Bundle: " + bundle);
            printStacks(androidLogClz, exceptionClz, 'android.content.ContextWrapper.startActivity(android.content.Intent, android.os.Bundle)');
            return this.startActivity.overload("android.content.Intent", "android.os.Bundle").apply(this, arguments);
        };
    }

    if (ContextWrapper.startService) {
        //Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#startService(android.content.Intent)
        ContextWrapper.startService.implementation = function(service) {
            console.log("startService: " + service);
            printStacks(androidLogClz, exceptionClz, 'android.content.ContextWrapper.startService(android.content.Intent)');
            return this.startService.apply(this, arguments);
        };
    }

    if (ContextWrapper.stopService) {
        //Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#stopService(android.content.Intent)
        ContextWrapper.stopService.implementation = function(name) {
            console.log("stopService: " + name);
            printStacks(androidLogClz, exceptionClz, 'android.content.ContextWrapper.stopService(android.content.Intent)');
            return this.stopService.apply(this, arguments);
        };
    }

    if (ContextWrapper.registerReceiver) {
        //Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#registerReceiver(android.content.BroadcastReceiver, android.content.IntentFilter)
        ContextWrapper.registerReceiver.overload("android.content.BroadcastReceiver", "android.content.IntentFilter").implementation = function(receiver, filter) {
            printStacks(androidLogClz, exceptionClz, 'android.content.ContextWrapper.registerReceiver(android.content.BroadcastReceiver, android.content.IntentFilter)');
            return this.registerReceiver.apply(this, arguments);
        };

        //Ref: https://developer.android.com/reference/android/content/ContextWrapper.html#registerReceiver(android.content.BroadcastReceiver, android.content.IntentFilter, java.lang.String, android.os.Handler)
        ContextWrapper.registerReceiver.overload("android.content.BroadcastReceiver", "android.content.IntentFilter", "java.lang.String", "android.os.Handler").implementation = function(receiver, filter, broadcastPermission, scheduler) {
            printStacks(androidLogClz, exceptionClz, 'android.content.ContextWrapper.registerReceiver(android.content.BroadcastReceiver, android.content.IntentFilter, java.lang.String, android.os.Handler)');
            return this.registerReceiver.apply(this, arguments);
        };
    }
});