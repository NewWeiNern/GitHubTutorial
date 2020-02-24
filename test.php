<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scanned QR!</title>
</head>
<body>
    <script>
        const socket = new WebSocket("ws://"+ window.location.host +":8080/app");
        let socket_connected = false;
        let Interval;

        setTimeout(()=>socket_connected ? null : socket.close(), 2000);
        socket.onopen = ()=>{
            socket_connected = true;
            console.log("Socket successfully established");
        }
        socket.onmessage = (e)=>{
            console.log(JSON.parse(e.data).read);
            // nothing
        }
        // socket.onclose = ()=>{
        //     Interval = setInterval(sendRequest, 15000);
        //     console.log("Using XMLHttpRequest as backup");
        // }

        function send_data(){
            socket.send(JSON.stringify({
                type : "app",
                user : "NWN",
                QR : {"time":1582225239,"cgc":"7b53236aeb7431aa45a662b9dbd63f43","code":"18467948"}
            }));
        }
    </script>
    <!-- Simluate send data -->
    <input type="button" onclick="send_data()" value="test"/>
</body>
</html>