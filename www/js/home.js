(function ($) {
$( document ).ready(function() {

    var testQuery = getUrlVars()['usr'];
    alert('Hello ' + testQuery);




    $(document).on('click', '#login-btn', function(e){
        e.preventDefault();
        var url = $(".login-username").val();        
         
        $.ajax({
            url: "http://10.0.2.15:8000/api/socio/" + url + "/?format=json",
            dataType: "json",
            async: true,
            success: function (result) {
                //alert(result.dni);
                window.location="home.html";
            },
            error: function (xhr, ajaxOptions, thrownError) { console.log("errorstatus: " + xhr.status + " ajaxoptions: " + ajaxOptions + " throwError: " + thrownError);
    }
        });         
    });
});
}(jQuery));

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}