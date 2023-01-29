let header =document.querySelector(".header");
menu.onclick = ()=>{
    header.classList.toggle("active");
}

document.getElementById("mostrar").addEventListener("click", function(){
    document.getElementById("oculto").style.display = "block";
    
});

document.getElementById("expandir").addEventListener("click", function(){
    document.getElementById("ver-mas").style.display = "inline";
    
});

document.getElementById("contraer").addEventListener("click", function(){
    document.getElementById("ver-mas").style.display = "none";
    
});