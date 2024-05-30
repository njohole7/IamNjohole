console.log("first");

const goToTopBtn=document.getElementById("topbotton");

console.log(goToTopBtn);

window.onscroll=()=>{
    scrollFunction();
};
function scrollFunction(){
    if(document.body.scrollTop >300 || 
        document.documentElement.scrollTop >200){
        goToTopBtn.style.display="block";
    }
    else{
        goToTopBtn.style.display="none";
    }
}
goToTopBtn.onclick=()=>{
    goToTopBtn.style.display="none";
    window.scroll({
        top:0,
        behavior:"smooth",

    });
}