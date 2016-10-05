(function(){

  var moduleId = "TodoCtrl";

  angular.module('todoApp').controller(moduleId, [TodoCtrl]);

  function TodoCtrl() {
     // origin;
    var vm = this;

    vm.editedTodo = null;
    vm.isViewEditing = false;
    vm.sortField = "deadLine";
    vm.reverse = false;

    vm.todos = [];

    vm.add = add;
    vm.cancel = cancel;
    vm.edit = edit;
    vm.remove = remove;
    vm.save = save;


    vm.toggleSortField = toggleSortField;

    activate();

    function activate() {

      vm.todos = [

         {id:1, task:'Посмотреть видео к лабораторной работе', deadLine:new Date(),completed:true},
         {id:2, task:'Выполнить задание лабораторной работы', deadLine: new Date(2015,10,12),completed:false},
         {id:3, task:'Подготовить отчет по лабораторной работе', deadLine: new Date(2015,10,15),completed:false}
      ]
    }

    function add() {

      vm.isViewEditing = true;
      vm.editedTodo = {id: -1, deadLine: new Date(), completed:false}
    }
      function cancel() {

      vm.isViewEditing = false;
      vm.editedTodo = null;
    }

    function edit(todo) {
      console.log('Метод edit находится в стадии разработки');
      //vm.isViewEditing = true;
      //origin = todo;
      //vm.editedTodo = {};
      //angular.copy(todo, vm.editedTodo);
    }
    function remove(todo) {

      console.log('Метод remove находится в стадии разработки');
    }
    function save(todo) {

      if (vm.editedTodo.id == -1) {
         vm.todos.push(vm.editedTodo);
      }else{
        // angular.copy(vm.editedTodo, origin);  
      }
      cancel();
    }
    
    function toggleSortField(fieldName){

      if(vm.sortField === fieldName) {
        vm.reverse = !vm.reverse;
      } else {
         vm.sortField = fieldName;
         vm.reverse = false;
       }
    }

  }
})();


