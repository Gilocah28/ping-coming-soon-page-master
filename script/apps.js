const input = document.getElementById('input')
const btnSubmit = document.querySelector('.submit')
const errorState = document.querySelector('.errorState')

btnSubmit.addEventListener('click', ()=>{
    if(ValidateEmail(input.value)){
        input.value = ''
        errorState.classList.remove('active');
        input.classList.remove('error')
        input.style.border = '1px solid hsl(223, 100%, 88%)';
        alert('Successful Login')
    }else{
        errorState.classList.add('active');
        input.classList.add('error')
        input.style.border = '1px solid hsl(354, 100%, 66%)'
        input.value = 'example@email.com'
    }
})

input.addEventListener('click',() => {
    input.value = ''
    errorState.classList.remove('active');
    input.classList.remove('error')
    input.style.border = '1px solid hsl(223, 100%, 88%)'
})


function ValidateEmail(inputText) {
    var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return mailformat.test(inputText);
}