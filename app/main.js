import ImagesController from "./Controllers/ImagesController.js";
import QuotesController from "./Controllers/QuotesController.js";
import TodosController from "./Controllers/TodosController.js";
import ValuesController from "./Controllers/ValuesController.js";
import WeathersController from "./Controllers/WeathersController.js";

class App {
  //valuesController = new ValuesController();
  todosController = new TodosController();
  weathersController = new WeathersController();
  quotesController = new QuotesController();
  imagesController = new ImagesController()
}

window["app"] = new App();
