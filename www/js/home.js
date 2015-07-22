(function ($) {
    $( document ).ready(function() {
        var retrievedObject = JSON.parse(localStorage.getItem('testObject'));
        console.log(retrievedObject);

        $.ajax({
            url: "http://10.0.2.15:8000/api/actividades/?format=json",
            dataType: "json",
            async: true,
            success: function (result) {
                var actividadesJSON = JSON.stringify(result);
                localStorage.setItem('actividades', JSON.stringify(actividadesJSON));
                console.log(result);
                loadCalendar();
            },
            error: function (xhr, ajaxOptions, thrownError) { console.log("errorstatus: " + xhr.status + " ajaxoptions: " + ajaxOptions + " throwError: " + thrownError);
            }
        });
    });


    function loadCalendar(){
        
    }
}(jQuery));

