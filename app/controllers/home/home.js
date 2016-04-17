var ladminHome = TController.create('home.html').actions({
    onload : function() {
        var origin = this.getOrigin();
        
        TWebObject.getCSS('css/accordion.css');
        $.getScript((origin !== undefined) ? origin + '/js/accordion.js' : 'js/accordion.js')
        .done(function( script, textStatus ) {
            $('.accordion').multiaccordion({defaultIcon: "ui-icon-plusthick", activeIcon: "ui-icon-minusthick"});
            ladminHome.showToken();
        })
        .fail(function( jqxhr, settings, exception ) {
            console.log(exception);
        });            
    }
    , showToken : function() {
        ladminHome.getPartialView('token.html', 'showToken', '#token');
        return false;
    }
    , getData : function(count, index, anchor) {
        ladminHome.getJSON('grid.html'
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