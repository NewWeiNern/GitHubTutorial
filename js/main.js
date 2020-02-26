$(".page" + window.location.hash).addClass("page-active");
$("a[href='" + (window.location.hash == "" ? "#profile" : window.location.hash) + "']").addClass("nav-active");

$(".navbar li a").click(function(){
    let current = $(this).attr("href");
    $(".page.page-active").removeClass("page-active");
    $(".page" + current).addClass("page-active");
    $(".nav-active").removeClass("nav-active");
    $(this).addClass("nav-active");
});