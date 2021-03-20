
Java.perform(function() {
    //var ObjectsStore = Java.use("gz.radar.objects.ObjectsStore");
    Java.choose("com.ttpc.bidding_hall.controler.tabhome.TabHomeActivity", {
        onMatch: function(instance){
            console.log("123");
            //ObjectsStore.storeObject();
        },
        onComplete: function(){

        }
        
    });
});