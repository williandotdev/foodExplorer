const knex = require("../database/knex");

class CategoryController{
    async create(request, response){
        const { name } = response.body;
        await knex("category").insert({name: name});
        return response.status(201).json("Categoria criada com sucesso!");
    }   
    async index(request, response){
        const { id } = request.body;
        const category_id = id;

        const category = await knex("category").where({ id: category_id, delete: false })

        return response.status(201).json(category);
    }
    async update(request, response){
        const {id, name} = request.body;
        const category_id = id;

        await knex("category").where({ id: category_id }).update({name: name})    
    
        return response.status(201).json("Categoria atualizado com Sucesso.");
    }
    async delete(request, response){
        const {id} = request.body;
        const category_id = id;

        await knex("category").where({ id: category_id }).update({delete: true})    
    
        return response.status(201).json("Categoria deletada com Sucesso.");
    }
}
module.exports = CategoryController;