let about = document.getElementById("about");
let skills = document.getElementById("skills");
let project = document.getElementById("project");
let experience = document.getElementById("experience");

about.addEventListener('click', function(event){
    event.preventDefault();
  document.getElementById("myAbout").scrollIntoView({behavior: "smooth"});
})
skills.addEventListener('click', function(event){
    event.preventDefault();
  document.getElementById("mySkills").scrollIntoView({behavior: "smooth"});
})
project.addEventListener('click', function(event){
    event.preventDefault();
  document.getElementById("myProject").scrollIntoView({behavior: "smooth"});
})
experience.addEventListener('click', function(event){
    event.preventDefault();
  document.getElementById("myExperience").scrollIntoView({behavior: "smooth"});
})