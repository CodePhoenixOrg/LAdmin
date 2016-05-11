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
                    TRegistry.setToken(data.token);
                    $('#adminContent').append(TRegistry.getOrigin() + '<br />') ;
                    $('#adminContent').append(TRegistry.getToken() + '<br />');
                    ladminLogin.getView('master.html', function(data) {
                        TRegistry.setToken(data.token);
                        $('#adminContent').append(TRegistry.getOrigin() + '<br />') ;
                        $('#adminContent').append(TRegistry.getToken() + '<br />');
                        TUtils.html64(document.body, data.view);
                        ladminLogin.getView('home.html', function(data) {
                           TRegistry.setToken(data.token);
                           $('#adminContent').append(TRegistry.getOrigin() + '<br />') ;
                           $('#adminContent').append(TRegistry.getToken() + '<br />');
                           TUtils.html64('#core', data.view);
                        });
                    })
                }
            }
            catch(e) {
                debugLog(e);
            }
        });       

        return false;
    }
});