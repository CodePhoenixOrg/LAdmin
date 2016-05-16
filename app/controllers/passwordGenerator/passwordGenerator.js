var theSymbols = [" ", "!", "\"", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", ";", ":", "'", "@", "#", "~", "|", ",", "<", ".", ">", "/", "?"]; //Removed "\\", because backslash character can cause problems when passwords are stored.
var ladminPassword = ladmin.createController(ladmin.index, 'ladmin.password') 
.oninit(function() {
    this.getScript('js/strongPasswordGenerator.js');
    $('#generatePassword').on('click', function() {
        displayPassword();
    })    
})
.actions({
    generatePassword: function(lengthOfPassword, wantSymbols) {
	var theLetters = "abcdefghijklmnopqrstuvwxyz";
	var strongPasswordArray = [];
	var capitalise;
	for (var i = 0; i < lengthOfPassword; i++) {
            capitalise = Math.round(Math.random() * 1);
            if (capitalise === 0) {
                strongPasswordArray[i] = theLetters.charAt(Math.floor(Math.random() * 26)).toUpperCase();
            }
            else {
                strongPasswordArray[i] = theLetters.charAt(Math.floor(Math.random() * 26));
            }
	}
	var numberOfDigits;
	numberOfDigits = Math.round(Math.random() * (lengthOfPassword - 1)) + 1;
	var positionForNumeric, theNumber;
	for (i = 0; i < numberOfDigits; i++) {
            positionForNumeric = Math.round(Math.random() * (lengthOfPassword - 1));
            theNumber = Math.round(Math.random() * 9);
            strongPasswordArray[positionForNumeric] = theNumber;
	}
	if (wantSymbols) {
            var numberOfSymbols;
            numberOfSymbols = Math.round(Math.random() * (lengthOfPassword - 1)) + 1;
            var positionForSymbol;
            var locationOfSymbolInArray;
            var theSymbol;
            for (i = 0; i < numberOfSymbols; i++) {
                positionForSymbol = Math.round(Math.random() * (lengthOfPassword - 1));
                locationOfSymbolInArray = Math.round(Math.random() * (theSymbols.length - 1));
                theSymbol = theSymbols[locationOfSymbolInArray];
                strongPasswordArray[positionForSymbol] = theSymbol;
            }
        }
	return strongPasswordArray;
    }
    , validate: function(strongPasswordArray, lengthOfPassword, wantSymbols) {
	var hasAnUpperCaseLetter = false;
	var hasALowerCaseLetter = false;
	var hasANumber = false;
	var hasASymbol = false;
	var correctLength = false;
	for (var i = 0; i < strongPasswordArray.length; i++) {
            if ("A" <= strongPasswordArray[i] && strongPasswordArray[i] <= "Z") {
                hasAnUpperCaseLetter = true;
                break;
            }
	}
	for (i = 0; i < strongPasswordArray.length; i++) {
            if ("a" <= strongPasswordArray[i] && strongPasswordArray[i] <= "z") {
                hasALowerCaseLetter = true;
                break;
            }
	}
	for (i = 0; i < strongPasswordArray.length; i++) {
            if ("0" <= strongPasswordArray[i] && strongPasswordArray[i] <= "9") {
                hasANumber = true;
                break;
            }
	}
	if (wantSymbols) {
            for (i = 0; i < strongPasswordArray.length; i++) {
                for (var iSymbols = 0; iSymbols < theSymbols.length; iSymbols++) {
                    if (strongPasswordArray[i] == theSymbols[iSymbols]) {
                        hasASymbol = true;
                        break;
                    }
                }
            }
	}
	if (strongPasswordArray.length == lengthOfPassword) {
            correctLength = true;
	}
	if (!wantSymbols) {
            hasASymbol = true;
	}
	if (!hasAnUpperCaseLetter || !hasALowerCaseLetter || !hasANumber || !hasASymbol || !correctLength) {
            lengthOfPassword = "";
            loop = "";
            hasAnUpperCaseLetter = "";
            hasALowerCaseLetter = "";
            hasANumber = "";
            hasASymbol = "";
            correctLength = "";
            return false;
	}
	else {
            return true;
	}
    }
    , makeMnemonic: function(strongPasswordArray) {
	var theWords = [];
	theWords = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india", "juliet", "kilo", "lima", "mike", "november", "oscar", "papa", "quebec", "romeo", "sierra", "tango", "uniform", "victor", "whiskey", "x-ray", "yankee", "zulu"];
	var lettersArray = [];
	lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var easyToRememberArray = [];
	for (var i = 0; i < strongPasswordArray.length; i++) {
            for (var iLetters = 0; iLetters < lettersArray.length; iLetters++) {
                if (strongPasswordArray[i] == lettersArray[iLetters].toUpperCase()) {
                    easyToRememberArray[i] = theWords[iLetters].toUpperCase() + "\n";
                }
                if (strongPasswordArray[i] == lettersArray[iLetters]) {
                    easyToRememberArray[i] = theWords[iLetters] + "\n";
                }
            }
            if ("0" <= strongPasswordArray[i] && strongPasswordArray[i] <= "9") {
                easyToRememberArray[i] = strongPasswordArray[i];
            }
            for (var iSymbols = 0; iSymbols < theSymbols.length; iSymbols++) {
                if (strongPasswordArray[i] == theSymbols[iSymbols]) {
                    easyToRememberArray[i] = strongPasswordArray[i];
                    /* use "[space]" to represent a space character */
                    if (strongPasswordArray[i] === " ") {
                        easyToRememberArray[i] = "[space]";
                    }
                }
            }
	}
	var easyToRemember = "";
	for (i = 0; i < easyToRememberArray.length; i++) {
		easyToRemember += easyToRememberArray[i] + " ";
	}
	return easyToRemember;
    }
    , displayPassword: function() {
	var newStrongPasswordArray = [];
	var passwordIsOK = false;
	while (!passwordIsOK) {
		newStrongPasswordArray = this.generatePassword(8, false);
		passwordIsOK = this.validate(newStrongPasswordArray, 8, false);
	}
	var strongPassword = "";
	for (var i = 0; i < newStrongPasswordArray.length; i++) {
		strongPassword += newStrongPasswordArray[i];
	}
        var passwordDisplayed = strongPassword;
        var mnemonicPasswordDisplayed = this.makeMnemonic(newStrongPasswordArray);
        
        $('#password').val(passwordDisplayed);
        $('#mnemonic').val(mnemonicPasswordDisplayed);
    }
});

//function addEventHandlers() {
//	if (document.getElementById) {
//		if (document.getElementById("btnGenerate")) {
//			document.getElementById("btnGenerate").onclick = displayPassword;
//		}
//	}
//
//});
