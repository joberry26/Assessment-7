function uniqueChar (word) {
    let wordArr = word.split('');
    
    for (let i = 0; i < wordArr.length; i++) {
      console.log(wordArr[i])
        for (let j = i + 1; j < wordArr.length; j++){
         console.log(wordArr[j])
          if (wordArr[i] === wordArr[j]) {
              return false;
              console.log(hit)
          } 
        }
    } 
        return true;
}

// console.time('uniqueChar')
uniqueChar('word')
// console.timeEnd('uniqueChar')

//RUNTIME = 5.5ms

