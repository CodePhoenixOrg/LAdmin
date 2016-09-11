var ladminMaster = ladmin.createController(ladmin.index, 'ladmin.master')
.oninit(function () {
    $("#home").on('click', function(e) {
        e.preventDefault();
        ladminMaster.attachView('/home.html', '#core'); 
    });
    $("#passwd").on('click', function(e) {
        e.preventDefault();
        ladminMaster.attachView('/passwordGenerator.html', '#core'); 
    });
    $("#sample").on('click', function(e) {
        e.preventDefault();
        ladminMaster.attachView('/accordion.html', '#core'); 
    });    
    $("#logout").on('click', function(e) {
        e.preventDefault();
        ladminMaster.attachView('/login.html', '#adminContent'); 
    });
    $("#disconnect").on('click', function(e) {
        e.preventDefault();
        ladminMaster.attachWindow('/login.html'); 
    });    
    
})
.onload(function () {
        this.origin = TRegistry.getOrigin();
})
.actions({
    logout : function() {
        this.getSimpleView('/login.html', 'logout', '#core');

    
    
//    $.jPhink.getJSON("login.html"
//        , {"action" : 'logout'}
//        , function(data) {
//        try {
//            $.jPhink.getSimpleView('login.html');
//        }
//        catch(e) {
//            debugLog(e);
//        }
//    });       
    
    }
});
