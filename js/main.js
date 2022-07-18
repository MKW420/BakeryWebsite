
//tranversing the dom

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//    btn.addEventListener('click',function(e){
//      const question = e.currentTarget.parentElement.parentElement
//      question.classList.toggle('show-text');
//    })
// })

//using selectors inside the element
 const questions = document.querySelectorAll('.question');
const section = document.getElementById('ctnr');

questions.forEach(function (question){
    //console.log(orange)
    const btn = question.querySelector('.question-btn');
   // console.log(btn);
   btn.addEventListener('click', function(){
    section.addEventListener('click', function(e){
        section.style.height = "250px";
       
         
    })
    questions.forEach(function(item){
           //console.log(item)
           
           if(item !== question){
            item.classList.remove('show-text')
           }
    })
 
    question.classList.toggle('show-text')

   })
})

 

//classList -  shows/gets all classess
//contains - checks classList fro specfic class
//add - add class
//remove- remove class
//toggle - toggle class




const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const menuItems = document.querySelector('.items');
const btn = document.querySelector('.btn');

navToggle.addEventListener('click', function(){
   // console.log(links.classList);
  // console.log(links.classList.contains('random'));
  // console.log(links.classList.contains('links'));
  if (links.classList.contains('show-links')){
    links.classList.remove('show-links');
    btn.classList.display = "block"
  }
  else{
    links.classList.add('show-links');
    btn.classList.display = "none"
  }
  //links.classList.toggle('show-links');
  

})

// function sample(){
  
//    var mapOptions = {
//     center:new google.maps.LatLng(52.3, -0.14),
//     zoom:10,
//     mapTypeId: google.maps.mapTypeId.HYBRID
//    }
//   var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
    
// }