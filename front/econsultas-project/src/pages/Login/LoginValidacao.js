function Validacao(values) {

    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const senha_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if (values.email === "") {
        error.email = "O email não deve estar vazio"
        
    } else if (!email_pattern.test(values.email)) {
        error.email = "Email não corresponde"
    }else{
        error.email= ""
    }


    if (values.senha === "") {
        error.senha = "A senha não deve estar vazio"
        
    } else if (!senha_pattern.test(values.senha)) {
        error.email = "Senha não corresponde"
    }else{
        error.email= ""
    }
    return error
}

export default Validacao;