function togglefeatureMenu(){
 navdisplay = document.getElementById("features-menu").style.display;
 arrowup = document.getElementById("arrow-up").style.opacity;
 arrowdown = document.getElementById("arrow-down").style.opacity;
 darkenWord = document.getElementById("feature-dropdown").style.color= "hsl(0, 0%, 41%)";

 if(navdisplay == "none"){
    return revealfeaturesMenu();
 }
 return hidefeaturesMenu();
}

function revealfeaturesMenu(){
    document.getElementById("features-menu").style.display = "block";
    document.getElementById("arrow-up").style.opacity="1";
    document.getElementById("arrow-down").style.opacity="0";
    document.getElementById("feature-dropdown").style.color = "black";
}
function hidefeaturesMenu(){
    document.getElementById("features-menu").style.display = "none";
    document.getElementById("arrow-up").style.opacity="0";
    document.getElementById("arrow-down").style.opacity="1";
    document.getElementById("feature-dropdown").style.color = "black";
}
function toggleCompanyMenu(){
    navdisplay = document.getElementById("company-detail").style.display;
    arrowup = document.getElementById("arrow-up2").style.opacity;
    arrowdown = document.getElementById("arrow-down2").style.opacity;
    darkenWord = document.getElementById("company-dropdown").style.color;
   
    if(navdisplay == "none"){
       return revealCompanyMenu();
    }
    return hideCompanyMenu();
   }
   
   function revealCompanyMenu(){
       document.getElementById("company-detail").style.display = "block";
       document.getElementById("arrow-up2").style.opacity="1";
       document.getElementById("arrow-down2").style.opacity="0";
       document.getElementById("company-dropdown").style.color = "black";
   }
   function hideCompanyMenu(){
       document.getElementById("company-detail").style.display = "none";
       document.getElementById("arrow-up2").style.opacity="0";
       document.getElementById("arrow-down2").style.opacity="1";
       document.getElementById("company-dropdown").style.color = "black";
   }
