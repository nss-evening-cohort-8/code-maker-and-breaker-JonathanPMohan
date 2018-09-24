const startCodeButtonElem = document.getElementById('startCodeButton');
const endCodeButtonElem = document.getElementById('endCodeButton');

  // Function for Print To Dom //

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
}

    // Function for Word Input //

    const printSecretString = (word) => { 
        let codedArray = [];
        // let newString = ''  
        //     newString += `<div class="card w-15 m-4">
        //         <div class="secretString">
        //     <h5 class="card-title">${word.charCodeAt(i)}</h5>
        //     </div>`;

        word = startWordInput.value;

        for (let i = 0; i < word.length; i++) {
            codedArray.push(word.charCodeAt(i))
        
        }

        let codeString = ''

        for (let i = 0; i < codedArray.length; i++) {
            codeString += `${codedArray[i]}, `    
        }
        
        printToDom(codeString, 'secretString');
       
       
    }
    // Event listener for Word Input button //
    
    startCodeButtonElem.addEventListener("click",(e) => {
        e.preventDefault();
        printSecretString();
    });

    // Function for Reverse Secret Code // 

    const printCodedString = (word) => { 
        let codedArray = [];
        // let newString = ''  
        //     newString += `<div class="card w-15 m-4">
        //         <div class="secretString">
        //     <h5 class="card-title">${word.charCodeAt(i)}</h5>
        //     </div>`;

        word = secretNumberInput.value;
        console.log(word);

        for (let i = 0; i < word.length; i++) {
            codedArray.push(String.fromCharCode(i))
        
        }

        let codeString = ''

        for (let i = 0; i < codedArray.length; i++) {
            codeString += `${codedArray[i]}`    
        }
        
        printToDom(codeString, 'reverseString');
    }

    // Event listener For Reverse Secret Code //

    endCodeButtonElem.addEventListener("click",(e) => {
        e.preventDefault();
        printCodedString();
       
    });
