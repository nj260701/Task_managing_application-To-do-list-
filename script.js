let addButton = document.querySelector(".add");
let modalContainer= document.querySelector(".modal-container")
let mainContainer = document.querySelector('.main-cont')
let taskArea = document.querySelector('.textArea-container')
let removeButton = document.querySelector('.remove')

// modalContainer.style.display = "none"

let addFlag =false;
let removeFlag = false;

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

modalContainer.addEventListener("keydown", function(e){
    let key= e.key

    if(key=='Shift'){
        createTicket(taskArea.value)
        modalContainer.style.display = 'none'
        addFlag=false
        taskArea.value=''
    }
})


function createTicket(ticketTask){
    // let id = shortid()
    let tickerContainer = document.createElement('div')
    tickerContainer.setAttribute('class','ticket-cont')

    tickerContainer.innerHTML = `
    <div class="ticket-color"></div>
            <div class="ticket-id">id1</div>
            <div class="task-area">${ticketTask}</div>
            <div class="ticket-lock">
                <i class="fa-solid fa-lock"></i>
            </div>`

    mainContainer.append(tickerContainer)
    handleRemoval(tickerContainer);

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

