//jshint esversion:6

var s = 0;
var k = 0;
var a = document.getElementById("but");
var x = document.getElementById('button');
var songs = Array.from(Array(12).keys());
songs.sort(() => Math.random() - 0.5);
a.src = "songs/" + songs[s] + ".mp3";

function min(x){
    document.body.style.background = "#e74c3c";
    x.className = 'btn';
    a.play();
}

function mout(y){
    if(k == 0){
        document.body.style.background = "#95a5a6" ;
        y.className = 'stop';
        a.pause();
    }
}

function mc(y){
    if(k == 0){
        document.body.style.background = "#e74c3c";
        y.className = 'btn';
        a.play();
        k = 1;
    }
    else if(k == 1){
        document.body.style.background = "#95a5a6" ;
        y.className = 'stop';
        a.pause();
        k = 0;
    }
}

setInterval(function(){
  if(a.ended == true){
    change();
  }
} , 7000);

function change(){
    a.pause();
    s++;
    if(s == 12)
        s = 0;
    a.src = "songs/" + songs[s] + ".mp3";
    document.body.style.background = "#e74c3c";
    x.className = 'btn';
    a.play();
    k = 1;
}
