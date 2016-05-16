var ladminHome = ladmin.createController(ladmin.index, 'ladmin.home')
.onload(function() {
    TRegistry.item(this.name).token = this.getToken();
    
    TWebObject.getCSS('css/accordion.css');
    this.getScript('js/accordion.js', function() {
        $('.accordion').multiaccordion({defaultIcon: "ui-icon-plusthick", activeIcon: "ui-icon-minusthick"});
        ladminHome.showToken();
    });
})
.actions({
    showToken : function() {
        var token = TRegistry.item(this.name).token;

        this.getPartialView('token.html', 'showToken', '#token', {'token': token}, function(data) {
            $("#tokenLink").on("click", function() {
                ladminHome.showToken();
            });
            
        });
        return false;        
    }
    , getData : function(count, index, anchor) {
        this.getJSON('grid.html'
            , {
                'action': "getData"
                , 'pagecount': count
                , 'pagenum': index
            }
            , function (data) {
                TTable.bind('#grid', data.grid.values, data.grid.templates);
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