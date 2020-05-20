var s = -2;
var k = 0;
var a = new Audio( 'songs/' + s + '.mp3' );

function min(x){
    document.body.style.background = "#e74c3c";
    x.className = 'btn';
    a.play();
}

function mout(x){
    if(k == 0){
        document.body.style.background = "#95a5a6" ;
        x.className = 'stop';
        a.pause();
    }
}

function mc(){
    var x = document.getElementById('but');
    if(k == 0){
        document.body.style.background = "#e74c3c";
        x.className = 'btn';
        a.play();
        k = 1;
    }
    else if(k == 1){
        document.body.style.background = "#95a5a6" ;
        x.className = 'stop';
        a.pause();
        k = 0;
    }
}

function change(){
    var x = document.getElementById('but');
    a.pause();
    s++;
    if(s == 11)
        s = -2;
    a = new Audio( 'songs/' + s + '.mp3' );
    document.body.style.background = "#e74c3c";
    x.className = 'btn';
    a.play();
    k = 1;
}
