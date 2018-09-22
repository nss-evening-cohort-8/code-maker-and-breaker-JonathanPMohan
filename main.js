const startCodeButtonElem = document.getElementById('startCodeButton');
const endCodeButtonElem = document.getElementById('endCodeButton');

var secret = ['a', 'b','c']

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
    }

    const printSecretString = (toDo) => {
        let newString = `<div class="card w-15 m-4">
        <div class="secretString">
          <h5 class="card-title">${toDo}</h5>
        </div>`;
        console.log(startWordInput.value)
        printToDom(newString, 'secretString');
       
    }

    startCodeButtonElem.addEventListener("click",(e) =>{
        e.preventDefault();
        printSecretString();
    });

const printReverseString = (toDo) => {
        let newString = `<div class="card w-15 m-4">
        <div class="card-body">
          <h5 class="card-title">${toDo}</h5>
      </div>`;
    
        printToDom(newString, 'reverseString');
    }

    endCodeButtonElem.addEventListener("click",(e) =>{
        e.preventDefault();
        printReverseString();
    });
