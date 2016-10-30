
/* global graphicUtils */

function molecula (nElemPadre,nTop,nLeft,nRight,nBottom,nId) {
    var
        object,
        elemPadre=nElemPadre,
        top=nTop,
        left=nLeft,
        right=nRight,
        bottom=nBottom,
        id=nId;

    var createObject=function() {
        
        object=document.createElement("div");
        
        object.style.backgroundColor="blue";
        object.style.position="absolute";
        object.style.top=top+"px";
        object.style.left=left+"px";
        object.style.right=right+"px";
        object.style.bottom=bottom+"px";
        
        object.id=id;
        object.className="pizarra";
        
    };
    
    var append=function() {
        elemPadre.appendChild(object);
    };
    
    this.main=function() {
        createObject();
        append();
    };
};
