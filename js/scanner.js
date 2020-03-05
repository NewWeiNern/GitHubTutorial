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
            let run = true;
            try{
                const parsed = JSON.parse(res);
            }
            catch(err){
                alert("QR Code is not valid!");
                run = false;
            }

            if(run){
                let fd = new FormData();
                // fd.append("json", res);
                fd.append("user", page._store.get("user_data"));
                fd.append("point", Math.random());

                fetch("php/point.php", {
                    method : "POST",
                    body : fd
                })
                .then(e=>e.json())
                .then(e=>{
                    const data = e;
                    const active = $(".page.active");
                    page.view("#" + active.attr("id"), "#deposit", "left").then(e=>{
                        page.setData(data);
                        setTimeout(()=>{
                            page.view("#deposit", "#" + active.attr("id"), "right");
                        }, 2000);
                    });
                });
            }
        }
    }
    reader.readAsDataURL(file);
}

