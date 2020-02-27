const web_data = {
    previous : null,
    current : (window.location.hash || "#profile"),
    intro : localStorage.getItem("intro") || false
};

if(!web_data.intro){
    web_data.current = "#learn-more";
    $(".navbar").css("display", "none");
}
if(web_data.intro && !web_data.login){
    web_data.current = "#login";
    $(".navbar").css("display", "none");
}
$(`${web_data.current}.page`).addClass("page-active");
$(`a[href="${web_data.current}"]`).addClass("nav-active");

$(".navbar li a").click(function(e){
    e.preventDefault();
    // set to the correct page
    let current = $(this).attr("href");

    web_data.previous = web_data.current;
    web_data.current = current;

    if(web_data.current !== web_data.previous){
        // play animation for the 2 important nav button
        switch(web_data.current){
            case "#profile" : 
            $(web_data.previous)
            .css("left", "0%")
            .animate({left : "100%"});

            $(web_data.current)
            .css("left", "-100%")
            .animate({left : "0%"}, ()=>window.location.hash=current);
            break;
            case "#location" : 
            $(web_data.previous)
            .css("left", "0%")
            .animate({left : "-100%"});

            $(web_data.current)
            .css("left", "100%")
            .animate({left : "0%"},()=>window.location.hash=current);            
            break;
        }
    }

    $(".page.page-active").removeClass("page-active");
    $(".page" + current).addClass("page-active");
    $(".nav-active").removeClass("nav-active");
    $(this).addClass("nav-active");

});

$("#image-input").on("change", scanner);