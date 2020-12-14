//Add data to table.
function addData(){
    //Getting values
let btnAdd = document.getElementById("add");
let table = document.querySelector("table");

    
//selecting elements
let productInput = document.querySelector("#product");
let priceInput = document.querySelector("#price");

btnAdd.addEventListener("click", () => {
    let product = productInput.value
    let price = priceInput.value
                //creating a template
    if(product === '' || price === '')
    {
        console.log();
    }
    else{
        let template = `
            <tr>
                <td>${addIndex()}</td>
                <td>${product}</td>
                <td>${'$ ' + price}</td>
                <td><input type="checkbox" id="check"></td>
            </tr>
            `;
                    
    table.innerHTML += template;
 
    productInput.value = '';
    priceInput.value = '';
    }

})
}

//add indexing
function addIndex(){
    var tableLength = document.getElementById("table").rows.length;
    return tableLength;
}

//delete row
function deleteRow(){

let btnDel = document.getElementById("delete");

btnDel.addEventListener("click", () => {
    var items = document.getElementById("table").rows.length
    var table = document.getElementById("table");
    var check = document.getElementById("check")
    console.log(items);
    for(var i=1; i<items; i++)  {
        if(check.checked == true) {
            table.deleteRow(i);}
        }
        })
}

