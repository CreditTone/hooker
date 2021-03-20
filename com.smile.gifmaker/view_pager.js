function methodInBeat(invokeId, timestamp, methodName, executor) {
	var startTime = timestamp;
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var threadClz = Java.use("java.lang.Thread");
    var currentThread = threadClz.currentThread();
    var stackInfo = androidLogClz.getStackTraceString(exceptionClz.$new());
    console.log("------------startFlag:" + invokeId + ",objectHash:"+executor+",thread(id:" + currentThread.getId() +",name:" + currentThread.getName() + "),timestamp:" + startTime+"---------------");
    console.log(methodName);
    console.log(stackInfo.substring(20));
    console.log("------------endFlag:" + invokeId + ",usedtime:" + (new Date().getTime() - startTime) +"---------------\n");
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

function hookingAndroidV4ViewPager() {
    if (!classExists("android.support.v4.view.ViewPager")) {
        console.warn("Class android.support.v4.view.ViewPager not found.");
        return;
    }
    var android_support_v4_view_ViewPager_clz = Java.use('android.support.v4.view.ViewPager');
    var android_support_v4_view_ViewPager_clz_method_canScrollHorizontally_72ob = android_support_v4_view_ViewPager_clz.canScrollHorizontally.overload('int');
    android_support_v4_view_ViewPager_clz_method_canScrollHorizontally_72ob.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_canScrollHorizontally_72ob.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean android.support.v4.view.ViewPager.canScrollHorizontally(int)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_onSaveInstanceState_95lm = android_support_v4_view_ViewPager_clz.onSaveInstanceState.overload();
    android_support_v4_view_ViewPager_clz_method_onSaveInstanceState_95lm.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_onSaveInstanceState_95lm.call(this);
        methodInBeat(invokeId, startTime, 'public android.os.Parcelable android.support.v4.view.ViewPager.onSaveInstanceState()', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_onSizeChanged_oomc = android_support_v4_view_ViewPager_clz.onSizeChanged.overload('int', 'int', 'int', 'int');
    android_support_v4_view_ViewPager_clz_method_onSizeChanged_oomc.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_onSizeChanged_oomc.call(this, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'protected void android.support.v4.view.ViewPager.onSizeChanged(int,int,int,int)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_pageRight_e3ai = android_support_v4_view_ViewPager_clz.pageRight.overload();
    android_support_v4_view_ViewPager_clz_method_pageRight_e3ai.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_pageRight_e3ai.call(this);
        methodInBeat(invokeId, startTime, 'boolean android.support.v4.view.ViewPager.pageRight()', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_dispatchKeyEvent_u5sq = android_support_v4_view_ViewPager_clz.dispatchKeyEvent.overload('android.view.KeyEvent');
    android_support_v4_view_ViewPager_clz_method_dispatchKeyEvent_u5sq.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_dispatchKeyEvent_u5sq.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean android.support.v4.view.ViewPager.dispatchKeyEvent(android.view.KeyEvent)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_getAdapter_72hx = android_support_v4_view_ViewPager_clz.getAdapter.overload();
    android_support_v4_view_ViewPager_clz_method_getAdapter_72hx.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_getAdapter_72hx.call(this);
        methodInBeat(invokeId, startTime, 'public android.support.v4.view.PagerAdapter android.support.v4.view.ViewPager.getAdapter()', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_clearOnPageChangeListeners_aa1d = android_support_v4_view_ViewPager_clz.clearOnPageChangeListeners.overload();
    android_support_v4_view_ViewPager_clz_method_clearOnPageChangeListeners_aa1d.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_clearOnPageChangeListeners_aa1d.call(this);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.clearOnPageChangeListeners()', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_getChildRectInPagerCoordinates_day6 = android_support_v4_view_ViewPager_clz.getChildRectInPagerCoordinates.overload('android.graphics.Rect', 'android.view.View');
    android_support_v4_view_ViewPager_clz_method_getChildRectInPagerCoordinates_day6.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_getChildRectInPagerCoordinates_day6.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'private android.graphics.Rect android.support.v4.view.ViewPager.getChildRectInPagerCoordinates(android.graphics.Rect,android.view.View)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_fakeDragBy_1srx = android_support_v4_view_ViewPager_clz.fakeDragBy.overload('float');
    android_support_v4_view_ViewPager_clz_method_fakeDragBy_1srx.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_fakeDragBy_1srx.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.fakeDragBy(float)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_dataSetChanged_rqbg = android_support_v4_view_ViewPager_clz.dataSetChanged.overload();
    android_support_v4_view_ViewPager_clz_method_dataSetChanged_rqbg.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_dataSetChanged_rqbg.call(this);
        methodInBeat(invokeId, startTime, 'void android.support.v4.view.ViewPager.dataSetChanged()', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_onLayout_cie4 = android_support_v4_view_ViewPager_clz.onLayout.overload('boolean', 'int', 'int', 'int', 'int');
    android_support_v4_view_ViewPager_clz_method_onLayout_cie4.implementation = function(v0, v1, v2, v3, v4) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_onLayout_cie4.call(this, v0, v1, v2, v3, v4);
        methodInBeat(invokeId, startTime, 'protected void android.support.v4.view.ViewPager.onLayout(boolean,int,int,int,int)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_setCurrentItemInternal_1tkm = android_support_v4_view_ViewPager_clz.setCurrentItemInternal.overload('int', 'boolean', 'boolean', 'int');
    android_support_v4_view_ViewPager_clz_method_setCurrentItemInternal_1tkm.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_setCurrentItemInternal_1tkm.call(this, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'void android.support.v4.view.ViewPager.setCurrentItemInternal(int,boolean,boolean,int)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_setCurrentItem_9toq = android_support_v4_view_ViewPager_clz.setCurrentItem.overload('int');
    android_support_v4_view_ViewPager_clz_method_setCurrentItem_9toq.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_setCurrentItem_9toq.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.setCurrentItem(int)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_pageScrolled_dj79 = android_support_v4_view_ViewPager_clz.pageScrolled.overload('int');
    android_support_v4_view_ViewPager_clz_method_pageScrolled_dj79.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_pageScrolled_dj79.call(this, v0);
        methodInBeat(invokeId, startTime, 'private boolean android.support.v4.view.ViewPager.pageScrolled(int)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_addOnPageChangeListener_hfn8 = android_support_v4_view_ViewPager_clz.addOnPageChangeListener.overload('android.support.v4.view.ViewPager$OnPageChangeListener');
    android_support_v4_view_ViewPager_clz_method_addOnPageChangeListener_hfn8.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_addOnPageChangeListener_hfn8.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.addOnPageChangeListener(android.support.v4.view.ViewPager$OnPageChangeListener)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_dispatchPopulateAccessibilityEvent_3afb = android_support_v4_view_ViewPager_clz.dispatchPopulateAccessibilityEvent.overload('android.view.accessibility.AccessibilityEvent');
    android_support_v4_view_ViewPager_clz_method_dispatchPopulateAccessibilityEvent_3afb.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_dispatchPopulateAccessibilityEvent_3afb.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean android.support.v4.view.ViewPager.dispatchPopulateAccessibilityEvent(android.view.accessibility.AccessibilityEvent)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_setScrollingCacheEnabled_f7e9 = android_support_v4_view_ViewPager_clz.setScrollingCacheEnabled.overload('boolean');
    android_support_v4_view_ViewPager_clz_method_setScrollingCacheEnabled_f7e9.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_setScrollingCacheEnabled_f7e9.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void android.support.v4.view.ViewPager.setScrollingCacheEnabled(boolean)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_infoForAnyChild_6efq = android_support_v4_view_ViewPager_clz.infoForAnyChild.overload('android.view.View');
    android_support_v4_view_ViewPager_clz_method_infoForAnyChild_6efq.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_infoForAnyChild_6efq.call(this, v0);
        methodInBeat(invokeId, startTime, 'android.support.v4.view.ViewPager$ItemInfo android.support.v4.view.ViewPager.infoForAnyChild(android.view.View)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_pageLeft_38se = android_support_v4_view_ViewPager_clz.pageLeft.overload();
    android_support_v4_view_ViewPager_clz_method_pageLeft_38se.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_pageLeft_38se.call(this);
        methodInBeat(invokeId, startTime, 'boolean android.support.v4.view.ViewPager.pageLeft()', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_setScrollState_2p3f = android_support_v4_view_ViewPager_clz.setScrollState.overload('int');
    android_support_v4_view_ViewPager_clz_method_setScrollState_2p3f.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_setScrollState_2p3f.call(this, v0);
        methodInBeat(invokeId, startTime, 'void android.support.v4.view.ViewPager.setScrollState(int)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_isGutterDrag_f7ru = android_support_v4_view_ViewPager_clz.isGutterDrag.overload('float', 'float');
    android_support_v4_view_ViewPager_clz_method_isGutterDrag_f7ru.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_isGutterDrag_f7ru.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'private boolean android.support.v4.view.ViewPager.isGutterDrag(float,float)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_completeScroll_ec01 = android_support_v4_view_ViewPager_clz.completeScroll.overload('boolean');
    android_support_v4_view_ViewPager_clz_method_completeScroll_ec01.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_completeScroll_ec01.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void android.support.v4.view.ViewPager.completeScroll(boolean)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_onRequestFocusInDescendants_fhrj = android_support_v4_view_ViewPager_clz.onRequestFocusInDescendants.overload('int', 'android.graphics.Rect');
    android_support_v4_view_ViewPager_clz_method_onRequestFocusInDescendants_fhrj.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_onRequestFocusInDescendants_fhrj.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'protected boolean android.support.v4.view.ViewPager.onRequestFocusInDescendants(int,android.graphics.Rect)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_getPageMargin_wpn8 = android_support_v4_view_ViewPager_clz.getPageMargin.overload();
    android_support_v4_view_ViewPager_clz_method_getPageMargin_wpn8.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_getPageMargin_wpn8.call(this);
        methodInBeat(invokeId, startTime, 'public int android.support.v4.view.ViewPager.getPageMargin()', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_removeOnAdapterChangeListener_n3hk = android_support_v4_view_ViewPager_clz.removeOnAdapterChangeListener.overload('android.support.v4.view.ViewPager$OnAdapterChangeListener');
    android_support_v4_view_ViewPager_clz_method_removeOnAdapterChangeListener_n3hk.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_removeOnAdapterChangeListener_n3hk.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.removeOnAdapterChangeListener(android.support.v4.view.ViewPager$OnAdapterChangeListener)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_isFakeDragging_fdzo = android_support_v4_view_ViewPager_clz.isFakeDragging.overload();
    android_support_v4_view_ViewPager_clz_method_isFakeDragging_fdzo.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_isFakeDragging_fdzo.call(this);
        methodInBeat(invokeId, startTime, 'public boolean android.support.v4.view.ViewPager.isFakeDragging()', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_removeNonDecorViews_svg1 = android_support_v4_view_ViewPager_clz.removeNonDecorViews.overload();
    android_support_v4_view_ViewPager_clz_method_removeNonDecorViews_svg1.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_removeNonDecorViews_svg1.call(this);
        methodInBeat(invokeId, startTime, 'private void android.support.v4.view.ViewPager.removeNonDecorViews()', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_requestParentDisallowInterceptTouchEvent_194a = android_support_v4_view_ViewPager_clz.requestParentDisallowInterceptTouchEvent.overload('boolean');
    android_support_v4_view_ViewPager_clz_method_requestParentDisallowInterceptTouchEvent_194a.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_requestParentDisallowInterceptTouchEvent_194a.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void android.support.v4.view.ViewPager.requestParentDisallowInterceptTouchEvent(boolean)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_getOffscreenPageLimit_mqks = android_support_v4_view_ViewPager_clz.getOffscreenPageLimit.overload();
    android_support_v4_view_ViewPager_clz_method_getOffscreenPageLimit_mqks.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_getOffscreenPageLimit_mqks.call(this);
        methodInBeat(invokeId, startTime, 'public int android.support.v4.view.ViewPager.getOffscreenPageLimit()', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_addTouchables_imkl = android_support_v4_view_ViewPager_clz.addTouchables.overload('java.util.ArrayList');
    android_support_v4_view_ViewPager_clz_method_addTouchables_imkl.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_addTouchables_imkl.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.addTouchables(java.util.ArrayList)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_getClientWidth_b7kq = android_support_v4_view_ViewPager_clz.getClientWidth.overload();
    android_support_v4_view_ViewPager_clz_method_getClientWidth_b7kq.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_getClientWidth_b7kq.call(this);
        methodInBeat(invokeId, startTime, 'private int android.support.v4.view.ViewPager.getClientWidth()', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_generateLayoutParams_bgb5 = android_support_v4_view_ViewPager_clz.generateLayoutParams.overload('android.view.ViewGroup$LayoutParams');
    android_support_v4_view_ViewPager_clz_method_generateLayoutParams_bgb5.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_generateLayoutParams_bgb5.call(this, v0);
        methodInBeat(invokeId, startTime, 'protected android.view.ViewGroup$LayoutParams android.support.v4.view.ViewPager.generateLayoutParams(android.view.ViewGroup$LayoutParams)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_drawableStateChanged_4uae = android_support_v4_view_ViewPager_clz.drawableStateChanged.overload();
    android_support_v4_view_ViewPager_clz_method_drawableStateChanged_4uae.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_drawableStateChanged_4uae.call(this);
        methodInBeat(invokeId, startTime, 'protected void android.support.v4.view.ViewPager.drawableStateChanged()', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_infoForPosition_xej7 = android_support_v4_view_ViewPager_clz.infoForPosition.overload('int');
    android_support_v4_view_ViewPager_clz_method_infoForPosition_xej7.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_infoForPosition_xej7.call(this, v0);
        methodInBeat(invokeId, startTime, 'android.support.v4.view.ViewPager$ItemInfo android.support.v4.view.ViewPager.infoForPosition(int)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_scrollToItem_ooah = android_support_v4_view_ViewPager_clz.scrollToItem.overload('int', 'boolean', 'int', 'boolean');
    android_support_v4_view_ViewPager_clz_method_scrollToItem_ooah.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_scrollToItem_ooah.call(this, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'private void android.support.v4.view.ViewPager.scrollToItem(int,boolean,int,boolean)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_onTouchEvent_qhgu = android_support_v4_view_ViewPager_clz.onTouchEvent.overload('android.view.MotionEvent');
    android_support_v4_view_ViewPager_clz_method_onTouchEvent_qhgu.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_onTouchEvent_qhgu.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean android.support.v4.view.ViewPager.onTouchEvent(android.view.MotionEvent)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_generateLayoutParams_ftfu = android_support_v4_view_ViewPager_clz.generateLayoutParams.overload('android.util.AttributeSet');
    android_support_v4_view_ViewPager_clz_method_generateLayoutParams_ftfu.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_generateLayoutParams_ftfu.call(this, v0);
        methodInBeat(invokeId, startTime, 'public android.view.ViewGroup$LayoutParams android.support.v4.view.ViewPager.generateLayoutParams(android.util.AttributeSet)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_setPageMarginDrawable_9t8s = android_support_v4_view_ViewPager_clz.setPageMarginDrawable.overload('android.graphics.drawable.Drawable');
    android_support_v4_view_ViewPager_clz_method_setPageMarginDrawable_9t8s.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_setPageMarginDrawable_9t8s.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.setPageMarginDrawable(android.graphics.drawable.Drawable)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_determineTargetPage_oalp = android_support_v4_view_ViewPager_clz.determineTargetPage.overload('int', 'float', 'int', 'int');
    android_support_v4_view_ViewPager_clz_method_determineTargetPage_oalp.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_determineTargetPage_oalp.call(this, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'private int android.support.v4.view.ViewPager.determineTargetPage(int,float,int,int)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_resetTouch_moyn = android_support_v4_view_ViewPager_clz.resetTouch.overload();
    android_support_v4_view_ViewPager_clz_method_resetTouch_moyn.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_resetTouch_moyn.call(this);
        methodInBeat(invokeId, startTime, 'private boolean android.support.v4.view.ViewPager.resetTouch()', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_endFakeDrag_y9y4 = android_support_v4_view_ViewPager_clz.endFakeDrag.overload();
    android_support_v4_view_ViewPager_clz_method_endFakeDrag_y9y4.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_endFakeDrag_y9y4.call(this);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.endFakeDrag()', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_populate_0445 = android_support_v4_view_ViewPager_clz.populate.overload();
    android_support_v4_view_ViewPager_clz_method_populate_0445.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_populate_0445.call(this);
        methodInBeat(invokeId, startTime, 'void android.support.v4.view.ViewPager.populate()', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_setOffscreenPageLimit_nmyt = android_support_v4_view_ViewPager_clz.setOffscreenPageLimit.overload('int');
    android_support_v4_view_ViewPager_clz_method_setOffscreenPageLimit_nmyt.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_setOffscreenPageLimit_nmyt.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.setOffscreenPageLimit(int)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_getCurrentItem_98is = android_support_v4_view_ViewPager_clz.getCurrentItem.overload();
    android_support_v4_view_ViewPager_clz_method_getCurrentItem_98is.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_getCurrentItem_98is.call(this);
        methodInBeat(invokeId, startTime, 'public int android.support.v4.view.ViewPager.getCurrentItem()', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_onAttachedToWindow_kwdd = android_support_v4_view_ViewPager_clz.onAttachedToWindow.overload();
    android_support_v4_view_ViewPager_clz_method_onAttachedToWindow_kwdd.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_onAttachedToWindow_kwdd.call(this);
        methodInBeat(invokeId, startTime, 'protected void android.support.v4.view.ViewPager.onAttachedToWindow()', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_setAdapter_xkla = android_support_v4_view_ViewPager_clz.setAdapter.overload('android.support.v4.view.PagerAdapter');
    android_support_v4_view_ViewPager_clz_method_setAdapter_xkla.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_setAdapter_xkla.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.setAdapter(android.support.v4.view.PagerAdapter)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_performDrag_59d7 = android_support_v4_view_ViewPager_clz.performDrag.overload('float');
    android_support_v4_view_ViewPager_clz_method_performDrag_59d7.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_performDrag_59d7.call(this, v0);
        methodInBeat(invokeId, startTime, 'private boolean android.support.v4.view.ViewPager.performDrag(float)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_isDecorView_n7k5 = android_support_v4_view_ViewPager_clz.isDecorView.overload('android.view.View');
    android_support_v4_view_ViewPager_clz_method_isDecorView_n7k5.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = android_support_v4_view_ViewPager_clz_method_isDecorView_n7k5.call(android_support_v4_view_ViewPager_clz, v0);
        methodInBeat(invokeId, startTime, 'private static boolean android.support.v4.view.ViewPager.isDecorView(android.view.View)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_setPageMargin_fwzk = android_support_v4_view_ViewPager_clz.setPageMargin.overload('int');
    android_support_v4_view_ViewPager_clz_method_setPageMargin_fwzk.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_setPageMargin_fwzk.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.setPageMargin(int)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_removeView_bj1a = android_support_v4_view_ViewPager_clz.removeView.overload('android.view.View');
    android_support_v4_view_ViewPager_clz_method_removeView_bj1a.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_removeView_bj1a.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.removeView(android.view.View)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_verifyDrawable_k5us = android_support_v4_view_ViewPager_clz.verifyDrawable.overload('android.graphics.drawable.Drawable');
    android_support_v4_view_ViewPager_clz_method_verifyDrawable_k5us.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_verifyDrawable_k5us.call(this, v0);
        methodInBeat(invokeId, startTime, 'protected boolean android.support.v4.view.ViewPager.verifyDrawable(android.graphics.drawable.Drawable)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_onDetachedFromWindow_dkyj = android_support_v4_view_ViewPager_clz.onDetachedFromWindow.overload();
    android_support_v4_view_ViewPager_clz_method_onDetachedFromWindow_dkyj.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_onDetachedFromWindow_dkyj.call(this);
        methodInBeat(invokeId, startTime, 'protected void android.support.v4.view.ViewPager.onDetachedFromWindow()', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_populate_h8aj = android_support_v4_view_ViewPager_clz.populate.overload('int');
    android_support_v4_view_ViewPager_clz_method_populate_h8aj.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_populate_h8aj.call(this, v0);
        methodInBeat(invokeId, startTime, 'void android.support.v4.view.ViewPager.populate(int)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_addFocusables_sglh = android_support_v4_view_ViewPager_clz.addFocusables.overload('java.util.ArrayList', 'int', 'int');
    android_support_v4_view_ViewPager_clz_method_addFocusables_sglh.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_addFocusables_sglh.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.addFocusables(java.util.ArrayList,int,int)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_infoForChild_1lp9 = android_support_v4_view_ViewPager_clz.infoForChild.overload('android.view.View');
    android_support_v4_view_ViewPager_clz_method_infoForChild_1lp9.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_infoForChild_1lp9.call(this, v0);
        methodInBeat(invokeId, startTime, 'android.support.v4.view.ViewPager$ItemInfo android.support.v4.view.ViewPager.infoForChild(android.view.View)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_smoothScrollTo_b5qt = android_support_v4_view_ViewPager_clz.smoothScrollTo.overload('int', 'int', 'int');
    android_support_v4_view_ViewPager_clz_method_smoothScrollTo_b5qt.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_smoothScrollTo_b5qt.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'void android.support.v4.view.ViewPager.smoothScrollTo(int,int,int)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_onMeasure_z925 = android_support_v4_view_ViewPager_clz.onMeasure.overload('int', 'int');
    android_support_v4_view_ViewPager_clz_method_onMeasure_z925.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_onMeasure_z925.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'protected void android.support.v4.view.ViewPager.onMeasure(int,int)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_sortChildDrawingOrder_k87f = android_support_v4_view_ViewPager_clz.sortChildDrawingOrder.overload();
    android_support_v4_view_ViewPager_clz_method_sortChildDrawingOrder_k87f.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_sortChildDrawingOrder_k87f.call(this);
        methodInBeat(invokeId, startTime, 'private void android.support.v4.view.ViewPager.sortChildDrawingOrder()', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_getChildDrawingOrder_0hcs = android_support_v4_view_ViewPager_clz.getChildDrawingOrder.overload('int', 'int');
    android_support_v4_view_ViewPager_clz_method_getChildDrawingOrder_0hcs.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_getChildDrawingOrder_0hcs.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'protected int android.support.v4.view.ViewPager.getChildDrawingOrder(int,int)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_executeKeyEvent_jvie = android_support_v4_view_ViewPager_clz.executeKeyEvent.overload('android.view.KeyEvent');
    android_support_v4_view_ViewPager_clz_method_executeKeyEvent_jvie.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_executeKeyEvent_jvie.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean android.support.v4.view.ViewPager.executeKeyEvent(android.view.KeyEvent)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_beginFakeDrag_d1ph = android_support_v4_view_ViewPager_clz.beginFakeDrag.overload();
    android_support_v4_view_ViewPager_clz_method_beginFakeDrag_d1ph.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_beginFakeDrag_d1ph.call(this);
        methodInBeat(invokeId, startTime, 'public boolean android.support.v4.view.ViewPager.beginFakeDrag()', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_endDrag_vk1u = android_support_v4_view_ViewPager_clz.endDrag.overload();
    android_support_v4_view_ViewPager_clz_method_endDrag_vk1u.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_endDrag_vk1u.call(this);
        methodInBeat(invokeId, startTime, 'private void android.support.v4.view.ViewPager.endDrag()', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_onDraw_4ser = android_support_v4_view_ViewPager_clz.onDraw.overload('android.graphics.Canvas');
    android_support_v4_view_ViewPager_clz_method_onDraw_4ser.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_onDraw_4ser.call(this, v0);
        methodInBeat(invokeId, startTime, 'protected void android.support.v4.view.ViewPager.onDraw(android.graphics.Canvas)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_setPageTransformer_zkfn = android_support_v4_view_ViewPager_clz.setPageTransformer.overload('boolean', 'android.support.v4.view.ViewPager$PageTransformer');
    android_support_v4_view_ViewPager_clz_method_setPageTransformer_zkfn.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_setPageTransformer_zkfn.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.setPageTransformer(boolean,android.support.v4.view.ViewPager$PageTransformer)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_recomputeScrollPosition_fqyb = android_support_v4_view_ViewPager_clz.recomputeScrollPosition.overload('int', 'int', 'int', 'int');
    android_support_v4_view_ViewPager_clz_method_recomputeScrollPosition_fqyb.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_recomputeScrollPosition_fqyb.call(this, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'private void android.support.v4.view.ViewPager.recomputeScrollPosition(int,int,int,int)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_computeScroll_fcwk = android_support_v4_view_ViewPager_clz.computeScroll.overload();
    android_support_v4_view_ViewPager_clz_method_computeScroll_fcwk.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_computeScroll_fcwk.call(this);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.computeScroll()', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_canScroll_0jjk = android_support_v4_view_ViewPager_clz.canScroll.overload('android.view.View', 'boolean', 'int', 'int', 'int');
    android_support_v4_view_ViewPager_clz_method_canScroll_0jjk.implementation = function(v0, v1, v2, v3, v4) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_canScroll_0jjk.call(this, v0, v1, v2, v3, v4);
        methodInBeat(invokeId, startTime, 'protected boolean android.support.v4.view.ViewPager.canScroll(android.view.View,boolean,int,int,int)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_setOnPageChangeListener_o8n7 = android_support_v4_view_ViewPager_clz.setOnPageChangeListener.overload('android.support.v4.view.ViewPager$OnPageChangeListener');
    android_support_v4_view_ViewPager_clz_method_setOnPageChangeListener_o8n7.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_setOnPageChangeListener_o8n7.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.setOnPageChangeListener(android.support.v4.view.ViewPager$OnPageChangeListener)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_setPageTransformer_x9od = android_support_v4_view_ViewPager_clz.setPageTransformer.overload('boolean', 'android.support.v4.view.ViewPager$PageTransformer', 'int');
    android_support_v4_view_ViewPager_clz_method_setPageTransformer_x9od.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_setPageTransformer_x9od.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.setPageTransformer(boolean,android.support.v4.view.ViewPager$PageTransformer,int)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_removeOnPageChangeListener_y6ad = android_support_v4_view_ViewPager_clz.removeOnPageChangeListener.overload('android.support.v4.view.ViewPager$OnPageChangeListener');
    android_support_v4_view_ViewPager_clz_method_removeOnPageChangeListener_y6ad.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_removeOnPageChangeListener_y6ad.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.removeOnPageChangeListener(android.support.v4.view.ViewPager$OnPageChangeListener)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_setPageMarginDrawable_8ifn = android_support_v4_view_ViewPager_clz.setPageMarginDrawable.overload('int');
    android_support_v4_view_ViewPager_clz_method_setPageMarginDrawable_8ifn.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_setPageMarginDrawable_8ifn.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.setPageMarginDrawable(int)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_distanceInfluenceForSnapDuration_9iyg = android_support_v4_view_ViewPager_clz.distanceInfluenceForSnapDuration.overload('float');
    android_support_v4_view_ViewPager_clz_method_distanceInfluenceForSnapDuration_9iyg.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_distanceInfluenceForSnapDuration_9iyg.call(this, v0);
        methodInBeat(invokeId, startTime, 'float android.support.v4.view.ViewPager.distanceInfluenceForSnapDuration(float)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_initViewPager_sd08 = android_support_v4_view_ViewPager_clz.initViewPager.overload();
    android_support_v4_view_ViewPager_clz_method_initViewPager_sd08.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_initViewPager_sd08.call(this);
        methodInBeat(invokeId, startTime, 'void android.support.v4.view.ViewPager.initViewPager()', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_setInternalPageChangeListener_pj5b = android_support_v4_view_ViewPager_clz.setInternalPageChangeListener.overload('android.support.v4.view.ViewPager$OnPageChangeListener');
    android_support_v4_view_ViewPager_clz_method_setInternalPageChangeListener_pj5b.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_setInternalPageChangeListener_pj5b.call(this, v0);
        methodInBeat(invokeId, startTime, 'android.support.v4.view.ViewPager$OnPageChangeListener android.support.v4.view.ViewPager.setInternalPageChangeListener(android.support.v4.view.ViewPager$OnPageChangeListener)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_onInterceptTouchEvent_vlt5 = android_support_v4_view_ViewPager_clz.onInterceptTouchEvent.overload('android.view.MotionEvent');
    android_support_v4_view_ViewPager_clz_method_onInterceptTouchEvent_vlt5.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_onInterceptTouchEvent_vlt5.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean android.support.v4.view.ViewPager.onInterceptTouchEvent(android.view.MotionEvent)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_arrowScroll_8ntk = android_support_v4_view_ViewPager_clz.arrowScroll.overload('int');
    android_support_v4_view_ViewPager_clz_method_arrowScroll_8ntk.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_arrowScroll_8ntk.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean android.support.v4.view.ViewPager.arrowScroll(int)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_addNewItem_5uui = android_support_v4_view_ViewPager_clz.addNewItem.overload('int', 'int');
    android_support_v4_view_ViewPager_clz_method_addNewItem_5uui.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_addNewItem_5uui.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'android.support.v4.view.ViewPager$ItemInfo android.support.v4.view.ViewPager.addNewItem(int,int)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_checkLayoutParams_3hwh = android_support_v4_view_ViewPager_clz.checkLayoutParams.overload('android.view.ViewGroup$LayoutParams');
    android_support_v4_view_ViewPager_clz_method_checkLayoutParams_3hwh.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_checkLayoutParams_3hwh.call(this, v0);
        methodInBeat(invokeId, startTime, 'protected boolean android.support.v4.view.ViewPager.checkLayoutParams(android.view.ViewGroup$LayoutParams)', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_dispatchOnScrollStateChanged_29vq = android_support_v4_view_ViewPager_clz.dispatchOnScrollStateChanged.overload('int');
    android_support_v4_view_ViewPager_clz_method_dispatchOnScrollStateChanged_29vq.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_dispatchOnScrollStateChanged_29vq.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void android.support.v4.view.ViewPager.dispatchOnScrollStateChanged(int)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_enableLayers_rtjj = android_support_v4_view_ViewPager_clz.enableLayers.overload('boolean');
    android_support_v4_view_ViewPager_clz_method_enableLayers_rtjj.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_enableLayers_rtjj.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void android.support.v4.view.ViewPager.enableLayers(boolean)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_draw_luki = android_support_v4_view_ViewPager_clz.draw.overload('android.graphics.Canvas');
    android_support_v4_view_ViewPager_clz_method_draw_luki.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_draw_luki.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.draw(android.graphics.Canvas)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_setCurrentItemInternal_4la7 = android_support_v4_view_ViewPager_clz.setCurrentItemInternal.overload('int', 'boolean', 'boolean');
    android_support_v4_view_ViewPager_clz_method_setCurrentItemInternal_4la7.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_setCurrentItemInternal_4la7.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'void android.support.v4.view.ViewPager.setCurrentItemInternal(int,boolean,boolean)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_dispatchOnPageSelected_47co = android_support_v4_view_ViewPager_clz.dispatchOnPageSelected.overload('int');
    android_support_v4_view_ViewPager_clz_method_dispatchOnPageSelected_47co.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_dispatchOnPageSelected_47co.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void android.support.v4.view.ViewPager.dispatchOnPageSelected(int)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_onPageScrolled_ltek = android_support_v4_view_ViewPager_clz.onPageScrolled.overload('int', 'float', 'int');
    android_support_v4_view_ViewPager_clz_method_onPageScrolled_ltek.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_onPageScrolled_ltek.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'protected void android.support.v4.view.ViewPager.onPageScrolled(int,float,int)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_onSecondaryPointerUp_6pow = android_support_v4_view_ViewPager_clz.onSecondaryPointerUp.overload('android.view.MotionEvent');
    android_support_v4_view_ViewPager_clz_method_onSecondaryPointerUp_6pow.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_onSecondaryPointerUp_6pow.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void android.support.v4.view.ViewPager.onSecondaryPointerUp(android.view.MotionEvent)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_calculatePageOffsets_zxrk = android_support_v4_view_ViewPager_clz.calculatePageOffsets.overload('android.support.v4.view.ViewPager$ItemInfo', 'int', 'android.support.v4.view.ViewPager$ItemInfo');
    android_support_v4_view_ViewPager_clz_method_calculatePageOffsets_zxrk.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_calculatePageOffsets_zxrk.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'private void android.support.v4.view.ViewPager.calculatePageOffsets(android.support.v4.view.ViewPager$ItemInfo,int,android.support.v4.view.ViewPager$ItemInfo)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_setCurrentItem_uef6 = android_support_v4_view_ViewPager_clz.setCurrentItem.overload('int', 'boolean');
    android_support_v4_view_ViewPager_clz_method_setCurrentItem_uef6.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_setCurrentItem_uef6.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.setCurrentItem(int,boolean)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_generateDefaultLayoutParams_f0n9 = android_support_v4_view_ViewPager_clz.generateDefaultLayoutParams.overload();
    android_support_v4_view_ViewPager_clz_method_generateDefaultLayoutParams_f0n9.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_generateDefaultLayoutParams_f0n9.call(this);
        methodInBeat(invokeId, startTime, 'protected android.view.ViewGroup$LayoutParams android.support.v4.view.ViewPager.generateDefaultLayoutParams()', executor);
        return ret;
    };
    var android_support_v4_view_ViewPager_clz_method_dispatchOnPageScrolled_ep1v = android_support_v4_view_ViewPager_clz.dispatchOnPageScrolled.overload('int', 'float', 'int');
    android_support_v4_view_ViewPager_clz_method_dispatchOnPageScrolled_ep1v.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_dispatchOnPageScrolled_ep1v.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'private void android.support.v4.view.ViewPager.dispatchOnPageScrolled(int,float,int)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_addView_eexv = android_support_v4_view_ViewPager_clz.addView.overload('android.view.View', 'int', 'android.view.ViewGroup$LayoutParams');
    android_support_v4_view_ViewPager_clz_method_addView_eexv.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_addView_eexv.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.addView(android.view.View,int,android.view.ViewGroup$LayoutParams)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_addOnAdapterChangeListener_xo79 = android_support_v4_view_ViewPager_clz.addOnAdapterChangeListener.overload('android.support.v4.view.ViewPager$OnAdapterChangeListener');
    android_support_v4_view_ViewPager_clz_method_addOnAdapterChangeListener_xo79.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_addOnAdapterChangeListener_xo79.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.addOnAdapterChangeListener(android.support.v4.view.ViewPager$OnAdapterChangeListener)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_smoothScrollTo_9f5k = android_support_v4_view_ViewPager_clz.smoothScrollTo.overload('int', 'int');
    android_support_v4_view_ViewPager_clz_method_smoothScrollTo_9f5k.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_smoothScrollTo_9f5k.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'void android.support.v4.view.ViewPager.smoothScrollTo(int,int)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_onRestoreInstanceState_yhba = android_support_v4_view_ViewPager_clz.onRestoreInstanceState.overload('android.os.Parcelable');
    android_support_v4_view_ViewPager_clz_method_onRestoreInstanceState_yhba.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        android_support_v4_view_ViewPager_clz_method_onRestoreInstanceState_yhba.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void android.support.v4.view.ViewPager.onRestoreInstanceState(android.os.Parcelable)', executor);
    };
    var android_support_v4_view_ViewPager_clz_method_infoForCurrentScrollPosition_lyv3 = android_support_v4_view_ViewPager_clz.infoForCurrentScrollPosition.overload();
    android_support_v4_view_ViewPager_clz_method_infoForCurrentScrollPosition_lyv3.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = android_support_v4_view_ViewPager_clz_method_infoForCurrentScrollPosition_lyv3.call(this);
        methodInBeat(invokeId, startTime, 'private android.support.v4.view.ViewPager$ItemInfo android.support.v4.view.ViewPager.infoForCurrentScrollPosition()', executor);
        return ret;
    };
}

function hookingAndroidxViewPager() {
    if (!classExists("androidx.viewpager.widget.ViewPager")) {
        console.warn("Class androidx.viewpager.widget.ViewPager not found.");
        return;
    }
    var androidx_viewpager_widget_ViewPager_clz = Java.use('androidx.viewpager.widget.ViewPager');
    var androidx_viewpager_widget_ViewPager_clz_method_removeOnAdapterChangeListener_346p = androidx_viewpager_widget_ViewPager_clz.removeOnAdapterChangeListener.overload('androidx.viewpager.widget.ViewPager$OnAdapterChangeListener');
    androidx_viewpager_widget_ViewPager_clz_method_removeOnAdapterChangeListener_346p.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_removeOnAdapterChangeListener_346p.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.removeOnAdapterChangeListener(androidx.viewpager.widget.ViewPager$OnAdapterChangeListener)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_canScrollHorizontally_tvve = androidx_viewpager_widget_ViewPager_clz.canScrollHorizontally.overload('int');
    androidx_viewpager_widget_ViewPager_clz_method_canScrollHorizontally_tvve.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_canScrollHorizontally_tvve.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean androidx.viewpager.widget.ViewPager.canScrollHorizontally(int)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_onSaveInstanceState_70eb = androidx_viewpager_widget_ViewPager_clz.onSaveInstanceState.overload();
    androidx_viewpager_widget_ViewPager_clz_method_onSaveInstanceState_70eb.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_onSaveInstanceState_70eb.call(this);
        methodInBeat(invokeId, startTime, 'public android.os.Parcelable androidx.viewpager.widget.ViewPager.onSaveInstanceState()', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_onSizeChanged_ca5z = androidx_viewpager_widget_ViewPager_clz.onSizeChanged.overload('int', 'int', 'int', 'int');
    androidx_viewpager_widget_ViewPager_clz_method_onSizeChanged_ca5z.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_onSizeChanged_ca5z.call(this, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'protected void androidx.viewpager.widget.ViewPager.onSizeChanged(int,int,int,int)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_pageRight_6eur = androidx_viewpager_widget_ViewPager_clz.pageRight.overload();
    androidx_viewpager_widget_ViewPager_clz_method_pageRight_6eur.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_pageRight_6eur.call(this);
        methodInBeat(invokeId, startTime, 'boolean androidx.viewpager.widget.ViewPager.pageRight()', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_dispatchKeyEvent_v3ew = androidx_viewpager_widget_ViewPager_clz.dispatchKeyEvent.overload('android.view.KeyEvent');
    androidx_viewpager_widget_ViewPager_clz_method_dispatchKeyEvent_v3ew.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_dispatchKeyEvent_v3ew.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean androidx.viewpager.widget.ViewPager.dispatchKeyEvent(android.view.KeyEvent)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_getAdapter_pu8g = androidx_viewpager_widget_ViewPager_clz.getAdapter.overload();
    androidx_viewpager_widget_ViewPager_clz_method_getAdapter_pu8g.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_getAdapter_pu8g.call(this);
        methodInBeat(invokeId, startTime, 'public androidx.viewpager.widget.PagerAdapter androidx.viewpager.widget.ViewPager.getAdapter()', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_clearOnPageChangeListeners_o8up = androidx_viewpager_widget_ViewPager_clz.clearOnPageChangeListeners.overload();
    androidx_viewpager_widget_ViewPager_clz_method_clearOnPageChangeListeners_o8up.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_clearOnPageChangeListeners_o8up.call(this);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.clearOnPageChangeListeners()', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_getChildRectInPagerCoordinates_e92s = androidx_viewpager_widget_ViewPager_clz.getChildRectInPagerCoordinates.overload('android.graphics.Rect', 'android.view.View');
    androidx_viewpager_widget_ViewPager_clz_method_getChildRectInPagerCoordinates_e92s.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_getChildRectInPagerCoordinates_e92s.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'private android.graphics.Rect androidx.viewpager.widget.ViewPager.getChildRectInPagerCoordinates(android.graphics.Rect,android.view.View)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_fakeDragBy_hq23 = androidx_viewpager_widget_ViewPager_clz.fakeDragBy.overload('float');
    androidx_viewpager_widget_ViewPager_clz_method_fakeDragBy_hq23.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_fakeDragBy_hq23.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.fakeDragBy(float)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_dataSetChanged_6t85 = androidx_viewpager_widget_ViewPager_clz.dataSetChanged.overload();
    androidx_viewpager_widget_ViewPager_clz_method_dataSetChanged_6t85.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_dataSetChanged_6t85.call(this);
        methodInBeat(invokeId, startTime, 'void androidx.viewpager.widget.ViewPager.dataSetChanged()', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_onLayout_bdel = androidx_viewpager_widget_ViewPager_clz.onLayout.overload('boolean', 'int', 'int', 'int', 'int');
    androidx_viewpager_widget_ViewPager_clz_method_onLayout_bdel.implementation = function(v0, v1, v2, v3, v4) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_onLayout_bdel.call(this, v0, v1, v2, v3, v4);
        methodInBeat(invokeId, startTime, 'protected void androidx.viewpager.widget.ViewPager.onLayout(boolean,int,int,int,int)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_setCurrentItemInternal_ac9m = androidx_viewpager_widget_ViewPager_clz.setCurrentItemInternal.overload('int', 'boolean', 'boolean', 'int');
    androidx_viewpager_widget_ViewPager_clz_method_setCurrentItemInternal_ac9m.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_setCurrentItemInternal_ac9m.call(this, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'void androidx.viewpager.widget.ViewPager.setCurrentItemInternal(int,boolean,boolean,int)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_setCurrentItem_g5xa = androidx_viewpager_widget_ViewPager_clz.setCurrentItem.overload('int');
    androidx_viewpager_widget_ViewPager_clz_method_setCurrentItem_g5xa.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_setCurrentItem_g5xa.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.setCurrentItem(int)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_pageScrolled_rxhe = androidx_viewpager_widget_ViewPager_clz.pageScrolled.overload('int');
    androidx_viewpager_widget_ViewPager_clz_method_pageScrolled_rxhe.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_pageScrolled_rxhe.call(this, v0);
        methodInBeat(invokeId, startTime, 'private boolean androidx.viewpager.widget.ViewPager.pageScrolled(int)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_dispatchPopulateAccessibilityEvent_fhgv = androidx_viewpager_widget_ViewPager_clz.dispatchPopulateAccessibilityEvent.overload('android.view.accessibility.AccessibilityEvent');
    androidx_viewpager_widget_ViewPager_clz_method_dispatchPopulateAccessibilityEvent_fhgv.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_dispatchPopulateAccessibilityEvent_fhgv.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean androidx.viewpager.widget.ViewPager.dispatchPopulateAccessibilityEvent(android.view.accessibility.AccessibilityEvent)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_setScrollingCacheEnabled_0y68 = androidx_viewpager_widget_ViewPager_clz.setScrollingCacheEnabled.overload('boolean');
    androidx_viewpager_widget_ViewPager_clz_method_setScrollingCacheEnabled_0y68.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_setScrollingCacheEnabled_0y68.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.setScrollingCacheEnabled(boolean)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_infoForAnyChild_3eru = androidx_viewpager_widget_ViewPager_clz.infoForAnyChild.overload('android.view.View');
    androidx_viewpager_widget_ViewPager_clz_method_infoForAnyChild_3eru.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_infoForAnyChild_3eru.call(this, v0);
        methodInBeat(invokeId, startTime, 'androidx.viewpager.widget.ViewPager$ItemInfo androidx.viewpager.widget.ViewPager.infoForAnyChild(android.view.View)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_pageLeft_h7dx = androidx_viewpager_widget_ViewPager_clz.pageLeft.overload();
    androidx_viewpager_widget_ViewPager_clz_method_pageLeft_h7dx.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_pageLeft_h7dx.call(this);
        methodInBeat(invokeId, startTime, 'boolean androidx.viewpager.widget.ViewPager.pageLeft()', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_setScrollState_n3qa = androidx_viewpager_widget_ViewPager_clz.setScrollState.overload('int');
    androidx_viewpager_widget_ViewPager_clz_method_setScrollState_n3qa.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_setScrollState_n3qa.call(this, v0);
        methodInBeat(invokeId, startTime, 'void androidx.viewpager.widget.ViewPager.setScrollState(int)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_isGutterDrag_fyut = androidx_viewpager_widget_ViewPager_clz.isGutterDrag.overload('float', 'float');
    androidx_viewpager_widget_ViewPager_clz_method_isGutterDrag_fyut.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_isGutterDrag_fyut.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'private boolean androidx.viewpager.widget.ViewPager.isGutterDrag(float,float)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_completeScroll_gfqf = androidx_viewpager_widget_ViewPager_clz.completeScroll.overload('boolean');
    androidx_viewpager_widget_ViewPager_clz_method_completeScroll_gfqf.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_completeScroll_gfqf.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.completeScroll(boolean)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_onRequestFocusInDescendants_0ydq = androidx_viewpager_widget_ViewPager_clz.onRequestFocusInDescendants.overload('int', 'android.graphics.Rect');
    androidx_viewpager_widget_ViewPager_clz_method_onRequestFocusInDescendants_0ydq.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_onRequestFocusInDescendants_0ydq.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'protected boolean androidx.viewpager.widget.ViewPager.onRequestFocusInDescendants(int,android.graphics.Rect)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_getPageMargin_80nr = androidx_viewpager_widget_ViewPager_clz.getPageMargin.overload();
    androidx_viewpager_widget_ViewPager_clz_method_getPageMargin_80nr.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_getPageMargin_80nr.call(this);
        methodInBeat(invokeId, startTime, 'public int androidx.viewpager.widget.ViewPager.getPageMargin()', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_calculatePageOffsets_9dlg = androidx_viewpager_widget_ViewPager_clz.calculatePageOffsets.overload('androidx.viewpager.widget.ViewPager$ItemInfo', 'int', 'androidx.viewpager.widget.ViewPager$ItemInfo');
    androidx_viewpager_widget_ViewPager_clz_method_calculatePageOffsets_9dlg.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_calculatePageOffsets_9dlg.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.calculatePageOffsets(androidx.viewpager.widget.ViewPager$ItemInfo,int,androidx.viewpager.widget.ViewPager$ItemInfo)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_isFakeDragging_w9il = androidx_viewpager_widget_ViewPager_clz.isFakeDragging.overload();
    androidx_viewpager_widget_ViewPager_clz_method_isFakeDragging_w9il.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_isFakeDragging_w9il.call(this);
        methodInBeat(invokeId, startTime, 'public boolean androidx.viewpager.widget.ViewPager.isFakeDragging()', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_removeNonDecorViews_71ul = androidx_viewpager_widget_ViewPager_clz.removeNonDecorViews.overload();
    androidx_viewpager_widget_ViewPager_clz_method_removeNonDecorViews_71ul.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_removeNonDecorViews_71ul.call(this);
        methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.removeNonDecorViews()', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_addOnAdapterChangeListener_ucgf = androidx_viewpager_widget_ViewPager_clz.addOnAdapterChangeListener.overload('androidx.viewpager.widget.ViewPager$OnAdapterChangeListener');
    androidx_viewpager_widget_ViewPager_clz_method_addOnAdapterChangeListener_ucgf.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_addOnAdapterChangeListener_ucgf.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.addOnAdapterChangeListener(androidx.viewpager.widget.ViewPager$OnAdapterChangeListener)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_requestParentDisallowInterceptTouchEvent_5p2g = androidx_viewpager_widget_ViewPager_clz.requestParentDisallowInterceptTouchEvent.overload('boolean');
    androidx_viewpager_widget_ViewPager_clz_method_requestParentDisallowInterceptTouchEvent_5p2g.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_requestParentDisallowInterceptTouchEvent_5p2g.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.requestParentDisallowInterceptTouchEvent(boolean)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_getOffscreenPageLimit_5d7d = androidx_viewpager_widget_ViewPager_clz.getOffscreenPageLimit.overload();
    androidx_viewpager_widget_ViewPager_clz_method_getOffscreenPageLimit_5d7d.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_getOffscreenPageLimit_5d7d.call(this);
        methodInBeat(invokeId, startTime, 'public int androidx.viewpager.widget.ViewPager.getOffscreenPageLimit()', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_addTouchables_ay2s = androidx_viewpager_widget_ViewPager_clz.addTouchables.overload('java.util.ArrayList');
    androidx_viewpager_widget_ViewPager_clz_method_addTouchables_ay2s.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_addTouchables_ay2s.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.addTouchables(java.util.ArrayList)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_getClientWidth_g33r = androidx_viewpager_widget_ViewPager_clz.getClientWidth.overload();
    androidx_viewpager_widget_ViewPager_clz_method_getClientWidth_g33r.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_getClientWidth_g33r.call(this);
        methodInBeat(invokeId, startTime, 'private int androidx.viewpager.widget.ViewPager.getClientWidth()', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_generateLayoutParams_m21m = androidx_viewpager_widget_ViewPager_clz.generateLayoutParams.overload('android.view.ViewGroup$LayoutParams');
    androidx_viewpager_widget_ViewPager_clz_method_generateLayoutParams_m21m.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_generateLayoutParams_m21m.call(this, v0);
        methodInBeat(invokeId, startTime, 'protected android.view.ViewGroup$LayoutParams androidx.viewpager.widget.ViewPager.generateLayoutParams(android.view.ViewGroup$LayoutParams)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_setPageTransformer_46rm = androidx_viewpager_widget_ViewPager_clz.setPageTransformer.overload('boolean', 'androidx.viewpager.widget.ViewPager$PageTransformer');
    androidx_viewpager_widget_ViewPager_clz_method_setPageTransformer_46rm.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_setPageTransformer_46rm.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.setPageTransformer(boolean,androidx.viewpager.widget.ViewPager$PageTransformer)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_drawableStateChanged_tacc = androidx_viewpager_widget_ViewPager_clz.drawableStateChanged.overload();
    androidx_viewpager_widget_ViewPager_clz_method_drawableStateChanged_tacc.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_drawableStateChanged_tacc.call(this);
        methodInBeat(invokeId, startTime, 'protected void androidx.viewpager.widget.ViewPager.drawableStateChanged()', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_infoForPosition_uo31 = androidx_viewpager_widget_ViewPager_clz.infoForPosition.overload('int');
    androidx_viewpager_widget_ViewPager_clz_method_infoForPosition_uo31.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_infoForPosition_uo31.call(this, v0);
        methodInBeat(invokeId, startTime, 'androidx.viewpager.widget.ViewPager$ItemInfo androidx.viewpager.widget.ViewPager.infoForPosition(int)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_scrollToItem_7u5u = androidx_viewpager_widget_ViewPager_clz.scrollToItem.overload('int', 'boolean', 'int', 'boolean');
    androidx_viewpager_widget_ViewPager_clz_method_scrollToItem_7u5u.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_scrollToItem_7u5u.call(this, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.scrollToItem(int,boolean,int,boolean)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_onTouchEvent_ml2d = androidx_viewpager_widget_ViewPager_clz.onTouchEvent.overload('android.view.MotionEvent');
    androidx_viewpager_widget_ViewPager_clz_method_onTouchEvent_ml2d.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_onTouchEvent_ml2d.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean androidx.viewpager.widget.ViewPager.onTouchEvent(android.view.MotionEvent)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_generateLayoutParams_o5br = androidx_viewpager_widget_ViewPager_clz.generateLayoutParams.overload('android.util.AttributeSet');
    androidx_viewpager_widget_ViewPager_clz_method_generateLayoutParams_o5br.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_generateLayoutParams_o5br.call(this, v0);
        methodInBeat(invokeId, startTime, 'public android.view.ViewGroup$LayoutParams androidx.viewpager.widget.ViewPager.generateLayoutParams(android.util.AttributeSet)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_setPageMarginDrawable_0s8r = androidx_viewpager_widget_ViewPager_clz.setPageMarginDrawable.overload('android.graphics.drawable.Drawable');
    androidx_viewpager_widget_ViewPager_clz_method_setPageMarginDrawable_0s8r.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_setPageMarginDrawable_0s8r.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.setPageMarginDrawable(android.graphics.drawable.Drawable)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_determineTargetPage_efu8 = androidx_viewpager_widget_ViewPager_clz.determineTargetPage.overload('int', 'float', 'int', 'int');
    androidx_viewpager_widget_ViewPager_clz_method_determineTargetPage_efu8.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_determineTargetPage_efu8.call(this, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'private int androidx.viewpager.widget.ViewPager.determineTargetPage(int,float,int,int)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_resetTouch_r3gx = androidx_viewpager_widget_ViewPager_clz.resetTouch.overload();
    androidx_viewpager_widget_ViewPager_clz_method_resetTouch_r3gx.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_resetTouch_r3gx.call(this);
        methodInBeat(invokeId, startTime, 'private boolean androidx.viewpager.widget.ViewPager.resetTouch()', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_endFakeDrag_3we9 = androidx_viewpager_widget_ViewPager_clz.endFakeDrag.overload();
    androidx_viewpager_widget_ViewPager_clz_method_endFakeDrag_3we9.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_endFakeDrag_3we9.call(this);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.endFakeDrag()', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_populate_kzwg = androidx_viewpager_widget_ViewPager_clz.populate.overload();
    androidx_viewpager_widget_ViewPager_clz_method_populate_kzwg.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_populate_kzwg.call(this);
        methodInBeat(invokeId, startTime, 'void androidx.viewpager.widget.ViewPager.populate()', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_setOffscreenPageLimit_ntao = androidx_viewpager_widget_ViewPager_clz.setOffscreenPageLimit.overload('int');
    androidx_viewpager_widget_ViewPager_clz_method_setOffscreenPageLimit_ntao.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_setOffscreenPageLimit_ntao.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.setOffscreenPageLimit(int)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_getCurrentItem_848m = androidx_viewpager_widget_ViewPager_clz.getCurrentItem.overload();
    androidx_viewpager_widget_ViewPager_clz_method_getCurrentItem_848m.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_getCurrentItem_848m.call(this);
        methodInBeat(invokeId, startTime, 'public int androidx.viewpager.widget.ViewPager.getCurrentItem()', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_onAttachedToWindow_53bs = androidx_viewpager_widget_ViewPager_clz.onAttachedToWindow.overload();
    androidx_viewpager_widget_ViewPager_clz_method_onAttachedToWindow_53bs.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_onAttachedToWindow_53bs.call(this);
        methodInBeat(invokeId, startTime, 'protected void androidx.viewpager.widget.ViewPager.onAttachedToWindow()', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_performDrag_exui = androidx_viewpager_widget_ViewPager_clz.performDrag.overload('float');
    androidx_viewpager_widget_ViewPager_clz_method_performDrag_exui.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_performDrag_exui.call(this, v0);
        methodInBeat(invokeId, startTime, 'private boolean androidx.viewpager.widget.ViewPager.performDrag(float)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_isDecorView_nzl4 = androidx_viewpager_widget_ViewPager_clz.isDecorView.overload('android.view.View');
    androidx_viewpager_widget_ViewPager_clz_method_isDecorView_nzl4.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = 'Class';
        var ret = androidx_viewpager_widget_ViewPager_clz_method_isDecorView_nzl4.call(androidx_viewpager_widget_ViewPager_clz, v0);
        methodInBeat(invokeId, startTime, 'private static boolean androidx.viewpager.widget.ViewPager.isDecorView(android.view.View)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_setPageMargin_w0hl = androidx_viewpager_widget_ViewPager_clz.setPageMargin.overload('int');
    androidx_viewpager_widget_ViewPager_clz_method_setPageMargin_w0hl.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_setPageMargin_w0hl.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.setPageMargin(int)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_removeView_c32h = androidx_viewpager_widget_ViewPager_clz.removeView.overload('android.view.View');
    androidx_viewpager_widget_ViewPager_clz_method_removeView_c32h.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_removeView_c32h.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.removeView(android.view.View)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_verifyDrawable_y0h9 = androidx_viewpager_widget_ViewPager_clz.verifyDrawable.overload('android.graphics.drawable.Drawable');
    androidx_viewpager_widget_ViewPager_clz_method_verifyDrawable_y0h9.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_verifyDrawable_y0h9.call(this, v0);
        methodInBeat(invokeId, startTime, 'protected boolean androidx.viewpager.widget.ViewPager.verifyDrawable(android.graphics.drawable.Drawable)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_onDetachedFromWindow_k5n2 = androidx_viewpager_widget_ViewPager_clz.onDetachedFromWindow.overload();
    androidx_viewpager_widget_ViewPager_clz_method_onDetachedFromWindow_k5n2.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_onDetachedFromWindow_k5n2.call(this);
        methodInBeat(invokeId, startTime, 'protected void androidx.viewpager.widget.ViewPager.onDetachedFromWindow()', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_removeOnPageChangeListener_5ovh = androidx_viewpager_widget_ViewPager_clz.removeOnPageChangeListener.overload('androidx.viewpager.widget.ViewPager$OnPageChangeListener');
    androidx_viewpager_widget_ViewPager_clz_method_removeOnPageChangeListener_5ovh.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_removeOnPageChangeListener_5ovh.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.removeOnPageChangeListener(androidx.viewpager.widget.ViewPager$OnPageChangeListener)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_populate_dtw5 = androidx_viewpager_widget_ViewPager_clz.populate.overload('int');
    androidx_viewpager_widget_ViewPager_clz_method_populate_dtw5.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_populate_dtw5.call(this, v0);
        methodInBeat(invokeId, startTime, 'void androidx.viewpager.widget.ViewPager.populate(int)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_addFocusables_w84t = androidx_viewpager_widget_ViewPager_clz.addFocusables.overload('java.util.ArrayList', 'int', 'int');
    androidx_viewpager_widget_ViewPager_clz_method_addFocusables_w84t.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_addFocusables_w84t.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.addFocusables(java.util.ArrayList,int,int)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_infoForChild_w2zx = androidx_viewpager_widget_ViewPager_clz.infoForChild.overload('android.view.View');
    androidx_viewpager_widget_ViewPager_clz_method_infoForChild_w2zx.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_infoForChild_w2zx.call(this, v0);
        methodInBeat(invokeId, startTime, 'androidx.viewpager.widget.ViewPager$ItemInfo androidx.viewpager.widget.ViewPager.infoForChild(android.view.View)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_smoothScrollTo_zitg = androidx_viewpager_widget_ViewPager_clz.smoothScrollTo.overload('int', 'int', 'int');
    androidx_viewpager_widget_ViewPager_clz_method_smoothScrollTo_zitg.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_smoothScrollTo_zitg.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'void androidx.viewpager.widget.ViewPager.smoothScrollTo(int,int,int)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_onMeasure_ujt8 = androidx_viewpager_widget_ViewPager_clz.onMeasure.overload('int', 'int');
    androidx_viewpager_widget_ViewPager_clz_method_onMeasure_ujt8.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_onMeasure_ujt8.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'protected void androidx.viewpager.widget.ViewPager.onMeasure(int,int)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_sortChildDrawingOrder_no78 = androidx_viewpager_widget_ViewPager_clz.sortChildDrawingOrder.overload();
    androidx_viewpager_widget_ViewPager_clz_method_sortChildDrawingOrder_no78.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_sortChildDrawingOrder_no78.call(this);
        methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.sortChildDrawingOrder()', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_getChildDrawingOrder_xmoc = androidx_viewpager_widget_ViewPager_clz.getChildDrawingOrder.overload('int', 'int');
    androidx_viewpager_widget_ViewPager_clz_method_getChildDrawingOrder_xmoc.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_getChildDrawingOrder_xmoc.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'protected int androidx.viewpager.widget.ViewPager.getChildDrawingOrder(int,int)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_executeKeyEvent_3toa = androidx_viewpager_widget_ViewPager_clz.executeKeyEvent.overload('android.view.KeyEvent');
    androidx_viewpager_widget_ViewPager_clz_method_executeKeyEvent_3toa.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_executeKeyEvent_3toa.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean androidx.viewpager.widget.ViewPager.executeKeyEvent(android.view.KeyEvent)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_beginFakeDrag_e8qj = androidx_viewpager_widget_ViewPager_clz.beginFakeDrag.overload();
    androidx_viewpager_widget_ViewPager_clz_method_beginFakeDrag_e8qj.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_beginFakeDrag_e8qj.call(this);
        methodInBeat(invokeId, startTime, 'public boolean androidx.viewpager.widget.ViewPager.beginFakeDrag()', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_endDrag_a3zk = androidx_viewpager_widget_ViewPager_clz.endDrag.overload();
    androidx_viewpager_widget_ViewPager_clz_method_endDrag_a3zk.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_endDrag_a3zk.call(this);
        methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.endDrag()', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_onDraw_2ec1 = androidx_viewpager_widget_ViewPager_clz.onDraw.overload('android.graphics.Canvas');
    androidx_viewpager_widget_ViewPager_clz_method_onDraw_2ec1.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_onDraw_2ec1.call(this, v0);
        methodInBeat(invokeId, startTime, 'protected void androidx.viewpager.widget.ViewPager.onDraw(android.graphics.Canvas)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_recomputeScrollPosition_vgfe = androidx_viewpager_widget_ViewPager_clz.recomputeScrollPosition.overload('int', 'int', 'int', 'int');
    androidx_viewpager_widget_ViewPager_clz_method_recomputeScrollPosition_vgfe.implementation = function(v0, v1, v2, v3) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_recomputeScrollPosition_vgfe.call(this, v0, v1, v2, v3);
        methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.recomputeScrollPosition(int,int,int,int)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_computeScroll_439p = androidx_viewpager_widget_ViewPager_clz.computeScroll.overload();
    androidx_viewpager_widget_ViewPager_clz_method_computeScroll_439p.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_computeScroll_439p.call(this);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.computeScroll()', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_canScroll_x6gp = androidx_viewpager_widget_ViewPager_clz.canScroll.overload('android.view.View', 'boolean', 'int', 'int', 'int');
    androidx_viewpager_widget_ViewPager_clz_method_canScroll_x6gp.implementation = function(v0, v1, v2, v3, v4) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_canScroll_x6gp.call(this, v0, v1, v2, v3, v4);
        methodInBeat(invokeId, startTime, 'protected boolean androidx.viewpager.widget.ViewPager.canScroll(android.view.View,boolean,int,int,int)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_setPageMarginDrawable_b4aj = androidx_viewpager_widget_ViewPager_clz.setPageMarginDrawable.overload('int');
    androidx_viewpager_widget_ViewPager_clz_method_setPageMarginDrawable_b4aj.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_setPageMarginDrawable_b4aj.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.setPageMarginDrawable(int)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_setOnPageChangeListener_41ur = androidx_viewpager_widget_ViewPager_clz.setOnPageChangeListener.overload('androidx.viewpager.widget.ViewPager$OnPageChangeListener');
    androidx_viewpager_widget_ViewPager_clz_method_setOnPageChangeListener_41ur.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_setOnPageChangeListener_41ur.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.setOnPageChangeListener(androidx.viewpager.widget.ViewPager$OnPageChangeListener)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_distanceInfluenceForSnapDuration_pguu = androidx_viewpager_widget_ViewPager_clz.distanceInfluenceForSnapDuration.overload('float');
    androidx_viewpager_widget_ViewPager_clz_method_distanceInfluenceForSnapDuration_pguu.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_distanceInfluenceForSnapDuration_pguu.call(this, v0);
        methodInBeat(invokeId, startTime, 'float androidx.viewpager.widget.ViewPager.distanceInfluenceForSnapDuration(float)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_initViewPager_qtxg = androidx_viewpager_widget_ViewPager_clz.initViewPager.overload();
    androidx_viewpager_widget_ViewPager_clz_method_initViewPager_qtxg.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_initViewPager_qtxg.call(this);
        methodInBeat(invokeId, startTime, 'void androidx.viewpager.widget.ViewPager.initViewPager()', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_addOnPageChangeListener_34lc = androidx_viewpager_widget_ViewPager_clz.addOnPageChangeListener.overload('androidx.viewpager.widget.ViewPager$OnPageChangeListener');
    androidx_viewpager_widget_ViewPager_clz_method_addOnPageChangeListener_34lc.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_addOnPageChangeListener_34lc.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.addOnPageChangeListener(androidx.viewpager.widget.ViewPager$OnPageChangeListener)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_onInterceptTouchEvent_ysyr = androidx_viewpager_widget_ViewPager_clz.onInterceptTouchEvent.overload('android.view.MotionEvent');
    androidx_viewpager_widget_ViewPager_clz_method_onInterceptTouchEvent_ysyr.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_onInterceptTouchEvent_ysyr.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean androidx.viewpager.widget.ViewPager.onInterceptTouchEvent(android.view.MotionEvent)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_arrowScroll_5ub1 = androidx_viewpager_widget_ViewPager_clz.arrowScroll.overload('int');
    androidx_viewpager_widget_ViewPager_clz_method_arrowScroll_5ub1.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_arrowScroll_5ub1.call(this, v0);
        methodInBeat(invokeId, startTime, 'public boolean androidx.viewpager.widget.ViewPager.arrowScroll(int)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_addNewItem_met3 = androidx_viewpager_widget_ViewPager_clz.addNewItem.overload('int', 'int');
    androidx_viewpager_widget_ViewPager_clz_method_addNewItem_met3.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_addNewItem_met3.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'androidx.viewpager.widget.ViewPager$ItemInfo androidx.viewpager.widget.ViewPager.addNewItem(int,int)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_checkLayoutParams_4fqh = androidx_viewpager_widget_ViewPager_clz.checkLayoutParams.overload('android.view.ViewGroup$LayoutParams');
    androidx_viewpager_widget_ViewPager_clz_method_checkLayoutParams_4fqh.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_checkLayoutParams_4fqh.call(this, v0);
        methodInBeat(invokeId, startTime, 'protected boolean androidx.viewpager.widget.ViewPager.checkLayoutParams(android.view.ViewGroup$LayoutParams)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_setAdapter_ay3i = androidx_viewpager_widget_ViewPager_clz.setAdapter.overload('androidx.viewpager.widget.PagerAdapter');
    androidx_viewpager_widget_ViewPager_clz_method_setAdapter_ay3i.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_setAdapter_ay3i.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.setAdapter(androidx.viewpager.widget.PagerAdapter)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_dispatchOnScrollStateChanged_ullc = androidx_viewpager_widget_ViewPager_clz.dispatchOnScrollStateChanged.overload('int');
    androidx_viewpager_widget_ViewPager_clz_method_dispatchOnScrollStateChanged_ullc.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_dispatchOnScrollStateChanged_ullc.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.dispatchOnScrollStateChanged(int)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_enableLayers_df5g = androidx_viewpager_widget_ViewPager_clz.enableLayers.overload('boolean');
    androidx_viewpager_widget_ViewPager_clz_method_enableLayers_df5g.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_enableLayers_df5g.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.enableLayers(boolean)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_draw_zkah = androidx_viewpager_widget_ViewPager_clz.draw.overload('android.graphics.Canvas');
    androidx_viewpager_widget_ViewPager_clz_method_draw_zkah.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_draw_zkah.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.draw(android.graphics.Canvas)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_setCurrentItemInternal_f0v6 = androidx_viewpager_widget_ViewPager_clz.setCurrentItemInternal.overload('int', 'boolean', 'boolean');
    androidx_viewpager_widget_ViewPager_clz_method_setCurrentItemInternal_f0v6.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_setCurrentItemInternal_f0v6.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'void androidx.viewpager.widget.ViewPager.setCurrentItemInternal(int,boolean,boolean)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_dispatchOnPageSelected_41oa = androidx_viewpager_widget_ViewPager_clz.dispatchOnPageSelected.overload('int');
    androidx_viewpager_widget_ViewPager_clz_method_dispatchOnPageSelected_41oa.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_dispatchOnPageSelected_41oa.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.dispatchOnPageSelected(int)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_setPageTransformer_3q2o = androidx_viewpager_widget_ViewPager_clz.setPageTransformer.overload('boolean', 'androidx.viewpager.widget.ViewPager$PageTransformer', 'int');
    androidx_viewpager_widget_ViewPager_clz_method_setPageTransformer_3q2o.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_setPageTransformer_3q2o.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.setPageTransformer(boolean,androidx.viewpager.widget.ViewPager$PageTransformer,int)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_onPageScrolled_qoey = androidx_viewpager_widget_ViewPager_clz.onPageScrolled.overload('int', 'float', 'int');
    androidx_viewpager_widget_ViewPager_clz_method_onPageScrolled_qoey.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_onPageScrolled_qoey.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'protected void androidx.viewpager.widget.ViewPager.onPageScrolled(int,float,int)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_onSecondaryPointerUp_85g8 = androidx_viewpager_widget_ViewPager_clz.onSecondaryPointerUp.overload('android.view.MotionEvent');
    androidx_viewpager_widget_ViewPager_clz_method_onSecondaryPointerUp_85g8.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_onSecondaryPointerUp_85g8.call(this, v0);
        methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.onSecondaryPointerUp(android.view.MotionEvent)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_setCurrentItem_m7z9 = androidx_viewpager_widget_ViewPager_clz.setCurrentItem.overload('int', 'boolean');
    androidx_viewpager_widget_ViewPager_clz_method_setCurrentItem_m7z9.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_setCurrentItem_m7z9.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.setCurrentItem(int,boolean)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_generateDefaultLayoutParams_h5km = androidx_viewpager_widget_ViewPager_clz.generateDefaultLayoutParams.overload();
    androidx_viewpager_widget_ViewPager_clz_method_generateDefaultLayoutParams_h5km.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_generateDefaultLayoutParams_h5km.call(this);
        methodInBeat(invokeId, startTime, 'protected android.view.ViewGroup$LayoutParams androidx.viewpager.widget.ViewPager.generateDefaultLayoutParams()', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_dispatchOnPageScrolled_rkqf = androidx_viewpager_widget_ViewPager_clz.dispatchOnPageScrolled.overload('int', 'float', 'int');
    androidx_viewpager_widget_ViewPager_clz_method_dispatchOnPageScrolled_rkqf.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_dispatchOnPageScrolled_rkqf.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'private void androidx.viewpager.widget.ViewPager.dispatchOnPageScrolled(int,float,int)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_setInternalPageChangeListener_9cdg = androidx_viewpager_widget_ViewPager_clz.setInternalPageChangeListener.overload('androidx.viewpager.widget.ViewPager$OnPageChangeListener');
    androidx_viewpager_widget_ViewPager_clz_method_setInternalPageChangeListener_9cdg.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_setInternalPageChangeListener_9cdg.call(this, v0);
        methodInBeat(invokeId, startTime, 'androidx.viewpager.widget.ViewPager$OnPageChangeListener androidx.viewpager.widget.ViewPager.setInternalPageChangeListener(androidx.viewpager.widget.ViewPager$OnPageChangeListener)', executor);
        return ret;
    };
    var androidx_viewpager_widget_ViewPager_clz_method_addView_aak3 = androidx_viewpager_widget_ViewPager_clz.addView.overload('android.view.View', 'int', 'android.view.ViewGroup$LayoutParams');
    androidx_viewpager_widget_ViewPager_clz_method_addView_aak3.implementation = function(v0, v1, v2) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_addView_aak3.call(this, v0, v1, v2);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.addView(android.view.View,int,android.view.ViewGroup$LayoutParams)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_smoothScrollTo_hajo = androidx_viewpager_widget_ViewPager_clz.smoothScrollTo.overload('int', 'int');
    androidx_viewpager_widget_ViewPager_clz_method_smoothScrollTo_hajo.implementation = function(v0, v1) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_smoothScrollTo_hajo.call(this, v0, v1);
        methodInBeat(invokeId, startTime, 'void androidx.viewpager.widget.ViewPager.smoothScrollTo(int,int)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_onRestoreInstanceState_v7xe = androidx_viewpager_widget_ViewPager_clz.onRestoreInstanceState.overload('android.os.Parcelable');
    androidx_viewpager_widget_ViewPager_clz_method_onRestoreInstanceState_v7xe.implementation = function(v0) {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        androidx_viewpager_widget_ViewPager_clz_method_onRestoreInstanceState_v7xe.call(this, v0);
        methodInBeat(invokeId, startTime, 'public void androidx.viewpager.widget.ViewPager.onRestoreInstanceState(android.os.Parcelable)', executor);
    };
    var androidx_viewpager_widget_ViewPager_clz_method_infoForCurrentScrollPosition_zbog = androidx_viewpager_widget_ViewPager_clz.infoForCurrentScrollPosition.overload();
    androidx_viewpager_widget_ViewPager_clz_method_infoForCurrentScrollPosition_zbog.implementation = function() {
        var invokeId = Math.random().toString(36).slice( - 8);
        var startTime = new Date().getTime();
        var executor = this.hashCode();
        var ret = androidx_viewpager_widget_ViewPager_clz_method_infoForCurrentScrollPosition_zbog.call(this);
        methodInBeat(invokeId, startTime, 'private androidx.viewpager.widget.ViewPager$ItemInfo androidx.viewpager.widget.ViewPager.infoForCurrentScrollPosition()', executor);
        return ret;
    };
}

Java.perform(function() {
    hookingAndroidV4ViewPager();
    hookingAndroidxViewPager();
});