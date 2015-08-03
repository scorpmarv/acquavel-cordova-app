(function ($) {
    $( document ).ready(function() {
        var thisTime = new Date().getTime();
        if ((thisTime - localStorage.getItem('setLocalStorageTime')) >= 86400000){
            localStorage.clear();
        }

        var actividades = JSON.parse(localStorage.getItem('actividades'));

        if (!actividades || (actividades.length === 0)) {
            $.ajax({
                url: "http://acquavel.herokuapp.com/api/actividades/?format=json",
                dataType: "json",
                async: true,
                success: function (result) {
                    var time = new Date().getTime();
                    localStorage.setItem('setLocalStorageTime', time);
                    var actividadesJSON = JSON.stringify(result);
                    localStorage.setItem('actividades', actividadesJSON);
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    console.log("errorstatus: " + xhr.status + " ajaxoptions: " + ajaxOptions + " throwError: " + thrownError);
                }
            });
        }

        $(document).on('click', '.exit-app', function(e) {
            e.preventDefault();
            navigator.app.exitApp();
        });
    });

}(jQuery));

