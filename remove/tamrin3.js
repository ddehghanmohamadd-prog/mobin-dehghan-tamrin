function removeduplicates(array){
    let result = [];
    for (const item of array){
        if(!result.includes(item)){result.push(item)}
        }
        return result
}
console.log(removeduplicates([1,2,3,4,5,4,2,1]));
