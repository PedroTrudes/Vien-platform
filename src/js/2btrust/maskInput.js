const idNumberMask = document.querySelector('#socialSecurityValidation');

idNumberMask.addEventListener('keypress', () =>{
    let idNumberLength = idNumberMask.value.length

    if(idNumberLength === 3 || idNumberLength === 6){
        idNumberMask.value += '-'
    }
})