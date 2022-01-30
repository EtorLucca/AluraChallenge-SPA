import User from "../models/User";
import Repository from "../models/Repository";

class RepositoriesController {
  async index(req, res) {
    try {
      const { user_id } = req.params;
      const { q } = req.query;
      const user = await User.findById(user_id);

      if (!user) {
        return res.status(404).json();
      }

      let query = {};

      if (q) {
        query = { url: { $regex: q } };
      }

      //--------- Filtrando resultados de repositório por usuário e pesquisa
      const repositories = await Repository.find({
        userId: user_id,
        ...query,
      });

      return res.json(repositories);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async create(req, res) {
    try {
      const { user_id } = req.params;
      const { code, color, descricao, nomeProjeto, userId } = req.body;

      const user = await User.findById(user_id);

      if (!user) {
        return res.status(404).json();
      }

      const repository = await Repository.findOne({
        userId: user_id,
        nomeProjeto
      });

      if (repository) {
        return res
          .status(422)
          .json({ message: `Repository ${nomeProjeto} already exists.` });
      }

      const newRepository = await Repository.create({
        code,
        color,
        descricao,
        nomeProjeto,
        userId: user_id
      });

      return res.status(201).json(newRepository);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  // ---------- Caso queira atualizar o repository, criar metodo show e update

  async destroy(req, res) {
    try {
      const { user_id, id } = req.params;
      const user = await User.findById(user_id);

      if (!user) {
        return res.status(404).json();
      }

      const repository = await Repository.findOne({
        userId: user_id,
        id
      });

      if (!repository) {
        return res.status(404).json();
      }

      await repository.deleteOne();

      return res.status(200).json();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }
}

export default new RepositoriesController();
