let id = document.getElementById("loader")

window.onload = () =>{
    setTimeout(function(){
        id.style.opacity = "0"
    }, 500);
    setTimeout(function(){
        id.style.display = "none"
    }, 200)

}

    