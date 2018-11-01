<!--

$(document).ready(function() {
        $.ajax({
                type: "GET",
                url: "https://cnsmaryland.org/interactives/fall-2018/election-night-app/data-proxy-example/data-proxy.php",
                cache: false,
                dataType: "json",
                success: function(response) {
                        $("#loading").hide();
                        var html = "<pre>\n";
                        html += JSON.stringify(response, null, 5);
                        html += "</pre>\n";
                        $("#content").html(html);
                },
                error: function(xhr, status, error) {
                        $("#loading").hide();
                        $("#content").html("Error: " + error);
                }
        });
});

-->
