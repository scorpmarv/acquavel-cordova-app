(function ($) {
$( document ).ready(function() {
    $(document).on('click', '#login-btn', function(e){
        e.preventDefault();
        var url = $(".login-username").val();        
         
        $.ajax({
            url: "http://10.0.2.15:8000/api/socio/" + url + "/?format=json",
            dataType: "json",
            async: true,
            success: function (result) {
                var testJson = JSON.stringify(result);
                localStorage.setItem('testObject', testJson);

                //alert(result.dni);
                window.location="home2.html";
            },
            error: function (xhr, ajaxOptions, thrownError) { console.log("errorstatus: " + xhr.status + " ajaxoptions: " + ajaxOptions + " throwError: " + thrownError);
            }
        });         
    });
});
}(jQuery));
