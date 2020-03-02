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
            alert(res);
            // After finish scanning
        }
    }
    reader.readAsDataURL(file);
}

