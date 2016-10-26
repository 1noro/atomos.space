
function center(o) {
//    alert(o.offsetHeight);
    var
        wW = window.innerWidth,
        wH = window.innerHeight,
        oW = o.offsetWidth,
        oH = o.offsetHeight;
    
    var
        top = (wH-oH)/2,
        left = (wW-oW)/2;

    o.style.top=top+"px";
    o.style.left=left+"px";
}

function calcCenter() {
    var
        coord=[],
        wW = window.innerWidth,
        wH = window.innerHeight;

    coord["top"] = wH/2;
    coord["left"] = wW/2;

    return coord;
}

function posicion(deg,sep) {
    var
        coord=[],
        centro=calcCenter();
    
    coord["left"]=centro["left"]-(sep*Math.cos(deg));
    coord["top"]=centro["top"]-(sep*Math.sin(deg));
    
    return coord;
}

function situar(o,coord) {
    var
        oW2=o.offsetWidth/2,
        oH2=o.offsetHeight/2;
    o.style.top=(coord["top"]-oH2)+"px";
    o.style.left=(coord["left"]-oW2)+"px";
}

function ini() {
    var o = document.getElementById("moleculaLogo");
    center(o);
    
//    coord=posicion((Math.PI/2),200);
//    alert("left:"+coord["left"]+" top:"+coord["top"]);

    situar(document.getElementById("atomo1"),posicion(0,350));
    situar(document.getElementById("atomo2"),posicion((Math.PI/3),350));
    situar(document.getElementById("atomo3"),posicion((Math.PI/7),500));
    situar(document.getElementById("atomo4"),posicion(((3*Math.PI)/2),350));
    situar(document.getElementById("atomo5"),posicion(((3.5*Math.PI)/2),400));
    situar(document.getElementById("atomo6"),posicion(((3.8*Math.PI)/2),600));
    situar(document.getElementById("atomo7"),posicion(((1.3*Math.PI)/2),280));
    
//    alert(Math.sin(Math.PI/2));
    
}