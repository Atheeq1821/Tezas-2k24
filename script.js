let welcome = document.getElementById("welcome")
let rmk= document.getElementById("rmk")
let org = document.getElementById("org")
let tezas = document.getElementById("tezas")
let robot = document.getElementById("robot")
let leftd= document.getElementById("leftd")
let leftd2= document.getElementById("leftd2")
window.addEventListener('scroll',() =>{
    let value = window.scrollY;
    let marginTopValue = value * 2.5;
    if (marginTopValue < 1000) { // Adjust the limit as needed
        tezas.style.marginTop = marginTopValue + 'px';
        rmk.style.marginTop= value * -1.5 +'px';
    }
    leftd.style.marginTop= value * -1.5 +'px';
    leftd.style.left= value * 1.5 +'px';
    robot.style.left= value * -1.5 +'px';
    leftd2.style.marginTop= value * -1.5 +'px';
})



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
      console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add('show')
      }else{
        entry.target.classList.remove('show')
      }
    })
  })
  const hiddenElements = document.querySelectorAll('.hidden')
  hiddenElements.forEach((el) => observer.observe(el))



  document.addEventListener("DOMContentLoaded", function() {

    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 2000); 
});
