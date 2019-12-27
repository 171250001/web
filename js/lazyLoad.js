
window.onload=function(){

var imgs=document.querySelectorAll('img');
function isVisible(e){
    var h=window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight;
    var scrolTop=document.documentElement.scrollTop||document.body.scrollTop;

    var eleoffsetTop=e.offsetTop;
    if(eleoffsetTop<h+scrolTop){
        return true;
    }else{
        return false;
    }
}
function lazyload(imgs){
    for(var i=0;i<imgs.length;i++){
        if(isVisible(imgs[i])){
            imgs[i].src = imgs[i].getAttribute('data-src');
        }
    }
}
   window.onscroll=function(){
    lazyload(imgs); 
}

}

/*window.onload=function(){
    var imgs= this.document.querySelectorAll('img');

    function getTop(e){
        return e.offsetTop;
    }

    function lazyload(imgs){
        var h=window.innerHeight;
        var s=document.documentElement.scrollTop||document.body.scrollTop;
        for(var i=0;i<imgs.length;i++){
            if ((h+s)>getTop(imgs[i])){
                (function(i){
                    setTimeout(function(){
                        var temp=new Image();
                        temp.src = imgs[i].getAttribute("data-src");
                        temp.onload = function(){
                            imgs[i].src=imgs[i].getAttribute("data-src");
                        }
                    },100)
                })(i)
            }
        }
    }
lazyload(imgs);

window.onscroll=function(){
    lazyload(imgs);
} 
}*/
