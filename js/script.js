// function resizeDivs() {
//     var main = document.getElementById('detailedCV').offsetHeight;
//     var sidebar = document.getElementById('info').offsetHeight;
//     if (sidebar > main) {
//         main = sidebar;
//         document.getElementById('detailedCV').style.height = document.getElementById('info').style.height = main + 'px'
//     } else {
//         sidebar = main;
//         document.getElementById('info').style.height = document.getElementById('detailedCV').style.height = sidebar + 'px'
//     }
// }
// window.onload = resizeDivs;

$(document).ready(function(){
    $("#main-content").load("snippets/index-snippet.html");
    $("#index-button").click(function(){
        $("#main-content").load("snippets/index-snippet.html", function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
        });
        $("#home-link").attr('class', 'active');
        $("#about-link").attr('class', 'none');
        $("#projects-link").attr('class', 'none');
        $("#cv-link").attr('class', 'none');
    });
    $("#about-button").click(function(){
        $("#main-content").load("snippets/about-snippet.html", function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
        });
        $("#home-link").attr('class', 'none');
        $("#about-link").attr('class', 'active');
        $("#projects-link").attr('class', 'none');
        $("#cv-link").attr('class', 'none');
    });
    $("#cv-button").click(function(){
        $("#main-content").load("snippets/cv-snippet.html", function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
        });
        $("#home-link").attr('class', 'none');
        $("#about-link").attr('class', 'none');
        $("#projects-link").attr('class', 'none');
        $("#cv-link").attr('class', 'active');
    });
    $("#projects-button").click(function(){
        $("#main-content").load("snippets/projects-snippet.html", function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
        });
        $("#home-link").attr('class', 'none');
        $("#about-link").attr('class', 'none');
        $("#projects-link").attr('class', 'active');
        $("#cv-link").attr('class', 'none');
    });
    $(document).on('click', "#about-tile", function(){
        $("#main-content").load("snippets/about-snippet.html", function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
        });
        $("#home-link").attr('class', 'none');
        $("#about-link").attr('class', 'active');
        $("#projects-link").attr('class', 'none');
        $("#cv-link").attr('class', 'none');
    });
    $(document).on('click', "#projects-tile", function(){
        $("#main-content").load("snippets/projects-snippet.html", function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
        });
        $("#home-link").attr('class', 'none');
        $("#about-link").attr('class', 'none');
        $("#projects-link").attr('class', 'active');
        $("#cv-link").attr('class', 'none');
    });
    $(document).on('click', "#cv-tile", function(){
        $("#main-content").load("snippets/cv-snippet.html", function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
        });
        $("#home-link").attr('class', 'none');
        $("#about-link").attr('class', 'none');
        $("#projects-link").attr('class', 'none');
        $("#cv-link").attr('class', 'active');
    });
    $("#homepage").click(function(){
        $("#main-content").load("snippets/index-snippet.html", function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
        });
        $("#home-link").attr('class', 'active');
        $("#about-link").attr('class', 'none');
        $("#projects-link").attr('class', 'none');
        $("#cv-link").attr('class', 'none');
    });
});
