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
      if(this.toDoListElem.text !== "") {
        this.toDoList.unshift({...this.toDoListElem});
        this.toDoListElem.text = "";
      };
      
    },
    deleteGoal: function(index) {
      this.toDoList.splice(index, 1);
    },
    doneOrNotDone: function(clickedIndex) {
      if(this.toDoList[clickedIndex].done === false) {
        this.toDoList[clickedIndex].done = true;
      } else {
        this.toDoList[clickedIndex].done = false;
      }
    },
  }
}).mount("#app")