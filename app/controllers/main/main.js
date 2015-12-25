
var main = (new TController()).actions({
    onload : function () {
        //var origin = TRegistry.item('/main').origin + '/';

        //$.jPhoenix.getView(origin + 'login.html');
        this.getView('login.html');
    }
});
