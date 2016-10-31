
/* global graphicUtils */

function main() {
    var 
        myPortadaDisp,
        datos={};
    
    datos={
        electrones:[
            [0.10,  0,                  0,      "","rgba(0,0,0,0)"],
            [0.06,  0,                  0.19,   "Informática para todas las edades",""],
            [0.05,  (Math.PI/3),        0.19,   "Iniciación a la cocina",""],
            [0.05,  (Math.PI/7),        0.27,   "Cerveza artesana",""],
            [0.05,  (3*Math.PI/2),      0.17,   "Robótica",""],
            [0.05,  (3.5*Math.PI/2),    0.175,  "Cumpleaños temáticos",""],
            [0.05,  (3.8*Math.PI/2),    0.30,   "Introducción a la fotografía",""],
            [0.06,  (1.3*Math.PI/2),    0.15,   "Clases de apoyo",""],
            [0.05,  0.1,                0.32,   "Impresión 3D",""],
            [0.06,  (2.4*Math.PI/2),    0.16,   "¿?",""]
        ],
        cajas:[
            [
                "\
                    <div> \n\
                        HOLA \n\
                    </div> \n\
                "
            ],
            [
                "\
                    <div>\n\
                        HOLA\n\
                    </div>\n\
                "
            ]
        ]
    };
    
//    document.getElementById("contCajas").style.top=window.innerHeight+"px";
    
    myPortadaDisp=new portadaDisp(window.innerWidth,window.innerHeight,document.getElementById("contGen"),datos);
//    myPortadaDisp=new portadaDisp(window.innerWidth,window.innerHeight,document.getElementById("contGen"),dat);
    myPortadaDisp.main();
   
}