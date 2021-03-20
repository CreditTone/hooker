
function printStacks(methodName) {
    var stackInfo = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
    console.log(methodName);
    console.log(stackInfo.substring(20));
};

Java.perform(function() {
    var cn_jiguang_verifysdk_d_at_clz = Java.use('cn.jiguang.verifysdk.d.at');
    cn_jiguang_verifysdk_d_at_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void cn.jiguang.verifysdk.d.at.onClick(android.view.View)');
        this.onClick(v0);
    };
    var cn_jiguang_verifysdk_CtLoginActivity_clz = Java.use('cn.jiguang.verifysdk.CtLoginActivity');
    cn_jiguang_verifysdk_CtLoginActivity_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void cn.jiguang.verifysdk.CtLoginActivity.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_cmic_sso_sdk_activity_LoginAuthActivity_clz = Java.use('com.cmic.sso.sdk.activity.LoginAuthActivity');
    com_cmic_sso_sdk_activity_LoginAuthActivity_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.cmic.sso.sdk.activity.LoginAuthActivity.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_imagechooser_imageChooser_ui_ImageGridActivity_clz = Java.use('com.vdian.imagechooser.imageChooser.ui.ImageGridActivity');
    com_vdian_imagechooser_imageChooser_ui_ImageGridActivity_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.imagechooser.imageChooser.ui.ImageGridActivity.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_lib_pulltorefresh_recyclerview_WdRecyclerView_1_clz = Java.use('com.vdian.lib.pulltorefresh.recyclerview.WdRecyclerView$1');
    com_vdian_lib_pulltorefresh_recyclerview_WdRecyclerView_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.lib.pulltorefresh.recyclerview.WdRecyclerView$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_lib_popmenu_WDBMoreMenu_clz = Java.use('com.vdian.android.lib.popmenu.WDBMoreMenu');
    com_vdian_android_lib_popmenu_WDBMoreMenu_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.lib.popmenu.WDBMoreMenu.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_webview_WebViewActivity_clz = Java.use('com.vdian.android.wdb.webview.WebViewActivity');
    com_vdian_android_wdb_webview_WebViewActivity_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.webview.WebViewActivity.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_webview_WebViewActivity_3_clz = Java.use('com.vdian.android.wdb.webview.WebViewActivity$3');
    com_vdian_android_wdb_webview_WebViewActivity_3_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.webview.WebViewActivity$3.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_koudai_lib_im_extension_buyer_chatservicewindow_ChatServiceWindowCouponMsgViewProxy_1_clz = Java.use('com.koudai.lib.im.extension.buyer.chatservicewindow.ChatServiceWindowCouponMsgViewProxy$1');
    com_koudai_lib_im_extension_buyer_chatservicewindow_ChatServiceWindowCouponMsgViewProxy_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.koudai.lib.im.extension.buyer.chatservicewindow.ChatServiceWindowCouponMsgViewProxy$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_im_ui_view_CBottomADSItemView_2_clz = Java.use('com.vdian.android.wdb.im.ui.view.CBottomADSItemView$2');
    com_vdian_android_wdb_im_ui_view_CBottomADSItemView_2_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.im.ui.view.CBottomADSItemView$2.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_im_ui_view_CBottomADSItemView_3_clz = Java.use('com.vdian.android.wdb.im.ui.view.CBottomADSItemView$3');
    com_vdian_android_wdb_im_ui_view_CBottomADSItemView_3_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.im.ui.view.CBottomADSItemView$3.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_koudai_lib_im_extension_CommonMsgItemViewProxy_2_clz = Java.use('com.koudai.lib.im.extension.CommonMsgItemViewProxy$2');
    com_koudai_lib_im_extension_CommonMsgItemViewProxy_2_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.koudai.lib.im.extension.CommonMsgItemViewProxy$2.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_im_extent_e_1_clz = Java.use('com.vdian.android.wdb.im.extent.e$1');
    com_vdian_android_wdb_im_extent_e_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.im.extent.e$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_koudai_lib_im_extension_CommonMsgItemViewProxy_3_clz = Java.use('com.koudai.lib.im.extension.CommonMsgItemViewProxy$3');
    com_koudai_lib_im_extension_CommonMsgItemViewProxy_3_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.koudai.lib.im.extension.CommonMsgItemViewProxy$3.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_koudai_lib_im_extension_CommonMsgItemViewProxy_4_clz = Java.use('com.koudai.lib.im.extension.CommonMsgItemViewProxy$4');
    com_koudai_lib_im_extension_CommonMsgItemViewProxy_4_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.koudai.lib.im.extension.CommonMsgItemViewProxy$4.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_im_extent_e_6_1_clz = Java.use('com.vdian.android.wdb.im.extent.e$6$1');
    com_vdian_android_wdb_im_extent_e_6_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.im.extent.e$6$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_im_extent_e_6_2_clz = Java.use('com.vdian.android.wdb.im.extent.e$6$2');
    com_vdian_android_wdb_im_extent_e_6_2_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.im.extent.e$6$2.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_koudai_lib_im_extension_CommonMsgItemViewProxy_8_clz = Java.use('com.koudai.lib.im.extension.CommonMsgItemViewProxy$8');
    com_koudai_lib_im_extension_CommonMsgItemViewProxy_8_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.koudai.lib.im.extension.CommonMsgItemViewProxy$8.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_im_extent_e_5_1_clz = Java.use('com.vdian.android.wdb.im.extent.e$5$1');
    com_vdian_android_wdb_im_extent_e_5_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.im.extent.e$5$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_im_extent_e_5_2_clz = Java.use('com.vdian.android.wdb.im.extent.e$5$2');
    com_vdian_android_wdb_im_extent_e_5_2_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.im.extent.e$5$2.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_koudai_lib_im_extension_buyer_chatservicewindow_ChatServiceWindowPinTuanMsgViewProxy_1_clz = Java.use('com.koudai.lib.im.extension.buyer.chatservicewindow.ChatServiceWindowPinTuanMsgViewProxy$1');
    com_koudai_lib_im_extension_buyer_chatservicewindow_ChatServiceWindowPinTuanMsgViewProxy_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.koudai.lib.im.extension.buyer.chatservicewindow.ChatServiceWindowPinTuanMsgViewProxy$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_koudai_lib_im_extension_buyer_ads_ADSViewProxy_1_clz = Java.use('com.koudai.lib.im.extension.buyer.ads.ADSViewProxy$1');
    com_koudai_lib_im_extension_buyer_ads_ADSViewProxy_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.koudai.lib.im.extension.buyer.ads.ADSViewProxy$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_im_ui_fragment_ContactsFragment_3_clz = Java.use('com.vdian.android.wdb.im.ui.fragment.ContactsFragment$3');
    com_vdian_android_wdb_im_ui_fragment_ContactsFragment_3_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.im.ui.fragment.ContactsFragment$3.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_im_ui_fragment_ContactsFragment_4_clz = Java.use('com.vdian.android.wdb.im.ui.fragment.ContactsFragment$4');
    com_vdian_android_wdb_im_ui_fragment_ContactsFragment_4_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.im.ui.fragment.ContactsFragment$4.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_im_extent_e_3_1_clz = Java.use('com.vdian.android.wdb.im.extent.e$3$1');
    com_vdian_android_wdb_im_extent_e_3_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.im.extent.e$3$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_im_extent_e_3_2_clz = Java.use('com.vdian.android.wdb.im.extent.e$3$2');
    com_vdian_android_wdb_im_extent_e_3_2_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.im.extent.e$3$2.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_koudai_lib_im_extension_buyer_chatservicewindow_ChatServiceWindowDiscountMsgViewProxy_1_clz = Java.use('com.koudai.lib.im.extension.buyer.chatservicewindow.ChatServiceWindowDiscountMsgViewProxy$1');
    com_koudai_lib_im_extension_buyer_chatservicewindow_ChatServiceWindowDiscountMsgViewProxy_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.koudai.lib.im.extension.buyer.chatservicewindow.ChatServiceWindowDiscountMsgViewProxy$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_koudai_payment_activity_H5PaymentActivity_1_clz = Java.use('com.koudai.payment.activity.H5PaymentActivity$1');
    com_koudai_payment_activity_H5PaymentActivity_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.koudai.payment.activity.H5PaymentActivity$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_koudai_payment_activity_H5PaymentActivity_2_clz = Java.use('com.koudai.payment.activity.H5PaymentActivity$2');
    com_koudai_payment_activity_H5PaymentActivity_2_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.koudai.payment.activity.H5PaymentActivity$2.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_koudai_payment_activity_BaseActivity_2_clz = Java.use('com.koudai.payment.activity.BaseActivity$2');
    com_koudai_payment_activity_BaseActivity_2_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.koudai.payment.activity.BaseActivity$2.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_ShoppingItemView_6_clz = Java.use('com.vdian.transaction.cart.ShoppingItemView$6');
    com_vdian_transaction_cart_ShoppingItemView_6_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.ShoppingItemView$6.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_ShoppingItemView_7_clz = Java.use('com.vdian.transaction.cart.ShoppingItemView$7');
    com_vdian_transaction_cart_ShoppingItemView_7_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.ShoppingItemView$7.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_ShoppingItemView_8_clz = Java.use('com.vdian.transaction.cart.ShoppingItemView$8');
    com_vdian_transaction_cart_ShoppingItemView_8_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.ShoppingItemView$8.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_ShoppingItemView_9_clz = Java.use('com.vdian.transaction.cart.ShoppingItemView$9');
    com_vdian_transaction_cart_ShoppingItemView_9_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.ShoppingItemView$9.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_ShoppingCartFragment_1_clz = Java.use('com.vdian.transaction.cart.ShoppingCartFragment$1');
    com_vdian_transaction_cart_ShoppingCartFragment_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.ShoppingCartFragment$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_base_BaseActivity_1_clz = Java.use('com.vdian.transaction.base.BaseActivity$1');
    com_vdian_transaction_base_BaseActivity_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.base.BaseActivity$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_widget_TransactionLoadingView_clz = Java.use('com.vdian.transaction.widget.TransactionLoadingView');
    com_vdian_transaction_widget_TransactionLoadingView_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.widget.TransactionLoadingView.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_ShoppingCartFragment_31_clz = Java.use('com.vdian.transaction.cart.ShoppingCartFragment$31');
    com_vdian_transaction_cart_ShoppingCartFragment_31_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.ShoppingCartFragment$31.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_ShoppingCartFragment_32_clz = Java.use('com.vdian.transaction.cart.ShoppingCartFragment$32');
    com_vdian_transaction_cart_ShoppingCartFragment_32_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.ShoppingCartFragment$32.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_ShoppingCartFragment_33_clz = Java.use('com.vdian.transaction.cart.ShoppingCartFragment$33');
    com_vdian_transaction_cart_ShoppingCartFragment_33_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.ShoppingCartFragment$33.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_ShoppingCartFragment_22_clz = Java.use('com.vdian.transaction.cart.ShoppingCartFragment$22');
    com_vdian_transaction_cart_ShoppingCartFragment_22_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.ShoppingCartFragment$22.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_ShoppingCartFragment_23_clz = Java.use('com.vdian.transaction.cart.ShoppingCartFragment$23');
    com_vdian_transaction_cart_ShoppingCartFragment_23_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.ShoppingCartFragment$23.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_ShoppingCartFragment_12_clz = Java.use('com.vdian.transaction.cart.ShoppingCartFragment$12');
    com_vdian_transaction_cart_ShoppingCartFragment_12_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.ShoppingCartFragment$12.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_ShoppingCartFragment_24_clz = Java.use('com.vdian.transaction.cart.ShoppingCartFragment$24');
    com_vdian_transaction_cart_ShoppingCartFragment_24_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.ShoppingCartFragment$24.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_order_OrderConfirmActivity_1_clz = Java.use('com.vdian.transaction.order.OrderConfirmActivity$1');
    com_vdian_transaction_order_OrderConfirmActivity_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.order.OrderConfirmActivity$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_ShoppingCartFragment_25_clz = Java.use('com.vdian.transaction.cart.ShoppingCartFragment$25');
    com_vdian_transaction_cart_ShoppingCartFragment_25_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.ShoppingCartFragment$25.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_ShoppingCartFragment_26_clz = Java.use('com.vdian.transaction.cart.ShoppingCartFragment$26');
    com_vdian_transaction_cart_ShoppingCartFragment_26_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.ShoppingCartFragment$26.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_ShoppingCartFragment_27_clz = Java.use('com.vdian.transaction.cart.ShoppingCartFragment$27');
    com_vdian_transaction_cart_ShoppingCartFragment_27_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.ShoppingCartFragment$27.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_ShoppingCartFragment_28_clz = Java.use('com.vdian.transaction.cart.ShoppingCartFragment$28');
    com_vdian_transaction_cart_ShoppingCartFragment_28_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.ShoppingCartFragment$28.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_SkuDialogActivity_1_clz = Java.use('com.vdian.transaction.cart.SkuDialogActivity$1');
    com_vdian_transaction_cart_SkuDialogActivity_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.SkuDialogActivity$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_order_OrderConfirmActivity_6_clz = Java.use('com.vdian.transaction.order.OrderConfirmActivity$6');
    com_vdian_transaction_order_OrderConfirmActivity_6_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.order.OrderConfirmActivity$6.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_SkuDialogActivity_3_clz = Java.use('com.vdian.transaction.cart.SkuDialogActivity$3');
    com_vdian_transaction_cart_SkuDialogActivity_3_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.SkuDialogActivity$3.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_SkuDialogActivity_4_clz = Java.use('com.vdian.transaction.cart.SkuDialogActivity$4');
    com_vdian_transaction_cart_SkuDialogActivity_4_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.SkuDialogActivity$4.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_SkuDialogActivity_5_clz = Java.use('com.vdian.transaction.cart.SkuDialogActivity$5');
    com_vdian_transaction_cart_SkuDialogActivity_5_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.SkuDialogActivity$5.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_SkuDialogActivity_6_clz = Java.use('com.vdian.transaction.cart.SkuDialogActivity$6');
    com_vdian_transaction_cart_SkuDialogActivity_6_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.SkuDialogActivity$6.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_SkuDialogActivity_9_clz = Java.use('com.vdian.transaction.cart.SkuDialogActivity$9');
    com_vdian_transaction_cart_SkuDialogActivity_9_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.SkuDialogActivity$9.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_ItemAmountAlterView_clz = Java.use('com.vdian.transaction.cart.ItemAmountAlterView');
    com_vdian_transaction_cart_ItemAmountAlterView_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.ItemAmountAlterView.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_SkuDialogActivity_10_clz = Java.use('com.vdian.transaction.cart.SkuDialogActivity$10');
    com_vdian_transaction_cart_SkuDialogActivity_10_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.SkuDialogActivity$10.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_ShoppingItemView_3_clz = Java.use('com.vdian.transaction.cart.ShoppingItemView$3');
    com_vdian_transaction_cart_ShoppingItemView_3_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.ShoppingItemView$3.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_transaction_cart_ShoppingItemView_4_clz = Java.use('com.vdian.transaction.cart.ShoppingItemView$4');
    com_vdian_transaction_cart_ShoppingItemView_4_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.transaction.cart.ShoppingItemView$4.onClick(android.view.View)');
        this.onClick(v0);
    };
    var homepage_f_n_1_clz = Java.use('homepage.f.n$1');
    homepage_f_n_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void homepage.f.n$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var homepage_f_d_1_clz = Java.use('homepage.f.d$1');
    homepage_f_d_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void homepage.f.d$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var homepage_f_l_a_1_clz = Java.use('homepage.f.l$a$1');
    homepage_f_l_a_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void homepage.f.l$a$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_homepage_ui_HomePageFragment2_1_clz = Java.use('com.vdian.android.wdb.homepage.ui.HomePageFragment2$1');
    com_vdian_android_wdb_homepage_ui_HomePageFragment2_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.homepage.ui.HomePageFragment2$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_homepage_ui_HomePageFragment2_2_clz = Java.use('com.vdian.android.wdb.homepage.ui.HomePageFragment2$2');
    com_vdian_android_wdb_homepage_ui_HomePageFragment2_2_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.homepage.ui.HomePageFragment2$2.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_homepage_view_CategoryTagsScrollView_1_clz = Java.use('com.vdian.android.wdb.homepage.view.CategoryTagsScrollView$1');
    com_vdian_android_wdb_homepage_view_CategoryTagsScrollView_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.homepage.view.CategoryTagsScrollView$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_homepage_ui_HomePageFragment2_3_clz = Java.use('com.vdian.android.wdb.homepage.ui.HomePageFragment2$3');
    com_vdian_android_wdb_homepage_ui_HomePageFragment2_3_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.homepage.ui.HomePageFragment2$3.onClick(android.view.View)');
        this.onClick(v0);
    };
    var homepage_f_h_1_clz = Java.use('homepage.f.h$1');
    homepage_f_h_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void homepage.f.h$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_homepage_ui_HomePageFragment2_4_clz = Java.use('com.vdian.android.wdb.homepage.ui.HomePageFragment2$4');
    com_vdian_android_wdb_homepage_ui_HomePageFragment2_4_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.homepage.ui.HomePageFragment2$4.onClick(android.view.View)');
        this.onClick(v0);
    };
    var homepage_f_h_b_1_clz = Java.use('homepage.f.h$b$1');
    homepage_f_h_b_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void homepage.f.h$b$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_homepage_view_GridItemView_1_clz = Java.use('com.vdian.android.wdb.homepage.view.GridItemView$1');
    com_vdian_android_wdb_homepage_view_GridItemView_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.homepage.view.GridItemView$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_homepage_ui_HomePageFragment2_8_clz = Java.use('com.vdian.android.wdb.homepage.ui.HomePageFragment2$8');
    com_vdian_android_wdb_homepage_ui_HomePageFragment2_8_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.homepage.ui.HomePageFragment2$8.onClick(android.view.View)');
        this.onClick(v0);
    };
    var homepage_f_k_1_clz = Java.use('homepage.f.k$1');
    homepage_f_k_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void homepage.f.k$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var homepage_f_f_1_clz = Java.use('homepage.f.f$1');
    homepage_f_f_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void homepage.f.f$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_business_ui_origin_LoadingInfoView_clz = Java.use('com.vdian.android.wdb.business.ui.origin.LoadingInfoView');
    com_vdian_android_wdb_business_ui_origin_LoadingInfoView_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.business.ui.origin.LoadingInfoView.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_business_common_recommend_StaggeredRecommendViewHolder_2_clz = Java.use('com.vdian.android.wdb.business.common.recommend.StaggeredRecommendViewHolder$2');
    com_vdian_android_wdb_business_common_recommend_StaggeredRecommendViewHolder_2_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.business.common.recommend.StaggeredRecommendViewHolder$2.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_business_ui_WDLoadingLayout_1_clz = Java.use('com.vdian.android.wdb.business.ui.WDLoadingLayout$1');
    com_vdian_android_wdb_business_ui_WDLoadingLayout_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.business.ui.WDLoadingLayout$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_business_common_base_BaseMVPActivity_1_clz = Java.use('com.vdian.android.wdb.business.common.base.BaseMVPActivity$1');
    com_vdian_android_wdb_business_common_base_BaseMVPActivity_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.business.common.base.BaseMVPActivity$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_business_common_emergencytip_EmergencyTipCore_5_clz = Java.use('com.vdian.android.wdb.business.common.emergencytip.EmergencyTipCore$5');
    com_vdian_android_wdb_business_common_emergencytip_EmergencyTipCore_5_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.business.common.emergencytip.EmergencyTipCore$5.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_business_common_emergencytip_EmergencyTipCore_6_clz = Java.use('com.vdian.android.wdb.business.common.emergencytip.EmergencyTipCore$6');
    com_vdian_android_wdb_business_common_emergencytip_EmergencyTipCore_6_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.business.common.emergencytip.EmergencyTipCore$6.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_main_ui_activity_MainTabsActivity_4_clz = Java.use('com.vdian.android.wdb.main.ui.activity.MainTabsActivity$4');
    com_vdian_android_wdb_main_ui_activity_MainTabsActivity_4_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.main.ui.activity.MainTabsActivity$4.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_main_ui_dialog_OldUserNoticeOpenDialog_1_clz = Java.use('com.vdian.android.wdb.main.ui.dialog.OldUserNoticeOpenDialog$1');
    com_vdian_android_wdb_main_ui_dialog_OldUserNoticeOpenDialog_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.main.ui.dialog.OldUserNoticeOpenDialog$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_main_ui_dialog_OldUserNoticeOpenDialog_2_clz = Java.use('com.vdian.android.wdb.main.ui.dialog.OldUserNoticeOpenDialog$2');
    com_vdian_android_wdb_main_ui_dialog_OldUserNoticeOpenDialog_2_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.main.ui.dialog.OldUserNoticeOpenDialog$2.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_activity_ReleaseActivityActivity_1_clz = Java.use('com.vdian.android.wdb.follow.activity.ReleaseActivityActivity$1');
    com_vdian_android_wdb_follow_activity_ReleaseActivityActivity_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.activity.ReleaseActivityActivity$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_activity_ReleaseActivityActivity_3_clz = Java.use('com.vdian.android.wdb.follow.activity.ReleaseActivityActivity$3');
    com_vdian_android_wdb_follow_activity_ReleaseActivityActivity_3_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.activity.ReleaseActivityActivity$3.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_activity_ReleaseActivityActivity_clz = Java.use('com.vdian.android.wdb.follow.activity.ReleaseActivityActivity');
    com_vdian_android_wdb_follow_activity_ReleaseActivityActivity_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.activity.ReleaseActivityActivity.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_activity_PostVideoActivity_1_clz = Java.use('com.vdian.android.wdb.follow.activity.PostVideoActivity$1');
    com_vdian_android_wdb_follow_activity_PostVideoActivity_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.activity.PostVideoActivity$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_view_ActivityHeaderView_clz = Java.use('com.vdian.android.wdb.follow.view.ActivityHeaderView');
    com_vdian_android_wdb_follow_view_ActivityHeaderView_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.view.ActivityHeaderView.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_activity_PostVideoActivity_3_clz = Java.use('com.vdian.android.wdb.follow.activity.PostVideoActivity$3');
    com_vdian_android_wdb_follow_activity_PostVideoActivity_3_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.activity.PostVideoActivity$3.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_activity_FeedActivityDetailActivity_1_clz = Java.use('com.vdian.android.wdb.follow.activity.FeedActivityDetailActivity$1');
    com_vdian_android_wdb_follow_activity_FeedActivityDetailActivity_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.activity.FeedActivityDetailActivity$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_activity_PersonalFeedListActivity_clz = Java.use('com.vdian.android.wdb.follow.activity.PersonalFeedListActivity');
    com_vdian_android_wdb_follow_activity_PersonalFeedListActivity_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.activity.PersonalFeedListActivity.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_activity_ReleaseDynamicActivity_15_clz = Java.use('com.vdian.android.wdb.follow.activity.ReleaseDynamicActivity$15');
    com_vdian_android_wdb_follow_activity_ReleaseDynamicActivity_15_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.activity.ReleaseDynamicActivity$15.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_activity_PostVideoActivity_clz = Java.use('com.vdian.android.wdb.follow.activity.PostVideoActivity');
    com_vdian_android_wdb_follow_activity_PostVideoActivity_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.activity.PostVideoActivity.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_listener_b_clz = Java.use('com.vdian.android.wdb.follow.listener.b');
    com_vdian_android_wdb_follow_listener_b_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.listener.b.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_activity_PostBuyerTipsActivity_1_clz = Java.use('com.vdian.android.wdb.follow.activity.PostBuyerTipsActivity$1');
    com_vdian_android_wdb_follow_activity_PostBuyerTipsActivity_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.activity.PostBuyerTipsActivity$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_activity_PersonalFeedListActivity_2_clz = Java.use('com.vdian.android.wdb.follow.activity.PersonalFeedListActivity$2');
    com_vdian_android_wdb_follow_activity_PersonalFeedListActivity_2_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.activity.PersonalFeedListActivity$2.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_activity_FollowSpecialShopsActivity_2_clz = Java.use('com.vdian.android.wdb.follow.activity.FollowSpecialShopsActivity$2');
    com_vdian_android_wdb_follow_activity_FollowSpecialShopsActivity_2_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.activity.FollowSpecialShopsActivity$2.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_activity_FollowSpecialShopsActivity_3_clz = Java.use('com.vdian.android.wdb.follow.activity.FollowSpecialShopsActivity$3');
    com_vdian_android_wdb_follow_activity_FollowSpecialShopsActivity_3_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.activity.FollowSpecialShopsActivity$3.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_activity_PersonalFeedListActivity_4_clz = Java.use('com.vdian.android.wdb.follow.activity.PersonalFeedListActivity$4');
    com_vdian_android_wdb_follow_activity_PersonalFeedListActivity_4_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.activity.PersonalFeedListActivity$4.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_activity_FollowSpecialShopsActivity_4_clz = Java.use('com.vdian.android.wdb.follow.activity.FollowSpecialShopsActivity$4');
    com_vdian_android_wdb_follow_activity_FollowSpecialShopsActivity_4_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.activity.FollowSpecialShopsActivity$4.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_activity_PostBuyerTipsActivity_4_clz = Java.use('com.vdian.android.wdb.follow.activity.PostBuyerTipsActivity$4');
    com_vdian_android_wdb_follow_activity_PostBuyerTipsActivity_4_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.activity.PostBuyerTipsActivity$4.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_frament_FollowChildFeedFragment_1_clz = Java.use('com.vdian.android.wdb.follow.frament.FollowChildFeedFragment$1');
    com_vdian_android_wdb_follow_frament_FollowChildFeedFragment_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.frament.FollowChildFeedFragment$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_dialog_FeedSendShareDialog_clz = Java.use('com.vdian.android.wdb.follow.dialog.FeedSendShareDialog');
    com_vdian_android_wdb_follow_dialog_FeedSendShareDialog_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.dialog.FeedSendShareDialog.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_activity_ReleaseDynamicActivity_clz = Java.use('com.vdian.android.wdb.follow.activity.ReleaseDynamicActivity');
    com_vdian_android_wdb_follow_activity_ReleaseDynamicActivity_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.activity.ReleaseDynamicActivity.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_activity_ReleaseDynamicActivity_9_clz = Java.use('com.vdian.android.wdb.follow.activity.ReleaseDynamicActivity$9');
    com_vdian_android_wdb_follow_activity_ReleaseDynamicActivity_9_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.activity.ReleaseDynamicActivity$9.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_frament_FollowChildFeedFragment_9_clz = Java.use('com.vdian.android.wdb.follow.frament.FollowChildFeedFragment$9');
    com_vdian_android_wdb_follow_frament_FollowChildFeedFragment_9_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.frament.FollowChildFeedFragment$9.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_activity_FeedCommentDetailActivity_2_clz = Java.use('com.vdian.android.wdb.follow.activity.FeedCommentDetailActivity$2');
    com_vdian_android_wdb_follow_activity_FeedCommentDetailActivity_2_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.activity.FeedCommentDetailActivity$2.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_activity_PostBuyerTipsActivity_clz = Java.use('com.vdian.android.wdb.follow.activity.PostBuyerTipsActivity');
    com_vdian_android_wdb_follow_activity_PostBuyerTipsActivity_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.activity.PostBuyerTipsActivity.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_follow_activity_FollowSpecialShopsActivity_10_clz = Java.use('com.vdian.android.wdb.follow.activity.FollowSpecialShopsActivity$10');
    com_vdian_android_wdb_follow_activity_FollowSpecialShopsActivity_10_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.follow.activity.FollowSpecialShopsActivity$10.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_taobao_weex_ui_component_WXComponent_4_clz = Java.use('com.taobao.weex.ui.component.WXComponent$4');
    com_taobao_weex_ui_component_WXComponent_4_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.taobao.weex.ui.component.WXComponent$4.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_shop_view_ShopBottomView_2_clz = Java.use('com.vdian.android.wdb.shop.view.ShopBottomView$2');
    com_vdian_android_wdb_shop_view_ShopBottomView_2_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.shop.view.ShopBottomView$2.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_shop_view_ShopBottomView_3_clz = Java.use('com.vdian.android.wdb.shop.view.ShopBottomView$3');
    com_vdian_android_wdb_shop_view_ShopBottomView_3_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.shop.view.ShopBottomView$3.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_shop_view_ShopBottomView_4_clz = Java.use('com.vdian.android.wdb.shop.view.ShopBottomView$4');
    com_vdian_android_wdb_shop_view_ShopBottomView_4_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.shop.view.ShopBottomView$4.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_shop_view_ShopBottomView_10_clz = Java.use('com.vdian.android.wdb.shop.view.ShopBottomView$10');
    com_vdian_android_wdb_shop_view_ShopBottomView_10_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.shop.view.ShopBottomView$10.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_shop_view_ShopBottomView_11_clz = Java.use('com.vdian.android.wdb.shop.view.ShopBottomView$11');
    com_vdian_android_wdb_shop_view_ShopBottomView_11_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.shop.view.ShopBottomView$11.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_shop_view_ShopBottomView_12_clz = Java.use('com.vdian.android.wdb.shop.view.ShopBottomView$12');
    com_vdian_android_wdb_shop_view_ShopBottomView_12_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.shop.view.ShopBottomView$12.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_shop_view_ShopBottomView_13_clz = Java.use('com.vdian.android.wdb.shop.view.ShopBottomView$13');
    com_vdian_android_wdb_shop_view_ShopBottomView_13_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.shop.view.ShopBottomView$13.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_shop_view_ShopBottomView_14_clz = Java.use('com.vdian.android.wdb.shop.view.ShopBottomView$14');
    com_vdian_android_wdb_shop_view_ShopBottomView_14_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.shop.view.ShopBottomView$14.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_shop_view_ShopBottomView_16_clz = Java.use('com.vdian.android.wdb.shop.view.ShopBottomView$16');
    com_vdian_android_wdb_shop_view_ShopBottomView_16_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.shop.view.ShopBottomView$16.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_shop_view_ShopBottomView_17_clz = Java.use('com.vdian.android.wdb.shop.view.ShopBottomView$17');
    com_vdian_android_wdb_shop_view_ShopBottomView_17_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.shop.view.ShopBottomView$17.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_shop_view_ShopBottomView_1_clz = Java.use('com.vdian.android.wdb.shop.view.ShopBottomView$1');
    com_vdian_android_wdb_shop_view_ShopBottomView_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.shop.view.ShopBottomView$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_goods_activity_GoodsDetailActivity_21_clz = Java.use('com.vdian.android.wdb.goods.activity.GoodsDetailActivity$21');
    com_vdian_android_wdb_goods_activity_GoodsDetailActivity_21_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.goods.activity.GoodsDetailActivity$21.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_goods_activity_CommodityCommentListActivity_8_clz = Java.use('com.vdian.android.wdb.goods.activity.CommodityCommentListActivity$8');
    com_vdian_android_wdb_goods_activity_CommodityCommentListActivity_8_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.goods.activity.CommodityCommentListActivity$8.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_goods_view_GoodsVideoView_3_clz = Java.use('com.vdian.android.wdb.goods.view.GoodsVideoView$3');
    com_vdian_android_wdb_goods_view_GoodsVideoView_3_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.goods.view.GoodsVideoView$3.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_goods_activity_GoodsDetailActivity_18_clz = Java.use('com.vdian.android.wdb.goods.activity.GoodsDetailActivity$18');
    com_vdian_android_wdb_goods_activity_GoodsDetailActivity_18_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.goods.activity.GoodsDetailActivity$18.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_goods_activity_GoodsDetailActivity_19_clz = Java.use('com.vdian.android.wdb.goods.activity.GoodsDetailActivity$19');
    com_vdian_android_wdb_goods_activity_GoodsDetailActivity_19_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.goods.activity.GoodsDetailActivity$19.onClick(android.view.View)');
        this.onClick(v0);
    };
    var goods_a_o_1_clz = Java.use('goods.a.o$1');
    goods_a_o_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void goods.a.o$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_goods_view_GoodsBottomView_clz = Java.use('com.vdian.android.wdb.goods.view.GoodsBottomView');
    com_vdian_android_wdb_goods_view_GoodsBottomView_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.goods.view.GoodsBottomView.onClick(android.view.View)');
        this.onClick(v0);
    };
    var goods_a_o_3_clz = Java.use('goods.a.o$3');
    goods_a_o_3_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void goods.a.o$3.onClick(android.view.View)');
        this.onClick(v0);
    };
    var goods_a_o_4_clz = Java.use('goods.a.o$4');
    goods_a_o_4_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void goods.a.o$4.onClick(android.view.View)');
        this.onClick(v0);
    };
    var goods_a_g_clz = Java.use('goods.a.g');
    goods_a_g_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void goods.a.g.onClick(android.view.View)');
        this.onClick(v0);
    };
    var goods_a_o_5_clz = Java.use('goods.a.o$5');
    goods_a_o_5_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void goods.a.o$5.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_goods_view_ShrinkFlowLayout_clz = Java.use('com.vdian.android.wdb.goods.view.ShrinkFlowLayout');
    com_vdian_android_wdb_goods_view_ShrinkFlowLayout_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.goods.view.ShrinkFlowLayout.onClick(android.view.View)');
        this.onClick(v0);
    };
    var goods_a_o_6_clz = Java.use('goods.a.o$6');
    goods_a_o_6_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void goods.a.o$6.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_goods_view_GoodsDetailNavigator_clz = Java.use('com.vdian.android.wdb.goods.view.GoodsDetailNavigator');
    com_vdian_android_wdb_goods_view_GoodsDetailNavigator_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.goods.view.GoodsDetailNavigator.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_goods_activity_GoodsDetailActivity_20_clz = Java.use('com.vdian.android.wdb.goods.activity.GoodsDetailActivity$20');
    com_vdian_android_wdb_goods_activity_GoodsDetailActivity_20_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.goods.activity.GoodsDetailActivity$20.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_order_fragment_base_BaseOrderFragment_3_clz = Java.use('com.vdian.android.wdb.order.fragment.base.BaseOrderFragment$3');
    com_vdian_android_wdb_order_fragment_base_BaseOrderFragment_3_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.order.fragment.base.BaseOrderFragment$3.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_order_fragment_base_BaseOrderFragment_4_clz = Java.use('com.vdian.android.wdb.order.fragment.base.BaseOrderFragment$4');
    com_vdian_android_wdb_order_fragment_base_BaseOrderFragment_4_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.order.fragment.base.BaseOrderFragment$4.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_order_activity_OrderCenterActivity_1_clz = Java.use('com.vdian.android.wdb.order.activity.OrderCenterActivity$1');
    com_vdian_android_wdb_order_activity_OrderCenterActivity_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.order.activity.OrderCenterActivity$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_order_fragment_WaitPaymentFragment_1_clz = Java.use('com.vdian.android.wdb.order.fragment.WaitPaymentFragment$1');
    com_vdian_android_wdb_order_fragment_WaitPaymentFragment_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.order.fragment.WaitPaymentFragment$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_order_fragment_WaitPaymentFragment_3_clz = Java.use('com.vdian.android.wdb.order.fragment.WaitPaymentFragment$3');
    com_vdian_android_wdb_order_fragment_WaitPaymentFragment_3_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.order.fragment.WaitPaymentFragment$3.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_my_ui_fragment_MineInfoFragment_clz = Java.use('com.vdian.android.wdb.my.ui.fragment.MineInfoFragment');
    com_vdian_android_wdb_my_ui_fragment_MineInfoFragment_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.my.ui.fragment.MineInfoFragment.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_my_ui_activity_ShopCollectActivity_3_clz = Java.use('com.vdian.android.wdb.my.ui.activity.ShopCollectActivity$3');
    com_vdian_android_wdb_my_ui_activity_ShopCollectActivity_3_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.my.ui.activity.ShopCollectActivity$3.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_my_ui_adapter_ProductCollect2Adapter_clz = Java.use('com.vdian.android.wdb.my.ui.adapter.ProductCollect2Adapter');
    com_vdian_android_wdb_my_ui_adapter_ProductCollect2Adapter_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.my.ui.adapter.ProductCollect2Adapter.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_my_ui_activity_ShopCollectActivity_4_clz = Java.use('com.vdian.android.wdb.my.ui.activity.ShopCollectActivity$4');
    com_vdian_android_wdb_my_ui_activity_ShopCollectActivity_4_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.my.ui.activity.ShopCollectActivity$4.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_my_ui_fragment_MineInfoFragment_10_clz = Java.use('com.vdian.android.wdb.my.ui.fragment.MineInfoFragment$10');
    com_vdian_android_wdb_my_ui_fragment_MineInfoFragment_10_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.my.ui.fragment.MineInfoFragment$10.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_my_ui_fragment_MineInfoFragment_1_clz = Java.use('com.vdian.android.wdb.my.ui.fragment.MineInfoFragment$1');
    com_vdian_android_wdb_my_ui_fragment_MineInfoFragment_1_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.my.ui.fragment.MineInfoFragment$1.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_my_ui_activity_ProductCollectActivity_4_clz = Java.use('com.vdian.android.wdb.my.ui.activity.ProductCollectActivity$4');
    com_vdian_android_wdb_my_ui_activity_ProductCollectActivity_4_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.my.ui.activity.ProductCollectActivity$4.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_my_ui_activity_ProductCollectActivity_5_clz = Java.use('com.vdian.android.wdb.my.ui.activity.ProductCollectActivity$5');
    com_vdian_android_wdb_my_ui_activity_ProductCollectActivity_5_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.my.ui.activity.ProductCollectActivity$5.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_my_ui_activity_ProductCollectActivity_clz = Java.use('com.vdian.android.wdb.my.ui.activity.ProductCollectActivity');
    com_vdian_android_wdb_my_ui_activity_ProductCollectActivity_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.my.ui.activity.ProductCollectActivity.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_my_ui_activity_ProductCollectActivity_6_clz = Java.use('com.vdian.android.wdb.my.ui.activity.ProductCollectActivity$6');
    com_vdian_android_wdb_my_ui_activity_ProductCollectActivity_6_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.my.ui.activity.ProductCollectActivity$6.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_my_ui_dialog_ClassifyEditDialog_clz = Java.use('com.vdian.android.wdb.my.ui.dialog.ClassifyEditDialog');
    com_vdian_android_wdb_my_ui_dialog_ClassifyEditDialog_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.my.ui.dialog.ClassifyEditDialog.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_my_ui_view_MineInfoHeader_clz = Java.use('com.vdian.android.wdb.my.ui.view.MineInfoHeader');
    com_vdian_android_wdb_my_ui_view_MineInfoHeader_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.my.ui.view.MineInfoHeader.onClick(android.view.View)');
        this.onClick(v0);
    };
    var com_vdian_android_wdb_my_ui_activity_ShopCollectActivity_clz = Java.use('com.vdian.android.wdb.my.ui.activity.ShopCollectActivity');
    com_vdian_android_wdb_my_ui_activity_ShopCollectActivity_clz.onClick.overload('android.view.View').implementation = function(v0) {
        printStacks('public void com.vdian.android.wdb.my.ui.activity.ShopCollectActivity.onClick(android.view.View)');
        this.onClick(v0);
    };
});