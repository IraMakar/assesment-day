const uuid = require('uuid')
const path = require('path')

const {People} = require('../models/models')
const ApiError = require('../error/ApiError');

class PeopleController {
    async create(req, res, next) {
        try {
            const {name, surname, description, sum_mark} = req.body
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName));
           
            const people = await People.create({name, surname, description, sum_mark, img: fileName})

            return res.json(people)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }

    // async updateAll(req, res, next) {
    //     try {
    //         const {name, surname, description, sum_mark} = req.body
    //         // const {img} = req.files;
    //         // let fileName = uuid.v4() + ".jpg";
    //         // img.mv(path.resolve(__dirname, '..', 'static', fileName));
           
    //         //const response = await People.query(
    //           //[name, surname, description, sum_mark, img]
    //         //);
    //         "UPDATE products SET product_name = $1, quantity = $2, price = $3 WHERE productId = $4"

    //         const people = await People.updateAll({name, surname, description, sum_mark});


    //         return res.json(people)
    //     } catch (e) {
    //         next(ApiError.badRequest(e.message))
    //     }
    // }
    //-------------------
    // async updateAll(req, res, next) {
    //     // //const { id } = req.params;
    //     // const people = await People.update(req.body);
    //     // //res.send(people);
    //     // return res.json(people);
    //     try {
    //         let peoples;
    //         peoples = await People.update({peoples});
    //         return res.json(peoples)
    //      } catch (e) {
    //         next(ApiError.badRequest(e.message))
    //     }
    // }
    //-------------------
    
    async updateAll(req, res) {
        const { sum_mark } = req.body;
        //let mark = 0;
        //const people = await People.update(req.body , { where: { id: id }});
        const people = await People.update(req.body , { where: { sum_mark }});
        return res.json(people);
    }

    // async updateAll(req, res, next) {
    //     try {
                
    //             for (let i=0; i<10; i++ ) {
    //                 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //                 //for (let fruit of fruits) {
    //                     let b = arr[i];
    //                 console.log(b);
    //                 const people = await People.update(req.body , { where: { sum_mark: b }});
    //                // const people = await People.update(req.body , { where: { sum_mark: fruit }});
    //                 return res.json(people);
    //             }
               
    //         //}
    //     } catch (e) {
    //         next(ApiError.badRequest(e.message))
    //             }
                
                    
        // let mark = 0;
        // //const people = await People.update(req.body , { where: { id: id }});
        // if (sum_mark > mark ) {
        //     const people = await People.update(req.body , { where: { sum_mark: mark }});
        //     return res.json(people);
        // }
        
    //}


    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 1
        let offset = page * limit - limit
        let peoples;
        peoples = await People.findAndCountAll({limit, offset})
        return res.json(peoples)
    }

    async getOne(req, res) {
        const {id} = req.params
        const people = await People.findOne(
            {
                where:{id}
            }
            )
            return res.json(people);
    }
    async updateOne(req, res) {
        const { id } = req.params;
        const people = await People.update(req.body, { where: { id: id }} );
        return res.json(people);
    }

    async deleteOne(req, res) {
        const { id } = req.params;
        const people = await People.destroy({ where: { id: id }} );
        return res.json(people);
    }
}

module.exports = new PeopleController()