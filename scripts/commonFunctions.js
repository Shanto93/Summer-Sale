// Element Adding to List Function 
function addingToList(id){
    const elementListId = document.getElementById('elementList');
    const p = document.createElement('p');
    const count = elementListId.childElementCount;
    p.innerHTML = `<b>${count+1}. ${id}</b>`;
    elementListId.appendChild(p);
}

// get Input from Input field
function getInputElement(id){
    const inputId = document.getElementById(id);
    const takaString = inputId.innerText;
    const actual = parseFloat(takaString);
    return actual;
}

// Calculating Total Price
function totalPrice(id)
{
    // Total Price Part
    const itemPrice = getInputElement(id);
    const prevTotalId = document.getElementById('tp');
    const prevTotal = getInputElement('tp');
    const currentTotal = itemPrice + prevTotal;
    prevTotalId.innerText = currentTotal;

    const applyButton = document.getElementById('apply-dis');
    if(currentTotal < 200)
    {
        applyButton.setAttribute('disabled', true);
    }else{
        applyButton.removeAttribute('disabled');
    }

    const makePurchase = document.getElementById('mpb');
    if(currentTotal <= 0)
    {
        makePurchase.setAttribute('disabled', true);
    }else{
        makePurchase.removeAttribute('disabled');
    }

}