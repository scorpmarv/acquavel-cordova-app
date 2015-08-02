(function ($) {
    $( document ).ready(function() {

        $.ajax({
            url: "http://acquavel.herokuapp.com/api/actividades/?format=json",
            dataType: "json",
            async: true,
            success: function (result) {
                var actividadesJSON = JSON.stringify(result);
                localStorage.setItem('actividades', actividadesJSON);
                console.log(result);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("errorstatus: " + xhr.status + " ajaxoptions: " + ajaxOptions + " throwError: " + thrownError);
            }
        });
    });

}(jQuery));

