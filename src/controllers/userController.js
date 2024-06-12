const { hash, compare } = require("bcryptjs"); 
const AppError = require("../utils/AppError"); 
const knex = require("../database/knex");

class UserController{

async create(request, response){
    const { name, email, password } = request.body;// Extrai os dados do corpo da solicitação.
    const hashedPassword = await hash(password, 8);
    const checkEmail = await knex("users").where({ email: email });


        await knex("users").insert({name: name, email: email, password: hashedPassword});
        return response.status(201).json();
    

}

async index(request, response){
    const { id } = request.body;// Extrai os dados do corpo da solicitação.
    const user_id = id;// Obtém o ID do usuário autenticado.


    const user = await knex("users").where({ id: user_id, delete: false })

    return response.status(201).json(user);
}

async update(request, response){
    const { name, email, password, old_password } = request.body;// Extrai os dados do corpo da solicitação.
    const user_id = request.user.id;// Obtém o ID do usuário autenticado.
    const user = await knex("users").where({ id: user_id }).first();
        
    if (!user) {
        throw new AppError("Usuário não encontrado");
    }
    
    const userWithUpdatedEmail = await knex("users").where({ email: email, delete: false }).first();

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user_id) {// Se o e-mail já está em uso por outro usuário, lança um erro.
        throw new AppError("Este e-mail já está em uso.");
    }

    await knex("users").where({ id: user_id }).update({name: name ?? user.name, email: email ?? user.email, password: password})
    
    
     // Se a nova senha for fornecida, mas a senha antiga não, lança um erro.
     if (password && !old_password) {
        throw new AppError("Você precisa informar a senha antiga para alterar.");
    }

    // Se ambas as senhas (nova e antiga) forem fornecidas, verifica e atualiza.
    if (password && old_password) {
        // Verifica se a senha antiga está correta.
        const checkOldPassword = await compare(old_password, user.password);
        if (!checkOldPassword) {
            throw new AppError("A senha antiga não confere!");
        }

        // Criptografa a nova senha e a atualiza no usuário.
        user.password = await hash(password, 8);
        await knex("users").where({ id: user_id }).update({password: password})
    }
    

    return response.status(201).json();
}

async delete(request, response){
    const { id } = request.body;// Extrai os dados do corpo da solicitação.
    const user_id = id;// Obtém o ID do usuário autenticado.


    await knex("users").where({ id: user_id }).update({delete: true})


    return response.status(201).json();
}
}

module.exports = UserController;