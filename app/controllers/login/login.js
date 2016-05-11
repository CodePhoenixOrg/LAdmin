var ladminLogin = TController.create()
.onload(function() {
    $('#authenticate').on('click', function() {
        ladminLogin.authenticate();
    })

})
.actions({
    //origin : TRegistry.item('/login.html').origin
    authenticate : function () {
        var pageName = 'login.html';
        
        //this.origin = TRegistry.item('/login.html').origin + '/';
        ladminLogin.origin = TRegistry.getOrigin();
        this.origin = TRegistry.getOrigin();
        //(ladminLogin.origin !== undefined) ? ladminLogin.origin + '/' + pageName : 
        var the = this;
        
        ladminLogin.getJSON(pageName 
            , {
                "action" : 'authenticate'
                ,"login" : $("#login").val()
                ,"password" : $("#password").val()
                ,"container" : '#core'
            }
            , function(data) {
            try {
//                window.console.log(data.return);

                if(data.return === 200) {
                    TUtils.html64(document.body, data.master);
                    TUtils.html64(data.container, data.page);
                    //$.jPhoenix.getScripts(data);
                } else if(data.return === 403) {
                    $('#message').html('Login error');
                } else if(data.return === 1) {
                    $('#adminContent').append(TRegistry.getOrigin() + '<br />') ;
                    $('#adminContent').append(TRegistry.getToken() + '<br />');
	                  //the.attachView('master.html', document.body, function(data) {
					        the.getView('master.html', function(data) {
					            $('#adminContent').html(data.view);
					            the.getView('home.html', function(data) {
					                $('#core').html(data.view);
					            })
					        });
                }
            }
            catch(e) {
                debugLog(e);
            }
        });       

        return false;
    }
});