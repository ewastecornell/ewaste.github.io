var visbutton = document.querySelector("#vis");
var vistarget = document.querySelector("#vistarget");
console.log(vistarget)
var show = () => {
    if(document.querySelector("#vistarget").className == "hide"){
    document.getElementById("vistarget").className= "show";}
 else
    document.getElementById("vistarget").className = "hide";
 };
