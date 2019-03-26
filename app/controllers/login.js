var ladminLogin = ladmin.createController(ladmin.index, 'ladmin.login') 
.onload(function() {
    $('#authenticate').on('click', function() {
        ladminLogin.authenticate();
    })

})
.actions({
    //origin : Phink.Registry.item('/login.html').origin
    authenticate : function () {
        var pageName = 'login.html';
        
        //this.origin = Phink.Registry.item('/login.html').origin + '/';
        ladminLogin.origin = Phink.Registry.getOrigin();
        this.origin = Phink.Registry.getOrigin();
        //(ladminLogin.origin !== undefined) ? ladminLogin.origin + '/' + pageName : 
        var the = this;
        console.log(the);
        
        ladminLogin.getJSON(pageName, {
            "action" : 'authenticate'
            ,"login" : $("#login").val()
            ,"password" : $("#password").val()
            ,"container" : '#core'
        }
        , function(data) {
            try {
                if(data.return === 200) {

                    the.parseViewResponse(data.master, function(resp) {
                        TUtils.html64(document.body, resp.view);
                        the.parseViewResponse(data.page, function(resp) {
                            TUtils.html64(data.container, resp.view);
                        });
                    });

                    //$.jPhink.getScripts(data);
                } else if(data.return === 403) {
                    $('#message').html('Login error');
                } else if(data.return === 202) {
                    //the.attachView('master.html', document.body, function(data) {
                    the.getSimpleView('master.html', function(data) {
                        $('#adminContent').html(data.view);
                        the.getSimpleView('home.html', function(data) {
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