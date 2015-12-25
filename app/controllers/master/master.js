var master = (new TController()).actions({
    origin : TRegistry.item('/login').origin + '/'
    , oninit : function () {
        $("#home").on('click', function() {
           attachView(master.origin + 'home.html', '#core'); 
        });
        $("#passwd").on('click', function() {
           attachView(master.origin + 'passwordGenerator.html', '#core'); 
        });
        $("#sample").on('click', function() {
           attachView(master.origin + 'accordion.html', '#core'); 
        });    }
    , onload : function () {
        
    }
    , logout : function() {
        $.jPhoenix.getView(master.origin + 'login.html', 'logout', '#core');

    
    
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
