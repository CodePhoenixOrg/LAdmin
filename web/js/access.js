/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var host = (window.location.href.indexOf('localhost') > -1) ? 'localhost:8001' : 'www.ladmin.loc';
var ladmin = Phink.Web.Application.create(host);
ladmin.access = ladmin.createView('access');

var ladminAccess = ladmin.createController(ladmin.access, 'ladmin.access')
.actions({
    word : ''
    , isLoggingIn : false
    , bindEvents : function () {
        window.onkeydown = function(e) {    
            var code = e.keyCode ? e.keyCode : e.which;

            if(code === 27) { // ESC is typed
                ladminAccess.word = '';
                console.log("ladminAccess.word = '" + ladminAccess.word + "'");
            }
        };

        window.onkeypress = function(e) {    
            var code = e.keyCode ? e.keyCode : e.which;

            if (code === 35 && ladminAccess.word === '') { // # is typed
                ladminAccess.word += String.fromCharCode(code);
                console.log("ladminAccess.word = '" + ladminAccess.word + "'");
            } else if (code === 33 && ladminAccess.word === '#') { // ! is typed
                ladminAccess.word += String.fromCharCode(code);
                ladminAccess.isLoggingIn = true; // trying to log in as administrator
                console.log("ladminAccess.word = '" + ladminAccess.word + "'");
            } else if (ladminAccess.isLoggingIn) {
                ladminAccess.word += String.fromCharCode(code);
                console.log("ladminAccess.word = '" + ladminAccess.word + "'");
            }

            if (ladminAccess.word === '#!admin') { // User name is complete
        //    	alert("Please enter password.");L
                if($('#myCarousel') !== undefined) {
                    var myCarousel = $('#myCarousel');
                    myCarousel.carousel({
                        interval: 0
                    });
                    myCarousel.on('slid.bs.carousel', function() {
                        ladminAccess.attachWindow('/login.html', '#adminContent');
                    })
                    myCarousel.carousel('next');

                }
            }
        };
    }
})
.onload(function() {
    ladminAccess = this;
});