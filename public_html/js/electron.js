
/* global graphicUtils */

function electron() {
    
    var
        object,
        id,
        radio,
        x,
        y,
        top,
        left,
        relCenterY,
        relCenterX,
        deg,
        sep,
        lH=graphicUtils.convRelO(0.015*graphicUtils.escala,"molecula1"),
        txt,
        color,
        vibrarPos=true,
        interval,
        elemPadre,
        txtDiv;

    this.constructor=function(nId,nRadio,nRelCenterX,nRelCenterY,nDeg,nSep,nTxt,nColor,nElemPadre) {
        id=nId;
        radio=nRadio;
        relCenterX=nRelCenterX;
        relCenterY=nRelCenterY;
        deg=nDeg;
        sep=nSep;
        txt=nTxt;
        color=nColor;
        elemPadre=nElemPadre;
    };

    var calcPosition=function() {
        x=relCenterX-(sep*Math.cos(deg));
        y=relCenterY-(sep*Math.sin(deg));
        left=x-radio;
        top=y-radio;
    };
    
    this.eToString=function() {
        var out="\n\
            object="+object+" \n\
            id="+id+" \n\
            radio="+radio+" \n\
            x="+x+" \n\
            y="+y+" \n\
            top="+top+" \n\
            left="+left+" \n\
            relCenterY="+relCenterY+" \n\
            relCenterX="+relCenterX+" \n\
            deg="+deg+" \n\
            sep="+sep+" \n\
            lH="+lH+" \n\
            txt="+txt+" \n\
            color="+color+" \n\
            vibrarPos="+vibrarPos+" \n\
            interval="+interval+" \n\
        ";
        return out;
    };
    
    var createObject=function() { 
        txtDiv=document.createElement("div");
    
        txtDiv.appendChild(document.createTextNode(txt));
        txtDiv.style.fontSize=(lH-2)+"px";
        txtDiv.style.lineHeight=lH+"px";
        // UNA VEZ MOSTRADO SE LE ASIGNA EL MARGIN TOP

        object=document.createElement("div");
        object.appendChild(txtDiv);
        
        object.id=id;
        object.className="electron";
        object.style.position="absolute";
        object.style.width=(radio*2)+"px";
        object.style.height=(radio*2)+"px";
        object.style.borderRadius=radio+"px";
        
        if (color==="") {
            color=randomColor();
        };
        
        object.style.backgroundColor=color;
        
        object.onmouseover=function() {
            graphicUtils.POL.molecula[this.id].empezarVibrar();
        };
        
        object.onmouseout=function() {
            graphicUtils.POL.molecula[this.id].pararVibrar();
        };

        if (id==="electron0") {
            object.onmousedown=function() {
                graphicUtils.POL.molecula[this.id].openPopup("popupContacto");
            };
        }
        
    };
    
    this.openPopup=function(id) {
        var 
            o1=document.getElementById(id),
            o2=document.getElementById("bgPopup");
        o1.style.display="block";
        o2.style.display="block";
        graphicUtils.center(o1);
    };
    
    this.empezarVibrar=function() {
        interval = setInterval(function(){ 
            if (vibrarPos===true) {
                object.style.transform = "rotate(3deg)";
                object.style.webkitTransform = "rotate(3deg)";
                vibrarPos=false;
            } else {
                object.style.transform = "rotate(-3deg)";
                object.style.webkitTransform = "rotate(-3deg)";
                vibrarPos=true;
            };
        }, 50);  
    };
    
    this.pararVibrar=function() {
        clearInterval(interval);
    };
    
    var randomColor=function() {
        var colors=[
            "AD1C5B",
            "215BBD",
            "42048F",
            "FC4692",
            "1A3564"
        ];
        
        out=colors[Math.floor((Math.random() * colors.length) + 0)];
        
        return "#"+out;
    };
    
    var situar=function() {
        object.style.top=top+"px";
        object.style.left=left+"px";
        elemPadre.appendChild(object);
        
        txtDiv.style.marginTop=(radio-(txtDiv.offsetHeight/2))+"px";
    };
    
    this.main=function() {
        calcPosition();
        createObject();
        situar();
    };
    
};
