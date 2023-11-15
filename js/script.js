const { createApp } = Vue;

createApp({
  data() {
    return {

      toDoListElem: {
        text:"",
        done: false,
      },
      
      toDoList: [],

    }

  },
  methods: {
    addGoal: function() {
      this.toDoList.push({...this.toDoListElem});
      this.toDoListElem.text = "";
    },
    deleteGoal: function(index) {
      this.toDoList.splice(index, 1);
    },
    doneOrNotDone: function(index) {
      if(this.toDoList[index].done === false) {
        this.toDoList[index].done = true;
      } else {
        this.toDoList[index].done = false;
      }
    },
  }
}).mount("#app")