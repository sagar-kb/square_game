let s1 =document.getElementById("sq1")
let s2 =document.getElementById("sq2")
s1.addEventListener("mouseenter",function(){
     s1.style.background = "red";
    let r= Math.floor(Math.random()*100);
    s1.innerHTML= `<h1>${r}</h>`;

})


s1.addEventListener("mouseleave", function(){

    s1.innerHTML=`<h1>1</h1>`;
    s1.style.background="white"
})


////for second box

clr="green "
s2.addEventListener("mouseenter",function(){
    if(clr=="green"){
        s2.style.background="green";
        clr="red";
    }
    else{
        s2.style.background="red";
        clr="green";
    }
   


})
s2.addEventListener("mouseleave", function(){
s2.style.background="white"

})



///for third box
let s3 =document.getElementById("sq3")
s3.addEventListener("mouseenter",function(){
     
    let r1= Math.floor(Math.random()*256);
    let r2= Math.floor(Math.random()*256);
    let r3= Math.floor(Math.random()*256);
    s3.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
 

})


s3.addEventListener("mouseleave", function(){

  
    s3.style.background="white"
})


///for fourth box
s4 =document.getElementById("sq4")
s4.addEventListener("click",function(){
    let r1= Math.floor(Math.random()*256);
    let r2= Math.floor(Math.random()*256);
    let r3= Math.floor(Math.random()*256);
    s1.style.backgroundColor=`rgb(${r1},256,256)`;
    s2.style.backgroundColor=`rgb(256,${r2},256)`;
    s3.style.backgroundColor=`rgb(256,256,${r3})`;

   


})


s4.addEventListener("mouseleave", function(){
    s1.style.background="white"
    s2.style.background="white"
    s3.style.background="white"   
 
  
   
})