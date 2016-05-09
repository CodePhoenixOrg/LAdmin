var ladminMaster = TController.create('master.html')
.oninit(function () {
    $("#home").on('click', function() {
       ladminMaster.attachView('/home.html', '#core'); 
    });
    $("#passwd").on('click', function() {
       ladminMaster.attachView('/passwordGenerator.html', '#core'); 
    });
    $("#sample").on('click', function() {
       ladminMaster.attachView('/accordion.html', '#core'); 
    });    
})
.onload(function () {
        this.origin = TRegistry.getOrigin();
})
.actions({
    logout : function() {
        this.getView('/login.html', 'logout', '#core');

    
    
//    $.jPhoenix.getJSON("login.html"
//        , {"action" : 'logout'}
//        , function(data) {
//        try {
//            $.jPhoenix.getView('login.html');
//        }
//        catch(e) {
//            debugLog(e);
//        }
//    });       
    
    }
});
