function colorClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours <10) {
        hours  = "0" + hours;
    }
    if (minutes <10) {
        minutes  = "0" + minutes;
    }
    if (seconds <10) {
        seconds  = "0" + seconds;
    }
    let clockFace = hours + ":" + minutes + ":" + seconds;
    let colorHex = '#' + Math.floor(Math.random()* 16777215).toString(16);
    console.log(colorHex);

    let text = 125646;
    text = text.toString(2);
    console.log(text)
    

    document.getElementById('clock').innerText = clockFace;
    document.body.setAttribute('style', `background-color:${colorHex}`);

    setTimeout(
        function(){
            colorClock();
        },
        500
    );


    console.log(hours);
    }
colorClock();