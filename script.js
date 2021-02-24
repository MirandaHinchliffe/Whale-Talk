let input = "whale talk";
const vowels = ['a', 'e', 'i', ' o', 'u'];
let resultsArray = [];
    for(let i = 0; i < input.length; i++) {
        for(let j = 0; j < vowels.length; j++) {
            if (input[i] === vowels[j]){
                if(input[i] === 'e' || input[i] === 'u'){
                    resultsArray.push(input[i] + input[j]);
                }else{
                    resultsArray.push(input[i]);
                }
            }
        }
    }
    console.log(resultsArray.join('').toUpperCase());