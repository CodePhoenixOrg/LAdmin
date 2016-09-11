ladmin.main = ladmin.createView('main');

var ladminMain = ladmin.createController(ladmin.main, 'ladmin.main')
.actions({
    onload : function () {
        ladminMain.getSimpleView('login.html');
    }
});
