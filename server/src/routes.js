import { Router } from "express";

import SessionsController from "./controllers/SessionsController";
import UsersController from "./controllers/UsersController";
import RepositoriesController from "./controllers/RepositoriesController";
import auth from "./middlewares/auth"

const routes = new Router();

//----------Controller Público--------------
routes.post('/sessions', SessionsController.create);
routes.post("/users", UsersController.create);

//----------Middleware----------------------

routes.use(auth);

//----------Controllers privados------------
routes.get("/users/:id", UsersController.show);

routes.get("/users", UsersController.index);
routes.put("/users/:id", UsersController.update);
routes.delete("/users/:id", UsersController.destroy);

routes.get("/users/:user_id/repositories", RepositoriesController.index);
routes.post("/users/:user_id/repositories", RepositoriesController.create);
routes.delete("/users/:user_id/repositories/:id", RepositoriesController.destroy);

export default routes;
