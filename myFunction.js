function uniqueChar (word) {
    word.split('');
    for (let i = 0; i < word.length; i++) {
        if (word.indexOf(word[i]) === word.lastIndexOf(word[i]) ) {
        console.log('true')
        } else {
            console.log('false')
            return  false;
        }
    }
}

console.time('uniqueChar')
uniqueChar('worrd')
console.timeEnd('uniqueChar')

//RUNTIME = 5.5ms

