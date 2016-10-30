
/* global graphicUtils */

function main() {
    var 
        myPortadaDisp,
//        coordCent,
        dat=[];

    dat=[
        [0.10,  0,                  0,      "","rgba(0,0,0,0)"],
        [0.06,  0,                  0.19,   "Informática para todas las edades",""],
        [0.05,  (Math.PI/3),        0.19,   "Iniciación a la cocina",""],
        [0.05,  (Math.PI/7),        0.27,   "Cerveza artesana",""],
        [0.05,  (3*Math.PI/2),      0.19,   "Robótica",""],
        [0.05,  (3.5*Math.PI/2),    0.175,  "Cumpleaños temáticos",""],
        [0.05,  (3.8*Math.PI/2),    0.30,   "Introducción a la fotografía",""],
        [0.06,  (1.3*Math.PI/2),    0.15,   "Clases de apoyo",""],
        [0.05,  0.1,                0.32,   "Impresión 3D",""]
    ];

    document.getElementById("molecula").style.width=(window.innerWidth*0.7)+"px";
    document.getElementById("molecula").style.height=(window.innerHeight)+"px";
//    document.getElementById("molecula").style.width=500+"px";
//    document.getElementById("molecula").style.height=500+"px";
//    alert(document.getElementById("molecula").style.width);
//    alert(document.getElementById("molecula").style.height);

//    coordCent=graphicUtils.calcCenterW();
//    coordMolecula=graphicUtils.calcCenterO("molecula");
    
//    alert(coordMolecula.x+" "+coordMolecula.y);
//    var
//        newCx=coordMolecula.x*1.30,
//        newCy=coordMolecula.y;

//    graphicUtils.printElectrones("electron",newCx,newCy,dat);
    
    myPortadaDisp=new portadaDisp(window.innerWidth,window.innerHeight,document.getElementById("contGen"),dat);
    myPortadaDisp.main();
   
}