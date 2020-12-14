const data = document.querySelector('#data');
const productError = document.querySelector('#product');
const priceError = document.querySelector('#price');
const msg = document.querySelector('#msg');

data.addEventListener('click', errorMsg);

//simple JS function to check that input field is not blank
function errorMsg(e){
    e.preventDefault();

    if(productError.value === '' || priceError.value === '')
    {
        msg.innerHTML = ('Please enter Product and Price');

        //set time out to 3 seconds for error message
        setTimeout(() => msg.remove(), 3000);
    }
}  