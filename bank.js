var cardholderError = document.getElementById('cardholder-error');
var cardnumberError = document.getElementById('cardnumber-error');
var expiryError = document.getElementById('expiry-error');
var cvcError = document.getElementById('cvc-error');
var confirmError = document.getElementById('confirm-error');

function validateHoldername(){
    var card = document.getElementById('confirm-holder').value;

    if(card.length==0){
        cardholderError.innerHTML="card's name is required"
        return false;
    }
    if(!card.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        cardholderError.innerHTML="write full name"
        return false;
    }
    cardholderError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true;
}

    function validateCardnum(){
        var num = document.getElementById('confirm-cardnum').value;
    
        if(num.length==0){
            cardnumberError.innerHTML="card's number is required"
             return false;
} 
         if(num.length!==16){
            cardnumberError.innerHTML="**incorrect number!"
            return false;
         }
         if(!num.match(/^[0-9]{16}$/)){
            cardnumberError.innerHTML="**digits only!"
            return false;
         }
         cardnumberError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
         return true;

}
    
function validateCvc(){
    var cvc = document.getElementById('confirm-cvc').value;

    if(cvc.length==0){
        cvcError.innerHTML="cvc is required"
         return false;
} 
     if(cvc.length!==3){
        cvcError.innerHTML="**cvc should be 3 digits!"
        return false;
     }
     if(!cvc.match(/^[0-9]{3}$/)){
        cvcError.innerHTML="**digits only!"
        return false;
     }
     
     cvcError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
     return true;
    }
    function validateForm(){
       if(!validateHoldername() || !validateCardnum() || !validateCvc()) {
        confirmError.style.display='block';
        confirmError.innerHTML="Please fix error to Confirm"
        setTimeout(function(){confirmError.style.display='none';}, 3000)
        return false;
       }
    }