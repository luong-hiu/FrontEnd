function todoList() {
  this.list = [];

  this.addTask = function (todotask) {
    this.list.push(todotask);
  };
  this.deleteTask = function (code, name, task) {
    let index = this.findIndexTask(code, name, task);
    if (index != -1) {
      this.list.splice(index, 1);
    }
  };
  this.viewTask = function (code, name, task) {
    let index = this.findIndexTask(code, name, task);
    // console.log(index)
    if (index != -1) {
      let todotask = this.list[index];
      return todotask;
    }
  };
  this.updateTask = function (todotask) {
    let index = this.findIndexTask(todotask.code, todotask.name);
    if (index != -1) {
      this.list[index].task = todotask.task;
    }
  };
  this.completeTask = function (code, name, task) {
    let index = this.findIndexTask(code, name, task);
    if (index != -1) {
      this.list[index].status = true;
    }
  };
  this.incompleteTask = function (code, name, task) {
    let index = this.findIndexTask(code, name, task);
    if (index != -1) {
      this.list[index].status = false;
    }
  };
  this.findIndexTask = function (code, name, task) {
    let index = this.list.findIndex(
      (item) => item.code === code && item.name === name && item.task === task
    );
    return index;
  };
  this.searchTask = function (content,select,list) {
    let emptyList = [];
    let normalContent = content.toLowerCase().replace(/\s/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    list.forEach((item) => {
      let normalTask = item.task.toLowerCase().replace(/\s/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      let result = normalTask.indexOf(normalContent);
      if(result >= 0){
        if (select === 'All' || 
            (select === 'Complete' && item.status === true) || 
            (select === 'Incomplete' && item.status === false)) {
          emptyList.push(item);
        }
      }
    });
    return emptyList
  };
}
