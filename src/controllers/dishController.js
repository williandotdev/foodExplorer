const knex = require("../database/knex");
class DishController{
    async create(request, response){
        const { name, price, category_id } = request.body;
        const checkDish = await knex("dish").where({ name: name });
        if(checkDish){
            return response.status(400).json("Já existe um prato com este nome")
        }

        await knex("users").insert({name: name, price: price, category_id: category_id});
        return response.status(201).json("Prato criado com sucesso!");
    }
    async index(request, response){
        const { id } = request.body;
        const dish_id = id;

        const dish = await knex("dish").where({ id: dish_id, delete: false })

        return response.status(201).json(dish);
    }
    async update(request, response){
        const { id, name, price, category_id } = request.body;
        const dishSelected = await knex("dish").where({ id: id }).first();
        const checkDish = await knex("dish").where({ name: name });
        if(checkDish){
            return response.status(400).json("Já existe um prato com este nome")
        }

        
        await knex("users").where({id: id}).first().update({name: name ?? dishSelected.name, price: price ?? dishSelected.price, category_id: category_id ?? dishSelected.category_id});
        return response.status(201).json("Prato atualizado com sucesso!");
    }
    async delete(request, response){
        const {id} = request.body;
        const dish_id = id;

        await knex("dish").where({ id: dish_id }).update({delete: true})    
    
        return response.status(201).json("Prato deletado com Sucesso.");
    }
}
module.exports = DishController;