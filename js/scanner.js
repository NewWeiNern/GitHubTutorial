function scanner(e){
    const file = e.target.files[0];
    const reader = new FileReader();
    const $this = this;
    
    reader.onloadend = function(e){
        qrcode.decode(reader.result);
    }
    qrcode.callback = function(res){
        if(res instanceof Error){
            alert("QR Code is not found");
        }
        else{
            // alert(res);
            // After finish scanning
            const active = $(".page.active");
            page.view("#" + active.attr("id"), "#deposit", "left").then(e=>{
                setTimeout(()=>{
                    page.view("#deposit", "#" + active.attr("id"), "left");
                }, 1500);

            });
        }
    }
    reader.readAsDataURL(file);
}

