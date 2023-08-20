function firstCard() {
    addingToList('K. Accessories');
    totalPrice('card-01-tk');   
}

function secondCard(){
    addingToList('K. Accessories');
    totalPrice('card-02-tk');
}

function thirdCard(){
    addingToList('Home Cooker');
    totalPrice('card-03-tk');
}

function fourthCard(){
    addingToList('Sports Back Cap');
    totalPrice('card-04-tk');  
}

function fifthCard(){
    addingToList('Full Jersey Set');
    totalPrice('card-05-tk');
}

function sixthCard(){
    addingToList('Sports cates');
    totalPrice('card-06-tk');    
}

document.getElementById('inputText').addEventListener('keyup', function(event){
    const text = event.target.value;
    console.log(text);
   
    if(text === "SELL200")
    {
        document.getElementById('apply-dis').addEventListener('click', function(){
            const prevTotal = getInputElement('tp');

            // Calculating Discount
            const discount = (0.2 * prevTotal).toFixed(2);
            const disId = document.getElementById('discount');
            disId.innerText = discount;

            // Calculating Total
            const totalId = document.getElementById('total');
            const total = prevTotal - discount;
            totalId.innerText = total;
        })
    }else{
        const disId = document.getElementById('discount');
            disId.innerText = 0;
    }
})


// Go Home Button Work
function goHome(){
    window.location.href="index.html";
}

