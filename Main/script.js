 var skillLink = document.getElementsByClassName("skill-link");
 var aboutSkill = document.getElementsByClassName("about-skill");
 
 function opentab(tabname){
    for(skillLinks of skillLink){
       skillLinks.classList.remove("active-link")
    }
    for( aboutSkills of aboutSkill){
        aboutSkills.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
 }