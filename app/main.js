import TodosController from "./Controllers/TodosController.js";
import ValuesController from "./Controllers/ValuesController.js";
import WeathersController from "./Controllers/WeathersController.js";

class App {
  //valuesController = new ValuesController();
  todosController = new TodosController();
  weathersController = new WeathersController();
}

window["app"] = new App();
