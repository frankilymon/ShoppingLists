//Add data to table.
function addData(){
    //Getting values
let btnAdd = document.querySelector("button");
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
                <td></td>
                <td>${product}</td>
                <td>${'$ ' + price}</td>
                <td><input type="checkbox" id="check"></td>
            </tr>
            `;
                    
    table.innerHTML += template;
 
    productInput.value = '';
    priceInput.value = '';
    total();
    }

})
}

/*add indexing
function addIndex(){
    var tableLength = document.getElementById("table").rows.length;
    return tableLength;
}*/

