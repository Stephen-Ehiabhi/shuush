var c_f = new cf.ConversationalForm({
  formEl: document.getElementById("report-form"),
  context: document.getElementById("cf-context"),
  userInterfaceOptions: {
    controlElementsInAnimationDelay: 250,
    robot: {
      robotResponseTime: 0,
      chainedResponseTime: 400,
    },
    user: {
      showThinking: false,
      showThumb: false,
    },
  },
  showProgressBar: true,
  theme: "purple",
  submitCallback: function () {
    document.getElementById("report-form").submit();
  },
});
