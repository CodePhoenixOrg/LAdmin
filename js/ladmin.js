/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var ladmin = TController.create()
.onload(function() {
    window.onkeydown = function(e) {    
        var code = e.keyCode ? e.keyCode : e.which;

        if(code === 27) { // ESC is typed
            ladmin.word = '';
            console.log("ladmin.word = '" + ladmin.word + "'");
        }
    };

    window.onkeypress = function(e) {    
        var code = e.keyCode ? e.keyCode : e.which;

        if (code === 35 && ladmin.word === '') { // # is typed
            ladmin.word += String.fromCharCode(code);
            console.log("ladmin.word = '" + ladmin.word + "'");
        } else if (code === 33 && ladmin.word === '#') { // ! is typed
            ladmin.word += String.fromCharCode(code);
            this.isLoggingIn = true; // trying to log in as administrator
            console.log("ladmin.word = '" + ladmin.word + "'");
        } else if (this.isLoggingIn) {
            ladmin.word += String.fromCharCode(code);
            console.log("ladmin.word = '" + ladmin.word + "'");
        }

        if (ladmin.word === '#!admin') { // User name is complete
    //    	alert("Please enter password.");
            if($('#myCarousel') !== undefined) {
                var myCarousel = $('#myCarousel');
                myCarousel.carousel({
                    interval: 0
                });
                myCarousel.on('slid.bs.carousel', function() {
                    ladmin.attachWindow('http://www.ladmin.loc/login.html', '#adminContent');
                })
                myCarousel.carousel('next');

            }
    //        attachIframe('ladmin', 'http://www.ladmin.loc/', '#mainContent');
        }
    };
})
.actions({
    word : ''
    , isLoggingIn : false
});
