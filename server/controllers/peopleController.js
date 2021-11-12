const uuid = require("uuid");
const path = require("path");

const { People } = require("../models/models");
const ApiError = require("../error/ApiError");

class PeopleController {
  async create(req, res, next) {
    try {
      const { name, surname, description, sum_mark, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const people = await People.create({
        name,
        surname,
        description,
        sum_mark,
        img: fileName,
      });

      return res.json(people);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async updateAll(req, res) {
    const { sum_mark } = req.body;
    //let mark = 0;
    //const people = await People.update(req.body , { where: { id: id }});
    const people = await People.update(req.body, { where: { sum_mark } });
    return res.json(people);
  }

  async getAll(req, res) {
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 3;
    let offset = page * limit - limit;
    let peoples;
    peoples = await People.findAndCountAll({ limit, offset });
    return res.json(peoples);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const people = await People.findOne({
      where: { id },
    });
    return res.json(people);
  }
  async updateOne(req, res) {
    const { id } = req.params;
    const people = await People.update(req.body, { where: { id: id } });
    console.log(people);
    return res.json(people);
  }

  async deleteOne(req, res) {
    const { id } = req.params;
    const people = await People.destroy({ where: { id: id } });
    return res.json(people);
  }
}

module.exports = new PeopleController();
