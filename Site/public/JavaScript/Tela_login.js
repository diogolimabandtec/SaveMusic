function logar(){
    if(id_nome.value == 'diogo' && id_senha.value == '1234'){
        alert(`Ok pode passar`);
    }
    else{
        bootbox.alert(`Nome ou senha errada!`);
    }
}