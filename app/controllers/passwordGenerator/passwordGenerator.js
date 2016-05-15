var ladminPassword = ladmin.createController(ladmin.index, 'ladmin.password') 
.oninit(function() {
    this.getScript('/js/strongPasswordGenerator.js');
    $('#generatePassword').on('click', function() {
        displayPassword();
    })    

});
