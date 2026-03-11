const button = document.getElementById("toggleBtn");

let savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

button.addEventListener("click", function(){

    if(document.body.style.backgroundColor === "black"){

        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        localStorage.setItem("theme","light");

    } else {

        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

        localStorage.setItem("theme","dark");
    }

});