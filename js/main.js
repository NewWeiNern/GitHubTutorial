$(".page" + window.location.hash).addClass("page-active");
$("a[href='" + (window.location.hash == "" ? "#profile" : window.location.hash) + "']").addClass("nav-active");

$(".navbar li a").click(function(){
    let current = $(this).attr("href");
    $(".page.page-active").removeClass("page-active");
    $(".page" + current).addClass("page-active");
    $(".nav-active").removeClass("nav-active");
    $(this).addClass("nav-active");
});

// const vid = {
//     element : document.querySelector("#cam_vid"),
//     options : initVideoObjectOptions("cam_vid"),
//     id : 0,
//     init(){
//         console.log(this.options);
//         initScanner(this.options);
//         initAvaliableCameras($("#select"), (e)=>{
//             alert(e);
//             this.id =0;
//         })
//         initCamera(this.id);
//         scanStart(function(data){
//             alert(data);
//         });

//         this.element.addEventListener("play", function(){
//             var $this = this;

//             (function loop(){
//                 if(!$this.paused && !$this.ended){
//                     setTimeout(loop, 1000/30);
//                 }
//             })();
//         }, 0);
//     }
// };

// vid.init();
