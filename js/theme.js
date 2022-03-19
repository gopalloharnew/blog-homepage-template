const themeWraper = document.querySelector(".theme-wraper");
const themeButton = document.querySelector(".theme-button");
const currentThemeBox = document.querySelector(".current-theme");
const themeOptions = document.querySelectorAll(".theme-option");
const html = document.querySelector("html");
let darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

const setThemeMq = (e)=>{
    if(e.matches){
        html.dataset.theme = "Dark";
    }else{
        html.dataset.theme = "Light";
    }
}

const setTheme = (themeName) => {
    currentThemeBox.innerHTML = themeName;
    localStorage.setItem("theme", themeName);
    themeOptions.forEach(themeOption => {
        if(themeOption.innerHTML == themeName){
            themeOption.dataset.currentTheme = "";
        }else{
            delete themeOption.dataset.currentTheme;
        }
    })
    switch (themeName) {
        case "Device":
            darkThemeMq.addEventListener("change", setThemeMq)
            setThemeMq(darkThemeMq);
            break;
        case "Dark":
            darkThemeMq.removeEventListener("change", setThemeMq)
            html.dataset.theme = "Dark";
            break;
        case "Light":
            darkThemeMq.removeEventListener("change", setThemeMq)
            html.dataset.theme = "Light";
            break;
    }
}

if(!localStorage.getItem("theme")){
    localStorage.setItem("theme", "Device");
}
setTheme(localStorage.getItem("theme"));



themeOptions.forEach(themeOption => {
    themeOption.addEventListener("click", ()=>{
        setTheme(themeOption.innerHTML)
    })
})



themeButton.addEventListener("click", ()=>{
    themeWraper.classList.toggle("theme-open")
});

window.addEventListener("click", (e)=>{
    if(themeWraper.contains(e.target)) return;
    themeWraper.classList.remove("theme-open")
})