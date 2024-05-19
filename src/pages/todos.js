import Auth from "../services/auth.js";
import location from "../services/location.js";
import loading from "../services/loading.js";
import Todos from "../services/todo.js";
import Form from "../components/form.js";

const init = async () => {
  const { ok: isLogged } = await Auth.me();

  if (!isLogged) return location.login();

  loading.stop();

  const formEl = document.getElementById("todo-form");
  new Form(formEl, { description: () => false }, (values) =>
    addTodo(values.description)
  );

  // create POST /todo { description: string }
  // get get /todo/1 - 1 это id
  // getAll get /todo
  // update put /todo/1 - 1 это id { description: string }
  // delete delete /todo/1 - 1 это id
  function createTodo(todo) {
    const todoHTML = document.createElement("div");
    const todoCheckbox = document.createElement("input");
    const todoDescription = document.createElement("span");
    const todoRemoveButton = document.createElement("button");

    todoHTML.classList.add("todo");
    todoCheckbox.setAttribute("type", "checkbox");
    todoCheckbox.classList.add("todo__checkbox");
    todoCheckbox.checked = todo.completed;

    todoCheckbox.onchange = async function (event) {
      loading.start();
      const checkboxValue = event.target.checked;
      event.target.checked = !event.target.checked;
      const response = await Todos.updateStatusById(todo.id, checkboxValue);
      loading.stop();
      if (!response) alert("Ошибка при отправке запроса на сервер.");
      event.target.checked = !event.target.checked;
    };

    todoDescription.classList.add("todo__description");
    todoDescription.innerText = todo.description;
    todoRemoveButton.classList.add("todo__remove");
    todoRemoveButton.innerText = "Удалить";

    todoRemoveButton.onclick = async function (event) {
      event.preventDefault();
      const response = confirm("Вы уверены?");
      if (!response) return;

      loading.start();
      await Todos.deleteById(todo.id);
      await createTodoList();
      loading.stop();
    };

    todoHTML.appendChild(todoCheckbox);
    todoHTML.appendChild(todoDescription);
    todoHTML.appendChild(todoRemoveButton);

    return todoHTML;
  }
  const createTodoList = async () => {
    loading.start();
    const todos = await Todos.getAll();
    loading.stop();

    if (!todos) return;

    document.querySelector(".todo-list").innerHTML = "";
    todos.forEach(insertInTodoList);
  };

  const insertInTodoList = (todo) => {
    const todoHTML = createTodo(todo);
    document.querySelector(".todo-list").appendChild(todoHTML);
  };

  const addTodo = async (description) => {
    loading.start();
    const todo = await Todos.create(description);
    loading.stop();
    if (!todo) return;

    insertInTodoList(todo);
  };

  await createTodoList();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
