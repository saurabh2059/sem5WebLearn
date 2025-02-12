const root = document.getElementById('root');
const taskContainer =  document.getElementById('taskContainer')


function formhandler(e){
  
   e.preventDefault();
   
    let task = document.querySelector('#task')
  
    let task_description = task.value

    task.value=""

        let li = document.createElement('li')

        li.innerHTML = 
        `
         <p> ${task_description} </p> 
            <div>
             <span class="btn" id="edit">&#128221;</span>
             <span class="btn" id="complete">&#10008;</span>
             <span class="btn" id="save">&#9989;</span> 
            </div>
            
            `;


    taskContainer.appendChild(li)

}

// setInterval(()=>{

//    const complete = document.getElementById('complete');
//    const li = complete.parentElement
// //    console.log(li)

//    complete.addEventListener('click',()=>{
//     li.remove()
//    })
// },1000)

document.body.addEventListener('click',(e)=>{
     let id = e.target.id

     if(id == 'edit')
        {

        const edit = document.getElementById(id);
        const li = e.target.closest('li')
        li.childNodes[1].focus() 
        li.childNodes[1].setAttribute('contenteditable',true)
      
        }
     else if(id == 'complete')
        {

        const complete = document.getElementById(id);
        const li = e.target.closest('li')
        li.remove()

        }
     else if(id == 'save')
        {

        li.childNodes[1].setAttribute('contenteditable',false)

        }

})

