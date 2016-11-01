/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var host = (window.location.href.indexOf('localhost') > -1) ? 'localhost:8001' : 'www.ladmin.loc';
var ladmin = TWebApplication.create(host);
ladmin.index = ladmin.createView('index');

var ladminIndex = ladmin.createController(ladmin.index, 'ladmin.index')
.actions({
    word : ''
    , isLoggingIn : false
    , bindEvents : function () {
        window.onkeydown = function(e) {    
            var code = e.keyCode ? e.keyCode : e.which;

            if(code === 27) { // ESC is typed
                ladminIndex.word = '';
                console.log("ladminIndex.word = '" + ladminIndex.word + "'");
            }
        };

        window.onkeypress = function(e) {    
            var code = e.keyCode ? e.keyCode : e.which;

            if (code === 35 && ladminIndex.word === '') { // # is typed
                ladminIndex.word += String.fromCharCode(code);
                console.log("ladminIndex.word = '" + ladminIndex.word + "'");
            } else if (code === 33 && ladminIndex.word === '#') { // ! is typed
                ladminIndex.word += String.fromCharCode(code);
                ladminIndex.isLoggingIn = true; // trying to log in as administrator
                console.log("ladminIndex.word = '" + ladminIndex.word + "'");
            } else if (ladminIndex.isLoggingIn) {
                ladminIndex.word += String.fromCharCode(code);
                console.log("ladminIndex.word = '" + ladminIndex.word + "'");
            }

            if (ladminIndex.word === '#!admin') { // User name is complete
        //    	alert("Please enter password.");L
                if($('#myCarousel') !== undefined) {
                    var myCarousel = $('#myCarousel');
                    myCarousel.carousel({
                        interval: 0
                    });
                    myCarousel.on('slid.bs.carousel', function() {
                        ladminIndex.attachWindow('http://' + host + '/login.html', '#adminContent');
                    })
                    myCarousel.carousel('next');

                }
            }
        };
    }
})
.onload(function() {
    ladminIndex = this;
});