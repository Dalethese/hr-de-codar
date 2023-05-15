class Validator {
    constructor() {
        this.validations = [
            'data-min-length',
        ];        
    }
    // iniciar a validação de todos os campos
    validate(form) {

        // pegar os inputs
        let inputs = form.getElementsByTagName('input')

        // HTMLCollection -> array
        let inputsArray = [...inputs];

        inputsArray.forEach(input => {

            // loop em todas as validações existentes
            for(let i = 0; this.validations.length > 0; i++) {
                if (input.getAttribute(this.validations[i]) != null){
                    // limpando a string para virar um método
                    let method = this.validations[i].replace('data', '').replace('-', '')

                    // valor do input 
                    let value = input.getAttribute(this.validations[i])
                }
            }
        }, this)
    }

    // verifica se um input tem um número mínimo de caracteres
    minlength(){}
}

let form = document.getElementById('register-form');
let submit = document.getElementById('btn-submit');

let validator = new Validator();

// evento que dispara as validações

submit.addEventListener('click', e => {
    e.preventDefault();

    validator.validate(form);
})