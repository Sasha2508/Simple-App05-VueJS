const app = Vue.createApp({
  data() {
    return {
      eventInput: "",
      confirmedEvent: "",
    };
  },
  methods: {
    showAlert() {
      alert("Are you sure you want to submit?");
    },
    registerInput(event) {
      this.eventInput = event.target.value;
    },
    confirmedInput() {
      this.confirmedEvent = this.eventInput;
    },
  },
});
app.mount("#assignment");
