function scanner(e){
    const file = e.target.files[0];
    const reader = new FileReader();
    const $this = this;
    reader.onloadend = function(e){
        qrcode.decode(reader.result);
    }
    qrcode.callback = function(res){
        if(res instanceof Error){
            alert("QR Code is not found.");
        }
        else{

            web_data.previous = web_data.current;
            window.location.hash = web_data.current = "#scan";
            
            $(".page-active").removeClass("page-active");

            $("#scan")
            .addClass("page-active")
            .css("top", "100%")
            .animate({"top" : "0%"});
        }
    }
    reader.readAsDataURL(file);
}