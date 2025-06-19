rpc.exports = {
    cleanup: function () {
        // 清理所有拦截器
        Interceptor.detachAll();
        // 如果你设置了定时器或 Stalker，也可以清理
        Stalker.unfollow();
        // clearInterval(...);
    }
};