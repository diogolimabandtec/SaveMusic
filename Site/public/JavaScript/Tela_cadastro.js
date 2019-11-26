function cadastrar(){
    if (id_nome.value == "diogo"){alert(`nome de usuário já está em uso`);}
    if (id_nome.value == ""){alert(`Informe seu nome`);}
    if (id_email.value == ""){alert(`Informe seu Email`);}
    if (id_senha == "" && id_conf_senha == ""){alert(`Informe os dois campos da senha`);}
    if (id_senha != id_conf_senha){alert(`a senha não confirma`);}
    if (estilo.value == 0){alert(`Informe seu estilo de musica`);}
}