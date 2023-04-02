 var imgobj=document.getElementById("myimg");
    var t1;
    var t2;
    
    function Fin(){
        
        imgobj.style.opacity="0.0";
        var opin=0;
        
        t1=setInterval(function(){
            if(parseInt(opin)==1)
                {
                    
                    clearInterval(t1);
                }
            else{
                
                imgobj.style.opacity=opin+"";
                opin+=0.1;
            }
        },500)
        
    }
               
    function Fout(){
        
        imgobj.style.opacity="1.0";
        var opin=1.0;
        
        t2=setInterval(function(){
            if(opin==(-0.09999999999999987))
                {
                    
                    clearInterval(t2);
                }
            else{
                
                imgobj.style.opacity=opin+"";
                opin-=0.1;
            }
        },500)
        }
    
    