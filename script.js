let addButton = document.querySelector(".add");
let modalContainer= document.querySelector(".modal-container")
let mainContainer = document.querySelector('.main-cont')
let taskArea = document.querySelector('.textArea-container')
let removeButton = document.querySelector('.remove')

let colors = ['lightpink' , 'lightgreen', 'lightblue', 'black']
let allPriorityColor = document.querySelectorAll('.priority-color')
let modalPriorityColor = colors[colors.length-1]

// modalContainer.style.display = "none"

let addFlag =false;
let removeFlag = false;

let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";

addButton.addEventListener('click', function(){
    // console.log('button is clicked');

    //display modal container on click of Add button

    addFlag =! addFlag;

    if(addFlag ==true){
        modalContainer.style.display = "flex"
    }
    else{
        modalContainer.style.display = "none"
    }
})

//Select the priority color of the task

allPriorityColor.forEach(function(colorElement){
    colorElement.addEventListener('click', function(e){
        allPriorityColor.forEach(function(priorityColorElement){
            priorityColorElement.classList.remove('active')
        })
        colorElement.classList.add('active')

        modalPriorityColor = colorElement.classList[0] //lightpink
    })
})


modalContainer.addEventListener("keydown", function(e){
    let key= e.key

    if(key=='Shift'){
        createTicket(taskArea.value , modalPriorityColor)
        modalContainer.style.display = 'none'
        addFlag=false
        taskArea.value=''
    }
})


function createTicket(ticketTask ,ticketColor){
    // let id = shortid()
    let tickerContainer = document.createElement('div')
    tickerContainer.setAttribute('class','ticket-cont')

    tickerContainer.innerHTML = `
    <div class="ticket-color ${ticketColor}"></div>
            <div class="ticket-id">id1</div>
            <div class="task-area">${ticketTask}</div>
            <div class="ticket-lock">
                <i class="fa-solid fa-lock"></i>
            </div>`

    mainContainer.append(tickerContainer)
    handleRemoval(tickerContainer);
    handleLock(tickerContainer)

}



removeButton.addEventListener('click' ,function(){
    removeFlag= !removeFlag

    if(removeFlag == true){
        removeButton.style.color = 'red'
    }else{
        removeButton.style.color = 'white';
    }
})


function handleRemoval(ticket){
    ticket.addEventListener('click',function(){
        if(!removeFlag) return;
        ticket.remove(); //ui Remove
    })
}

function handleLock(ticket){
    let ticketLockElement = ticket.querySelector('.ticket-lock')
    let ticketLockIcon = ticketLockElement.children[0]
    let ticketTaskArea = ticket.querySelector('.task-area')

    ticketLockIcon.addEventListener('click', function(){
        if(ticketLockIcon.classList.contains(lockClass)){
            ticketLockIcon.classList.remove(lockClass)
            ticketLockIcon.classList.add(unlockClass)
            ticketTaskArea.setAttribute('contenteditable', true)
        }else{
            ticketLockIcon.classList.remove(unlockClass)
            ticketLockIcon.classList.add(lockClass)
            ticketTaskArea.setAttribute('contenteditable', false)
        }
    })
}