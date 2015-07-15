(function ($) {
$( document ).ready(function() {
    $(document).on('click', '#login-btn', function(e){
        e.preventDefault();
        alert("hello");
        var url = $(".login-username").val();        
         
        $.ajax({
            url: "http://192.168.242.1:8000/api/socio/" + url,
            dataType: "json",
            async: true,
            success: function (result) {
                //alert(result.dni);
                window.location="home.html";
            },
            error: function (xhr, ajaxOptions, thrownError) { alert("errorstatus: " + xhr.status + " ajaxoptions: " + ajaxOptions + " throwError: " + thrownError);
    }
        });         
    });
});
}(jQuery));
