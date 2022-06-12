let addButton = document.querySelector(".add");
let modalContainer= document.querySelector(".modal-container")


// modalContainer.style.display = "none"

let addFlag =false;
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