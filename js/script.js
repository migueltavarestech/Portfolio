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
    var language = 'english';
    var page = 'index';
    $("#main-content").load("snippets/index-snippet.html");


    $("#english-flag").click(function(){
        language = 'english';
        $("#english-flag").attr('class', 'flag-active');
        $("#portuguese-flag").attr('class', 'none');

        if(page == 'index'){
            $("#main-content").load("snippets/index-snippet.html");
        } else if(page == 'about'){
            $("#main-content").load("snippets/about-snippet.html");
        } else if(page == 'projects'){
            $("#main-content").load("snippets/projects-snippet.html");
        } else if(page == 'cv'){
            $("#main-content").load("snippets/cv-snippet.html");
        }

        document.getElementById("about-link").innerHTML = "About";
        document.getElementById("projects-link").innerHTML = "Projects";
        document.getElementById("gototop").innerHTML = "Go To Top";

    });
    $("#portuguese-flag").click(function(){
        language = 'portuguese';
        $("#english-flag").attr('class', 'none');
        $("#portuguese-flag").attr('class', 'flag-active');

        if(page == 'index'){
            $("#main-content").load("snippets/indexPT-snippet.html");
        } else if(page == 'about'){
            $("#main-content").load("snippets/aboutPT-snippet.html");
        } else if(page == 'projects'){
            $("#main-content").load("snippets/projectsPT-snippet.html");
        } else if(page == 'cv'){
            $("#main-content").load("snippets/cvPT-snippet.html");
        }

        document.getElementById("about-link").innerHTML = "Sobre";
        document.getElementById("projects-link").innerHTML = "Projetos";
        document.getElementById("gototop").innerHTML = "Voltar para Cima";

    });


    $("#index-button").click(function(){
        page = 'index';
        if(language == 'portuguese'){
            $("#main-content").load("snippets/indexPT-snippet.html");
        } else {
            $("#main-content").load("snippets/index-snippet.html");
        }
        $("#home-link").attr('class', 'active');
        $("#about-link").attr('class', 'none');
        $("#projects-link").attr('class', 'none');
        $("#cv-link").attr('class', 'none');
    });


    $("#about-button").click(function(){
        page = 'about';
        if(language == 'portuguese'){
            $("#main-content").load("snippets/aboutPT-snippet.html");
        } else {
            $("#main-content").load("snippets/about-snippet.html");
        }
        $("#home-link").attr('class', 'none');
        $("#about-link").attr('class', 'active');
        $("#projects-link").attr('class', 'none');
        $("#cv-link").attr('class', 'none');
    });


    $("#cv-button").click(function(){
        page = 'cv';
        if(language == 'portuguese'){
            $("#main-content").load("snippets/cvPT-snippet.html");
        } else {
            $("#main-content").load("snippets/cv-snippet.html");
        }
        $("#home-link").attr('class', 'none');
        $("#about-link").attr('class', 'none');
        $("#projects-link").attr('class', 'none');
        $("#cv-link").attr('class', 'active');
    });


    $("#projects-button").click(function(){
        page = 'projects';
        if(language == 'portuguese'){
            $("#main-content").load("snippets/projectsPT-snippet.html");
        } else {
            $("#main-content").load("snippets/projects-snippet.html");
        }
        $("#home-link").attr('class', 'none');
        $("#about-link").attr('class', 'none');
        $("#projects-link").attr('class', 'active');
        $("#cv-link").attr('class', 'none');
    });


    $(document).on('click', "#about-tile", function(){
        page = 'about';
        if(language == 'portuguese'){
            $("#main-content").load("snippets/aboutPT-snippet.html");
        } else {
            $("#main-content").load("snippets/about-snippet.html");
        }
        $("#home-link").attr('class', 'none');
        $("#about-link").attr('class', 'active');
        $("#projects-link").attr('class', 'none');
        $("#cv-link").attr('class', 'none');
    });


    $(document).on('click', "#projects-tile", function(){
        page = 'projects';
        if(language == 'portuguese'){
            $("#main-content").load("snippets/projectsPT-snippet.html");
        } else {
            $("#main-content").load("snippets/projects-snippet.html");
        }
        $("#home-link").attr('class', 'none');
        $("#about-link").attr('class', 'none');
        $("#projects-link").attr('class', 'active');
        $("#cv-link").attr('class', 'none');
    });


    $(document).on('click', "#cv-tile", function(){
        page = 'cv';
        if(language == 'portuguese'){
            $("#main-content").load("snippets/cvPT-snippet.html");
        } else {
            $("#main-content").load("snippets/cv-snippet.html");
        }
        $("#home-link").attr('class', 'none');
        $("#about-link").attr('class', 'none');
        $("#projects-link").attr('class', 'none');
        $("#cv-link").attr('class', 'active');
    });


    $("#portfolio-home").click(function(){
        page = 'index';
        if(language == 'portuguese'){
            $("#main-content").load("snippets/indexPT-snippet.html");
        } else {
            $("#main-content").load("snippets/index-snippet.html");
        }
        $("#home-link").attr('class', 'active');
        $("#about-link").attr('class', 'none');
        $("#projects-link").attr('class', 'none');
        $("#cv-link").attr('class', 'none');
    });
});
