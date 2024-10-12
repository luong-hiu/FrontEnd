let todolist = new todoList();
let val = new Validation();
const getELE = (id) => {
  return document.getElementById(id);
};

const setLocalStorage = () => {
  localStorage.setItem("todoList", JSON.stringify(todolist.list));
};
const getLocalStotage = () => {
  let valueLocalStorage = localStorage.getItem("todoList");
  if (valueLocalStorage !== null) {
    todolist.list = JSON.parse(valueLocalStorage);
    // console.log(todolist.list);
    showToDoTaskList(todolist.list);
  }
};

const showToDoTaskList = (todolist) => {
  let contentToDoList = "";
  let contentDoneList = "";
  todolist.map((item, index) => {
    if (item.status === false) {
      contentToDoList += `
            <tr>
                <td>${item.code}</td>
                <td>${item.name}</td>
                <td>${item.task}</td>
                <td class="d-flex justify-content-center">
                    <button onclick="deleteTask('${item.code}','${item.name}','${item.task}')" class="btn btn-danger mx-1">Delete</button>
                    <button onclick="viewTask('${item.code}','${item.name}','${item.task}')" class="btn btn-success mx-1">View</button>
                    <button onclick="completeTask('${item.code}','${item.name}','${item.task}')" class="btn btn-success mx-1">Complete</button>
                </td>
            </tr>
            `;
    } else {
      contentDoneList += `
            <tr>
                <td>${item.code}</td>
                <td>${item.name}</td>
                <td>${item.task}</td>
                <td class="d-flex justify-content-center">
                    <button onclick="deleteTask('${item.code}','${item.name}','${item.task}')" class="btn btn-danger mx-1">Delete</button>
                    <button onclick="viewTask('${item.code}','${item.name}','${item.task}')" class="btn btn-success mx-1">View</button>
                    <button onclick="incompleteTask('${item.code}','${item.name}','${item.task}')" class="btn btn-success mx-1">Incomplete</button>
                </td>
            </tr>
            `;
    }
  });
  getELE("tableToDoList").innerHTML = contentToDoList;
  getELE("tableDoneList").innerHTML = contentDoneList;
};

const addTask = () => {
  let code = getELE("code").value;
  let name = getELE("name").value;
  let task = getELE("task").value;
  let isValidate = true;

  let todotask = new todoTask(code, name, task);

  //Check code
  isValidate =
    val.checkEmpty(code, "notifyCode", "This is a required field") &&
    val.checkCharactersCode(code, "notifyCode", "Chu") &&
    val.checkSpace(code, "notifyCode", "Input cannot contain spaces");

  //Check name
  isValidate &=
    val.checkEmpty(name, "notifyName", "This is a required field") &&
    val.checkCharacters(
      name,
      "notifyName",
      "Please enter accented characters"
    ) &&
    val.checkCorrect(
      code,
      name,
      "notifyName",
      "This name doesn't match the code",
      todolist.list
    )&&
    val.checkSpace(name,"notifyName","Input cannot contain spaces");

  //Check task
  isValidate &=
    val.checkEmpty(task, "notifyTask", "This is a required field") &&
    val.checkDuplicateTask(
      code,
      name,
      task,
      "notifyTask",
      "This task has been duplicated",
      todolist.list
    ) &&
    val.checkCharacters(task, "notifyTask", "Please enter accented characters");

  if (isValidate) {
    todolist.addTask(todotask);
    setLocalStorage();
    showToDoTaskList(todolist.list);

    getELE("btnClose").click();
    getELE("form-area").reset();
  }
};
const deleteTask = (code, name, task) => {
  todolist.deleteTask(code, name, task);
  showToDoTaskList(todolist.list);
  setLocalStorage(todolist);
};
const viewTask = (code, name, task) => {
//   console.log(code, name, task)
  let todotask = todolist.viewTask(code, name, task);

  getELE("code").disabled = true;
  getELE("name").disabled = true;
  getELE("btnAdd").disabled = true;
  getELE("code").value = todotask.code;
  getELE("name").value = todotask.name;
  getELE("task").value = todotask.task;

  document.querySelector(".modal").classList.add("show");
  document.querySelector(".modal").style.display = "block";

  getELE("btnClose").addEventListener("click", function () {
    getELE("code").disabled = false;
    getELE("name").disabled = false;
    getELE("btnAdd").disabled = false;
    document.querySelector(".modal").classList.remove("show");
    document.querySelector(".modal").style.display = "none";
    getELE("form-area").reset();
  });
};
const updateTask = () => {
  let code = getELE("code").value;
  let name = getELE("name").value;
  let task = getELE("task").value;
  let isValidate = true;
  let todotask = new todoTask(code, name, task);

   //Check task
   isValidate &=
   val.checkEmpty(task, "notifyTask", "This is a required field") &&
   val.checkDuplicateTask(
     code,
     name,
     task,
     "notifyTask",
     "This task has been duplicated",
     todolist.list
   ) &&
   val.checkCharacters(task, "notifyTask", "Please enter accented characters");

  if(isValidate){
    todolist.updateTask(todotask);
    showToDoTaskList(todolist.list);
    setLocalStorage();
    getELE("btnClose").click();
  }
  
};
const completeTask = (code, name, task) => {
  todolist.completeTask(code, name, task);
  showToDoTaskList(todolist.list);
  setLocalStorage();
};
const incompleteTask = (code, name, task) => {
  todolist.incompleteTask(code, name, task);
//   console.log(todolist.list);
  showToDoTaskList(todolist.list);
  setLocalStorage();
};
const searchTask = () => {
  let content = getELE("searchInput").value;
  let select = getELE("select").value;
  searchList = todolist.searchTask(content, select, todolist.list);
  showToDoTaskList(searchList);
};

getLocalStotage();
getELE("btnAdd").addEventListener("click", addTask);
getELE("btnUpdate").addEventListener("click", updateTask);
getELE("btnSearch").addEventListener("click", searchTask);
