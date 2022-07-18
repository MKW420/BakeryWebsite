
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


