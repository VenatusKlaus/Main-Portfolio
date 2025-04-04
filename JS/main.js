let about = document.getElementById("about");
let skills = document.getElementById("skills");
let project = document.getElementById("project");
let experience = document.getElementById("experience");
let openBar = document.getElementById("openbar")
let closeBar = document.getElementById("closebar")

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

openBar.addEventListener('click', function(){
  document.getElementById('sidenav').style.display = 'block';
})
closeBar.addEventListener('click', function(){
  document.getElementById('sidenav').style.display = 'none';
})