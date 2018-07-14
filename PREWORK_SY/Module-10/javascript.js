var text = document.getElementById("growBtn").addEventListener("click", function(){
    document.getElementById("box").style.height ="400px";
});

var text = document.getElementById("Blue").addEventListener("click",function(){
    document.getElementById("box").style.backgroundColor = "blue";
});

var text = document.getElementById("Fade").addEventListener("click", function(){
   document.getElementById("box").style.opacity = "0.5";
});

var text = document.getElementById("Reset").addEventListener("click", function(){
    document.getElementById("box").style.height="150px"; 
    document.getElementById("box").style.width= "150px"; 
    document.getElementById("box").style.backgroundColor= "orange"; 
    document.getElementById("box").style.margin= "25px";
    document.getElementById("box").style.opacity = "1";

});
