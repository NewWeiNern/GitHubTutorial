function scanner(e){
    const file = e.target.files[0];
    const reader = new FileReader();
    const $this = this;
    
    console.log(file);
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
                res = JSON.parse(res);
                let fd = new FormData();
                let point = Math.random();
                let loc = res.name;

                fd.append("user", page._store.get("user_data"));
                fd.append("point", point);

                fetch("php/point.php", {
                    method : "POST",
                    body : fd
                })
                .then(e=>e.json())
                .then(e=>{
                    const data = e;
                    const active = $(".page.active");
                    const deposit = $("#deposit.page");
                    deposit.children(".weight").text(parseFloat(point.toFixed(2)) + "kg");
                    deposit.children(".location").text(res.name);
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

