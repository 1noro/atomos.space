
/* global graphicUtils */

function contCajas (nElemPadre,nMarginTop,nId) {
    var
        object,
        elemPadre=nElemPadre,
        marginTop=nMarginTop,
        id=nId;

    var createObject=function() {
        
        object=document.createElement("div");
        
//        object.style.backgroundColor="red";
//        object.style.position="absolute";
        object.style.marginTop=marginTop+"px";
        
        object.id=id;
        object.className="contCajas";
        
    };
    
    var append=function() {
        elemPadre.appendChild(object);
    };
    
    //REVISAR
    this.getObject=function() {
        return object;
    };
    
    this.main=function() {
        createObject();
        append();
    };
};