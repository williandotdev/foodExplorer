const { compare } = require('bcryptjs');
const knex = require("../database/knex");

class SessionsController{
    async create(request, response) {
        const {email, password} = request.body;

        const user = await knex('users').where({email: email});

        if(!user){
            return response.status(401).json("Email e/ou senha incorreta!")
        }
        console.log(user)
        console.log(user.password)


        
        const confirmPassword = await compare(password, user.password);

        if(!confirmPassword){
            return response.status(401).json("Email e/ou senha incorreta!")
        }

        // Extrai as configurações do JWT (segredo e tempo de expiração).
        const { secret, expiresIn } = authConfig.jwt;
        // Gera um token JWT para o usuário autenticado.
        const token = sign({}, secret, {
            subject: String(user.id), // Define o ID do usuário como sujeito do token.
            expiresIn // Define o tempo de expiração do token.
        });

        return response.json({ user, token });
    }
}

module.exports = SessionsController;