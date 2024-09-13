function stopwatch(elem){
    var time = 0;
    var offset;
    var interval;


    function lapOn(){
        var lapTime = lap_box.appendChild(document.createElement("li"))
        lapTime.innerHTML = elem.textContent;
        lapTime.classList = 'lapItem'
    }

    function lapOff(){
        return;
    }

    function update(){
        if(this.isOn){
            time += delta();
        }

        elem.textContent = timeFormatter(time);
    }

    function delta(){
        var now = Date.now();
        var timePassed = now - offset;

        offset = now;

        return timePassed;
    }

    function timeFormatter(time){
        //time = new Date (time);
        //var hours = time.getHours().toString();
        //var minutes = time.getMinutes().toString();
        //var seconds = time.getSeconds().toString();
        //var milliseconds = time.getMilliseconds().toString();
        //if (hours.length < 2) {
           // hours = '0' + hours;
        //}
        //if (minutes.length < 2) {
            //minutes = '0' + minutes;
        //}
        //if (seconds.length < 2) {
            //seconds = '0' + seconds;
        //}
        //while (milliseconds.length < 2){
            //milliseconds = '0' + milliseconds;
        //}
        //var result = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
        //return result;
        var milliseconds = time % 1000;
        time = (time - milliseconds) / 1000;
        var seconds = time % 60;
        time = (time - seconds) / 60;
        var minutes = time % 60;
        var hours = (time - minutes) / 60;

        var hoursStr = hours.toString().padStart(2, '0');
        var minutesStr = minutes.toString().padStart(2, '0');
        var secondsStr = seconds.toString().padStart(2, '0');
        var millisecondsStr = milliseconds.toString().padStart(3, '0');

        return hoursStr +':'+ minutesStr +':'+ secondsStr +'.'+ millisecondsStr;

    }

    this.start = function(){
        interval = setInterval(update.bind(this), 1);
        offset = Date.now();
        this.isOn = true;
    };

    this.stop = function(){
        clearInterval(interval);
        interval = null;
        this.isOn = false
    };

    this.reset = function() {
        time = 0;
        lap_box.innerHTML = '';
        interval = null;
        this.isOn = false;
        update();
    };

    this.lapOn = function(){
        lapOn();
    }

    this.lapOff = function(){
        lapOff();
    }

    this.isOn = false;
}
