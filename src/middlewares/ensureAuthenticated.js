const { verify } = require('jsonwebtoken');
const authConfig = require('../configs/auth');

function ensureAuthenticated(request, response, next){
    const autHeader = request.headers.authorization;
 

    if(!autHeader){
        return response.status(404).json("JwtToken Não encontrado");
    }

    const [, token] = autHeader.split(" ");

    try{
       const {sub: user_id} = verify(token, authConfig.jwt.secret);

       request.user = {
        id: Number(user_id),
       };
       return next();
    }catch{
        return response.status(404).json("JwtToken Inválido", 404);
    }
}

module.exports = ensureAuthenticated;