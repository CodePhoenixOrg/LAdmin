var ladminLogin = TController.create('ladmin.login')
.actions({
    //origin : TRegistry.item('/login.html').origin
    onload : function() {
        $('#authenticate').on('click', function() {
            ladminLogin.authenticate();
        })
        
    }
    , authenticate : function () {
        var pageName = 'login.html';
        
        //this.origin = TRegistry.item('/login.html').origin + '/';
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
                    $.jPhoenix.html64(document.body, data.master);
                    $.jPhoenix.html64(data.container, data.page);
                    //$.jPhoenix.getScripts(data);
                } else if(data.return === 403) {
                    $('#message').html('Login error');
                } else if(data.return === 1) {
                    ladminLogin.getView('master.html', function(data) {
                        TUtils.html64(document.body, data.view);
                        ladminLogin.getView('home.html', function(data) {
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
