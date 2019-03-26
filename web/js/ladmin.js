var APP_NAME = "ladmin";
var ladmin = null;
var ladminHost = (window.location.href.indexOf('localhost') > -1) ? 'localhost:8001' : 'ladmin.loc';
Phink.DOM.ready(function () {

    ladmin = Phink.Web.Application.create(ladminHost);
    ladmin.main = ladmin.createView('main');

    var ladminMain = ladmin.createController(ladmin.main, 'ladmin.main')
    .actions({
        goHome: function () {
            // ladminMain.getSimpleView('login.html', function (data) {
            //     $(document.body).html(data.view);
            // });
            //ladminMain.attachWindow('/login.html');
        }
    })
    .onload(function () {
        ladminMain = this;
        this.goHome();
    });
});
