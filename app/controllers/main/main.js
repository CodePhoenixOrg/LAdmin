
var ladminMain = TController.create('main.html')
.actions({
    onload : function () {
        ladminMain.getView('login.html');
    }
});
