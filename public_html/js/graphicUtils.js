
var graphicUtils=new function() {
    
    this.POL={};
    
    this.calcCenterW=function() {
        var
            coord=[],
            wW = window.innerWidth,
            wH = window.innerHeight;

        coord.y = wH/2;
        coord.x = wW/2;

        return coord;
    };
    
    this.calcCenterO=function(id) {
        var
            o=document.getElementById(id),
            coord=[],
            oW = o.offsetWidth,
            oH = o.offsetHeight;

        coord.y = oH/2;
        coord.x = oW/2;

        return coord;
    };
    
    this.center=function(o) {
        var
            wW = window.innerWidth,
            wH = window.innerHeight,
            oW = o.offsetWidth,
            oH = o.offsetHeight,
            top,
            left;

        top = (wH-oH)/2,
        left = (wW-oW)/2;

        o.style.top=top+"px";
        o.style.left=left+"px";
    };
    
    this.posicion=function(deg,sep) {
        var
            coord=[],
            centro=calcCenter();

        coord.left=centro.left-(sep*Math.cos(deg));
        coord.top=centro.top-(sep*Math.sin(deg));

        return coord;
    };
    
    this.convRelW=function(por) {
        var
            valRel,
            wW = window.innerWidth;
        
        valRel=wW*por;
        
        return valRel;
    };
    
    this.convRelH=function(por) {
        var
            valRel,
            wH = window.innerHeight;
        
        valRel=wH*por;
        
        return valRel;
    };
    
    this.convRelO=function(por,id) {
        var
            valRel,
            o=document.getElementById(id),
            oW = o.offsetWidth,
            oH = window.offsetHeight;
        
        valRel=oW*por;
        
        return valRel;
    };
    
    this.convRelM=function(por,medida) {
        var
            valRel;
        
        valRel=medida*por;
        
        return valRel;
    };
    
    this.eList={};
    this.escala=1.4;
    
    this.printElectrones=function(id,cX,cY,dat) {
        var 
            i=0,
            id2,
            tamanho,
            separacion;
    
        while (i<dat.length) {
            tamanho=this.convRelO(dat[i][0]*this.escala,"molecula");
            separacion=this.convRelO(dat[i][2]*this.escala,"molecula");
            id2=id+""+i;
            this.eList[id2]=new electron();
            this.eList[id2].constructor(
                id2,
                tamanho,
                cX,
                cY,
                dat[i][1],
                separacion,
                dat[i][3],
                dat[i][4],
                document.getElementById("molecula")
            );
            this.eList[id2].main();
            i++;
        }
    };
    
    this.detectMovil=function() {
        var dispositivo=navigator.userAgent.toLowerCase();
        if (dispositivo.search(/iphone|ipod|ipad|android/)>(-1)) {
                this.convertMovil();
        }
    };
    
    //NO ACABADO
    this.convertMovil=function() {
        var
            molecula=document.getElementById("molecula"),
            contInfo=document.getElementById("contInfo");
        
//        molecula.
    
    };
    
    // NO MIO
    this.createLineElement=function(x, y, length, angle) {
        var line = document.createElement("div");
        var styles = 'border: 1px solid black; '
                   + 'width: ' + length + 'px; '
                   + 'height: 0px; '
                   + '-moz-transform: rotate(' + angle + 'rad); '
                   + '-webkit-transform: rotate(' + angle + 'rad); '
                   + '-o-transform: rotate(' + angle + 'rad); '  
                   + '-ms-transform: rotate(' + angle + 'rad); '  
                   + 'position: absolute; '
                   + 'top: ' + y + 'px; '
                   + 'left: ' + x + 'px; ';
        line.setAttribute('style', styles);  
        return line;
    };
    
    this.createLine=function(x1, y1, x2, y2) {
        var a = x1 - x2,
            b = y1 - y2,
            c = Math.sqrt(a * a + b * b);

        var sx = (x1 + x2) / 2,
            sy = (y1 + y2) / 2;

        var x = sx - c / 2,
            y = sy;

        var alpha = Math.PI - Math.atan2(-b, a);

        return createLineElement(x, y, c, alpha);
    };
    
};