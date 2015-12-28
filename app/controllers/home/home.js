var home = (new TController()).actions({
    onload : function() {
        var origin = TRegistry.item('/home').origin + '/';

        home.showToken();        
    }
    , showToken : function() {
        $.jPhoenix.getPartialView('token.html', 'showToken', '#token');
        return false;
    }
    , getData : function(count, index, anchor) {
        $.jPhoenix.getJSON('grid.html'
            , {
                'action': "getData"
                , 'pagecount': count
                , 'pagenum': index
            }
            , function (data) {
                $.jPhoenix.bindTable('#grid', data.grid.values, data.grid.templates);
                $(anchor).html(index);
            }
        );

        return false;
    }

});


//$(document).ready(function () {
//    $.jPhoenix.getCSS("/css/accordion.css");
//    $.getScript("/js/accordion.js")
//    .done(function( script, textStatus ) {
//        $(".accordion").multiaccordion({defaultIcon: "ui-icon-plusthick", activeIcon: "ui-icon-minusthick"});
//    })
//    .fail(function( jqxhr, settings, exception ) {
//        console.log(exception);
//    });
//    showToken();
//});