function findduplicates (text){
    let words = text.split(" ");
    let count = {};
    let duplicates = [];
    for (let word of words){
        if (count[word]){count[word]++}
        else {count[word]=1}
    }
    for(let word in count){if(count[word]>1){duplicates.push(word);}}
return duplicates};
console.log(findduplicates("The weather today is very nice and the weather makes everyone happy because the nice weather is perfect"));
