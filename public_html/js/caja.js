
/* global graphicUtils */

function caja (nElemPadre,nMarginBottom,nHtmlIn,nId) {
    var
        object,
        elemPadre=nElemPadre,
        marginBottom=nMarginBottom,
        htmlIn=nHtmlIn,
        id=nId;

    var createObject=function() {
        
        object=document.createElement("div");
        
        object.style.backgroundColor="grey";
//        object.style.position="absolute";
        object.style.marginBottom=marginBottom+"px";
        //
        object.style.padding=graphicUtils.convRelW(0.01)+"px";
        
        object.id=id;
        object.className="caja";
        
        object.innerHTML=htmlIn;
        
    };
    
    var append=function() {
        elemPadre.appendChild(object);
    };
    
    this.main=function() {
        createObject();
        append();
    };
};