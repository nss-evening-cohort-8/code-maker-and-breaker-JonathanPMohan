const startCodeButtonElem = document.getElementById('startCodeButton');
const endCodeButtonElem = document.getElementById('endCodeButton');

  // Function for Print To Dom //

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
}

    // Function for Word Input //

    const printSecretString = (word) => { 

        word = startWordInput.value;
        for (let i = 0; i < word.length; i++) {
            console.log(word.charCodeAt(i))
        let newString = ''   
            newString += `<div class="card w-15 m-4">
            <div class="secretString">
            <h5 class="card-title">${word.charCodeAt(i)}</h5>
            </div>`;
        printToDom(newString, 'secretString');
        }
       
    }
    // Event listener for Word Input button //
    
    startCodeButtonElem.addEventListener("click",(e) => {
        e.preventDefault();
        printSecretString();
    });

    // Function for Reverse Secret Code // 

const printReverseString = (toDo) => {
        let newString = `<div class="card w-15 m-4">
        <div class="card-body">
          <h5 class="card-title">${toDo}</h5>
      </div>`;
    
        printToDom(newString, 'reverseString');
}

    // Event listener For Reverse Secret Code //

    endCodeButtonElem.addEventListener("click",(e) => {
        e.preventDefault();
        printReverseString();
    });
