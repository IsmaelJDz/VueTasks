let app = new Vue({
  el: '#app',
  data: {
    title: '',
    hours: '',
    tasks: []
  },
  created () {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
  },
  computed: {
    totalTime () {
      if (!this.tasks.length) { return 0 }

      let total = 0

      this.tasks.forEach(t => {
         total += parseInt(t.hours)
      })

      return total
    }
  },
  methods: {
    isValidForm () {
      return this.title != '' && this.hours > 0;
    },
    formSubmit () {
        if (this.hours >= 1) {
          this.tasks.push({
            title: this.title,
            hours: this.hours
          })

          localStorage.setItem("tasks", JSON.stringify(this.tasks))

          this.title = ''
          this.time = ''
      }
    },
    removeTask (index) {
      this.tasks.splice(index, 1)
      localStorage.setItem("tasks", JSON.stringify(this.tasks))
    },
    clearForm () {
      this.title = ''
      this.hours = ''
    }
  }
})
