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
swipe($(".page#onboarding"));
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
$("#learn-more input[type='button']").click(function(){
    $(this.parentElement).css({left : 0, width : "103%"}).animate({left : "-100%"});
    $(".page#onboarding").css({
        display : "block",
        zIndex : 9,
        left : "100%"
    }).animate({left : "0%"}, ()=>{
        $(".page.page-active").removeClass("page-active");
        $(".page#onboarding").addClass("page-active");    
    });
});
$("#sp-btn").click(function(){
    localStorage.setItem("intro", true);
    $(".page#onboarding").css({
        left : "0"
    }).animate({left : "-100%"}, ()=>{
        $(".page.page-active").removeClass("page-active");
        $(".page#login").addClass("page-active");
    });

    $(".page#login").css({
        left : "100%",
        display :"block",
        zIndex : 3
    }).animate({left : "0%"}, ()=>{
        $(".page.page-active").removeClass("page-active");
        $(".page#login").addClass("page-active");
    });
});
$("#image-input").on("change", scanner);