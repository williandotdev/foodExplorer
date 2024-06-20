const knex = require("../database/knex");

class IngredientsController{
    async create(request, response){
        const { name } = request.body;
        await knex("ingredients").insert({name: name});

        return response.status(201).json("Ingediente criada com sucesso!");
    }
    async index(request, response){
        const { id } = request.body;
        const ingredient_id = id;

        const ingredient = await knex("ingredients").where({ id: ingredient_id, delete: false })

        return response.status(201).json(ingredient);
    }
    async update(request, response){
        const {id, name} = request.body;
        const ingredient_id = id;

        await knex("ingredients").where({ id: ingredient_id }).update({name: name})    
    
        return response.status(201).json("Ingrediente atualizado com Sucesso.");
    }
    async delete(request, response){
        const {id} = request.body;
        const ingredient_id = id;

        await knex("ingredients").where({ id: ingredient_id }).update({delete: true})    
    
        return response.status(201).json("Ingrediente atualizado com Sucesso.");
    }
}

module.exports = IngredientsController;