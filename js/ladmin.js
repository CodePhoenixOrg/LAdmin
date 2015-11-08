/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var word = '';
var isAdmin = false;

window.onkeypress = function(e) {    
    var code = e.keyCode ? e.keyCode : e.which;
    
    if (code === 35 && word === '') {
        word += String.fromCharCode(code);
        console.log("word = '" + word + "'");
    } else if (code === 33 && word === '#') {
        word += String.fromCharCode(code);
        isAdmin = true;
        console.log("word = '" + word + "'");
    } else if (isAdmin) {
        word += String.fromCharCode(code);
        console.log("word = '" + word + "'");
    }
    
    if (word === '#!admin') {
//    	alert("Please enter password.");
//        attachWindow('http://www.ladmin.loc/login.html', '#mainContent');
        attachIframe('ladmin', 'http://www.ladmin.loc/', '#mainContent');
    }
};
