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

    // discount part
    const discount = (0.2 * currentTotal).toFixed(2);
    const disId = document.getElementById('discount');
    disId.innerText = discount;

    // Total Part
    const totalId = document.getElementById('total');
    const total = currentTotal - discount;
    totalId.innerText = total;
}