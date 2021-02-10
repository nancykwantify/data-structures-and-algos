let obj = {
    unSortedArr:[3,2,50,9,2,4,10,44,663,32,100],
    init:function(){
        //// DO NOT NEED TO EDIT ////
        let keys = Object.keys(this);
        let terminalArgs = process.argv.slice(2);
        let methodNames = keys.slice(keys.indexOf("init")+1);
        let commands = {};
        methodNames.forEach((methodName)=>{
            let capitalLetters = "";
            for(let i = 0; i < methodName.length; i++){
                let letter = methodName.charAt(i);
                if(letter === letter.toUpperCase()){
                    capitalLetters+=letter.toLowerCase();
                }
            }
            commands[methodName[0] + capitalLetters] = methodName;
        })
        let result;
        let methodToRun = commands[terminalArgs[0]];
        if(methodToRun){
            result = this[methodToRun](this.unSortedArr);
        } else {
            let methodCommandList = Object.entries(commands).map((method)=>`\n(${method[0]}) - ${method[1]}`);
            result = `Please provide an abbreviation as a terminal argument:` + methodCommandList;
        }
        console.log(result);
        //// DO NOT NEED TO EDIT ////
    },
    bubbleIterative:function(arr){
        for (let i = 0; i < arr.length; i++) { // Iterate through the array
            let didSwap = false; //  Create a boolean flag to determine if a swap happened
            for (let j = 0; j < arr.length-i; j++) { // Start an inside iteration
              if (arr[j] > arr[j + 1]) { // Check if the current value is greater than next value
                let temp = arr[j + 1]; // Swap values in array
                arr[j + 1] = arr[j];
                arr[j] = temp;
                didSwap = true; // Set swap variable to true
              }
            }
            if (!didSwap) { // If there's no swap, the arr is fully sorted and can exit there, we break.
              break;
            }
        }
        return arr;
    },
    insertionIterative:function(arr){
        for(let i = 0; i < arr.length; i++) { // Iterate through the array --Boundary
            let currentValue = arr[i]; // Set a variable to the current value of the iteration
            // Run only if j is greater than or equal to 0 and the value of index position j 
            // is greater than the current value of the iteration
            for(var j = i-1; j >= 0 && arr[j] > currentValue; j--){
                arr[j+1] = arr[j]; // Set the value of j+1 to the current value of index position j
            }
            arr[j+1] = currentValue; // Set the value of j+1 to the current value of the iteration
        }
        return arr;
    },
    selectionIterative:function(){

    },
    binaryInsertionIterative:function(){   

    }, 
    quickRecursive:function(){

    },
    mergeIterative:function(){

    }
}

require.main === module && obj.init();
module.exports = obj;