(function ($) {
$( document ).ready(function() {
    $(document).on('click', '#login-btn', function(e){
        e.preventDefault();
        var url = $(".login-username").val();

        $.ajax({
            url: "http://acquavel.herokuapp.com/api/socio/" + url + "/?format=json",
            dataType: "json",
            async: true,
            success: function (result) {
                var resultJson = JSON.stringify(result);
                localStorage.setItem('userData', resultJson);
                window.location="my-info.html";
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log("errorstatus: " + xhr.status + " ajaxoptions: " + ajaxOptions + " throwError: " + thrownError);
                $("#no-user").removeClass("hidden");
                $(".login-username").val('');
            }
        });
    });
});
}(jQuery));
