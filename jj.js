const usuarios = []
function adicionarUsuario(nome, idade, email){
    if (!nome || !idade || !email) {
        console.log("Todos os campos devem ser preenchidos.");
    }
    if (idade <= 0) {
        console.log("A idade deve ser maior que 0.");
    }

    
    const usuario = { nome, idade, email };

   
    usuarios.push(usuario);
}

function listarUsuarios(){
    console.log("Usuários Cadastrados com sucesso:")
    usuarios.forEach(({ nome, idade, email }) => {
        console.log("Nome:", nome, "Idade:", idade, "Email:", email)
    })
}


adicionarUsuario("João",30,"joao@email.com");
adicionarUsuario("Maria", 25, "maria@email.com");
listarUsuarios();

 