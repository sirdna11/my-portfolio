const observer = new IntersectionObserver((enteries)=>{
    enteries.forEach((entery)=>{
        if(entery.isIntersecting){
            entery.target.classList.add('show')
        }else{
            entery.target.classList.remove('show')
        }
    })
})


const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el)=>observer.observe(el))

var modal = document.getElementById('myModal');
var btns = document.querySelectorAll('.modern-btn');
var span = document.getElementsByClassName('close')[0];

btns.forEach(btn => {
  btn.onclick = function() {
  
    modal.style.display = "block";
  }
});

span.onclick = function() {
 
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    document.body.classList.remove('blur');
    modal.style.display = "none";
  }
}
