const { createApp } = Vue;

createApp({
  data() {
    return {

      toDoListElem: {
        text:"",
        done: false,
      },
    
      toDoList: [ ],

    }
  },
  methods: {
    addGoal: function() {
      this.toDoList.push({...this.toDoListElem});
      this.toDoListElem.text = "";
    },
  }
}).mount("#app")