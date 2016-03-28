var ladminMaster = TController.create('master.html')
.actions({
    origin : TRegistry.item('/login.html').origin
    , oninit : function () {
        $("#home").on('click', function() {
           ladminMaster.attachView(ladminMaster.origin + '/home.html', '#core'); 
        });
        $("#passwd").on('click', function() {
           ladminMaster.attachView(ladminMaster.origin + '/passwordGenerator.html', '#core'); 
        });
        $("#sample").on('click', function() {
           ladminMaster.attachView(ladminMaster.origin + '/accordion.html', '#core'); 
        });    }
    , onload : function () {
        
    }
    , logout : function() {
        $.jPhoenix.getView(ladminMaster.origin + '/login.html', 'logout', '#core');

    
    
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
