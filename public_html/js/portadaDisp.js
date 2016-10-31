
/* global graphicUtils */

function portadaDisp(nWW,nWH,nElemPadre,datos) {
    var
        elemPadre=nElemPadre,
        wW=nWW,
        wH=nWH,
        dat={},
        contGen=document.getElementById("contGen");
    
    var calcPositionDesktop=function() {
        
        dat.pizarra={};
        dat.pizarra.top=0.05*wH;
        dat.pizarra.left=0.75*wW;
        dat.pizarra.right=0.05*wH;
        dat.pizarra.bottom=0.05*wH;
        
        dat.molecula={};
        dat.molecula.top=0;
        dat.molecula.left=0;
        dat.molecula.right=0.25*wW;
        dat.molecula.bottom=0;
        
    };
    
    var calcPositionMovil=function() {
        
        dat.pizarra={};
        dat.pizarra.top=0.60*wH;
        dat.pizarra.left=0.02*wW;
        dat.pizarra.right=0.02*wW;
        dat.pizarra.bottom=0.02*wW;
        
        dat.molecula={};
        dat.molecula.top=0;
        dat.molecula.left=0;
        dat.molecula.right=0;
        dat.molecula.bottom=0.40*wH;
        
    };
    
    var printElectrones=function(id,cX,cY) {
        var 
            i=0,
            id2,
            tamanho,
            separacion;
    
        graphicUtils.POL.molecula={};
        while (i<datos.electrones.length) {
            tamanho=graphicUtils.convRelO(datos.electrones[i][0]*graphicUtils.escala,"molecula1");
            separacion=graphicUtils.convRelO(datos.electrones[i][2]*graphicUtils.escala,"molecula1");
            id2=id+""+i;
            graphicUtils.POL.molecula[id2]=new electron();
            graphicUtils.POL.molecula[id2].constructor(
                id2,
                tamanho,
                cX,
                cY,
                datos.electrones[i][1],
                separacion,
                datos.electrones[i][3],
                datos.electrones[i][4],
                document.getElementById("molecula1")
            );
            graphicUtils.POL.molecula[id2].main();
            i++;
        }
    };
    
    var printCajas=function(id,elemPadre,marginBottom) {
        var
            i=0,
            id2;
    
        graphicUtils.POL.cajas={};
        while (i<datos.cajas.length) {
            id2=id+""+i;
            graphicUtils.POL.cajas[id2]=new caja(
                elemPadre,
                marginBottom,
                datos.cajas[i][0],
                id2
            );
            graphicUtils.POL.cajas[id2].main();
            i++;
        }
    };
    
    var situar=function() {
        graphicUtils.POL["pizarra"]=new pizarra (
            contGen,
            "Web en construcción",
            dat.pizarra.top,
            dat.pizarra.left,
            dat.pizarra.right,
            dat.pizarra.bottom,
            "pizarra1"
        );
        
        graphicUtils.POL["molecula"]=new molecula(
            contGen,
            dat.molecula.top,
            dat.molecula.left,
            dat.molecula.right,
            dat.molecula.bottom,
            "molecula1"
        );

        graphicUtils.POL["pizarra"].main();
        graphicUtils.POL["molecula"].main();
        
        dat.molecula.center=graphicUtils.calcCenterO("molecula1");
        
        printElectrones(
                "electron",
                dat.molecula.center.x*1.30,
                dat.molecula.center.y
        );

        graphicUtils.POL["contCajas"]=new contCajas(
            contGen,
            wH+graphicUtils.convRelH(0.15),
            "contCajas"
        );
        graphicUtils.POL.contCajas.main();
        
        printCajas("caja",graphicUtils.POL.contCajas.getObject(),graphicUtils.convRelH(0.15));
    };
    
    this.main=function() {
        if (wW>wH) {
            calcPositionDesktop();
        } else {
            graphicUtils.escala=1.75;
            calcPositionMovil();
        }
        situar();
    };
};
