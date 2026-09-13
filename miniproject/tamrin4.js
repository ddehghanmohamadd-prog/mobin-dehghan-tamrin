async function gettodo() {
const response = await fetch("https://jsonplaceholder.typicode.com/todos");
const todos =await response.json();    
const completedtodos = todos.filter(todo => todo.completed);
function createprefix(prefix) {
return function(todo) {
    return prefix + todo.title;
}    
}
const formatter = createprefix("✅  ");
const result = completedtodos.map(formatter);
console.log(result);
}
gettodo()