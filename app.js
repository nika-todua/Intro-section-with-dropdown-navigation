document.addEventListener("DOMContentLoaded", function () {

    let features = document.querySelector(".features-dropdown");
    let featuresIMG = document.querySelector(".features-dropdown img");
    let featureDropdoownmenu = document.querySelector(".featureDropdoownmenu");
    let featuresCount = 0

    features.addEventListener("click", function () {
        featuresCount++
        
        if (companyDropdoownmenu.className === "font companyDropdoownmenu active") {
            companyDropdoownmenu.classList.remove("active");
            company.classList.remove("features-dropdown-active");
            companyIMG.src = 'images/icon-arrow-down.svg';
            companyCount = 0
        }
        
        if (featuresCount % 2 == 1) {
            features.classList.add("features-dropdown-active");
            featuresIMG.src = 'images/icon-arrow-up.svg';
            featureDropdoownmenu.classList.add("active");
        }else{
            features.classList.remove("features-dropdown-active");
            featuresIMG.src = 'images/icon-arrow-down.svg';
            featureDropdoownmenu.classList.remove("active");
        }
    })


    let company = document.querySelector(".company-dropdown");
    let companyIMG = document.querySelector(".company-dropdown img");
    let companyDropdoownmenu = document.querySelector(".companyDropdoownmenu");
    let companyCount = 0

    company.addEventListener("click", function () {
        companyCount++
        
        if(featureDropdoownmenu.className === "font featureDropdoownmenu active"){
            features.classList.remove("features-dropdown-active");
            featuresIMG.src = 'images/icon-arrow-down.svg';
            featureDropdoownmenu.classList.remove("active");
            featuresCount = 0
        }
        
        if (companyCount % 2 == 1) {
            company.classList.add("features-dropdown-active");
            companyIMG.src = 'images/icon-arrow-up.svg';
            companyDropdoownmenu.classList.add("active");
        }else{
            company.classList.remove("features-dropdown-active");
            companyIMG.src = 'images/icon-arrow-down.svg';
            companyDropdoownmenu.classList.remove("active");
        }
    })

    // mob events

    let mobfeatures = document.querySelector(".mob-features-dropdown");
    let mobfeaturesIMG = document.querySelector(".mob-features-dropdown img");
    let mobfeatureDropdoownmenu = document.querySelector(".mob-featureDropdoownmenu");
    let mobfeaturesCount = 0

    let mobcompany = document.querySelector(".mob-company-dropdown");
    let mobcompanyIMG = document.querySelector(".mob-company-dropdown img");
    let mobcompanyDropdoownmenu = document.querySelector(".mon-companyDropdoownmenu");
    let mobcompanyCount = 0
    
    
    mobfeatures.addEventListener("click", function () {
        mobfeaturesCount++

        if(mobcompanyDropdoownmenu.className === "font mon-companyDropdoownmenu active"){
            mobcompany.classList.remove("features-dropdown-active");
            mobcompanyIMG.src = 'images/icon-arrow-down.svg';
            mobcompanyDropdoownmenu.classList.remove("active");
            mobcompanyCount = 0
        }
        
        if (mobfeaturesCount % 2 == 1) {
            mobfeatures.classList.add("features-dropdown-active");
            mobfeaturesIMG.src = 'images/icon-arrow-up.svg';
            mobfeatureDropdoownmenu.classList.add("active");
        }else{
            mobfeatures.classList.remove("features-dropdown-active");
            mobfeaturesIMG.src = 'images/icon-arrow-down.svg';
            mobfeatureDropdoownmenu.classList.remove("active");
        }
    })

    mobcompany.addEventListener("click", function () {
        mobcompanyCount++
        
       
        if(mobfeatureDropdoownmenu.className === "font mob-featureDropdoownmenu active"){
            mobfeatures.classList.remove("features-dropdown-active");
            mobfeaturesIMG.src = 'images/icon-arrow-down.svg';
            mobfeatureDropdoownmenu.classList.remove("active");
            mobfeaturesCount = 0
        }
        
        if (mobcompanyCount % 2 == 1) {
            mobcompany.classList.add("features-dropdown-active");
            mobcompanyIMG.src = 'images/icon-arrow-up.svg';
            mobcompanyDropdoownmenu.classList.add("active");
        }else{
            mobcompany.classList.remove("features-dropdown-active");
            mobcompanyIMG.src = 'images/icon-arrow-down.svg';
            mobcompanyDropdoownmenu.classList.remove("active");
        }
    })
    

    // navigation menu toggle event

    let toggle = document.querySelector(".toggle")
    let removetoggle = document.querySelector(".togglenav")


    toggle.addEventListener("click", function () {
        let nav = document.querySelector(".mob_navigation");
        let blur = document.querySelector(".navblur");
        nav.classList.add("nav-active");
        blur.classList.add("active-blur");
    })
    removetoggle.addEventListener("click", function () {
        let nav = document.querySelector(".mob_navigation");
        let blur = document.querySelector(".navblur");
        nav.classList.remove("nav-active");
        blur.classList.remove("active-blur");
    })
    
    
})
