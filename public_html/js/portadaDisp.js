
/* global graphicUtils */

function portadaDisp(nWW,nWH,nElemPadre,nEDat) {
    var
        elemPadre=nElemPadre,
        wW=nWW,
        wH=nWH,
        eDat=nEDat,
        dat={};
    
    var calcPositionDesktop=function() {
        var 
            coordMolecula;
        
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
    
    var printElectrones=function(id,cX,cY,elDat) {
        var 
            i=0,
            id2,
            tamanho,
            separacion;
    
        while (i<elDat.length) {
            tamanho=graphicUtils.convRelO(elDat[i][0]*graphicUtils.escala,"molecula1");
            separacion=graphicUtils.convRelO(elDat[i][2]*graphicUtils.escala,"molecula1");
            id2=id+""+i;
            graphicUtils.POL.molecula={};
            graphicUtils.POL.molecula[id2]=new electron();
            graphicUtils.POL.molecula[id2].constructor(
                id2,
                tamanho,
                cX,
                cY,
                elDat[i][1],
                separacion,
                elDat[i][3],
                elDat[i][4],
                document.getElementById("molecula1")
            );
            graphicUtils.POL.molecula[id2].main();
            i++;
        }
    };
    
    var situarDesktop=function() {
        graphicUtils.POL["pizarra"]=new pizarra (
            document.getElementById("contGen"),
            "Web en construcción",
            dat.pizarra.top,
            dat.pizarra.left,
            dat.pizarra.right,
            dat.pizarra.bottom,
            "pizarra1"
        );
        
        graphicUtils.POL["molecula"]=new molecula(
            document.getElementById("contGen"),
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
                dat.molecula.center.y,
                eDat
            );
    };
    
    this.main=function() {
        calcPositionDesktop();
        situarDesktop();
    };
};
