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
});

$(document).ready(function(){
    $("#index-button").click(function(){
        $("#main-content").load("snippets/index-snippet.html", function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
        });
    });
});

$(document).ready(function(){
    $("#about-button").click(function(){
        $("#main-content").load("snippets/about-snippet.html", function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
        });
    });
});

$(document).ready(function(){
    $("#cv-button").click(function(){
        $("#main-content").load("snippets/cv-snippet.html", function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
        });
    });
});

$(document).ready(function(){
    $("#projects-button").click(function(){
        $("#main-content").load("snippets/projects-snippet.html", function(responseTxt, statusTxt, jqXHR){
            if(statusTxt == "error"){
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
        });
    });
});
