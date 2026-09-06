const button = document.getElementById("creatbutton")
button.addEventListener("click",()=>{
    let rows = Number(document.getElementById("rows").value);
    let columns = Number(document.getElementById("columns").value);
    let table = document.getElementById("dynamictable"); 
    table.innerHTML = "";
    let headerrow = document.createElement("tr")
    for (let x = 1 ; x<=columns ; x++){let th  = document.createElement("th");
        th.innerHTML="column "+ x;
        headerrow.appendChild(th);}
        table.appendChild(headerrow);
    for(let i = 1 ; i<=rows ; i++){
        let tr = document.createElement("tr");
        for (let j = 1 ; j<=columns ; j++){
            let td = document.createElement("td");
            td.innerHTML = i +","+j;
            tr.appendChild(td)
    }
    table.appendChild(tr)
}});