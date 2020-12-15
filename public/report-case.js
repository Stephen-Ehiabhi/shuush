window.onload = function () {
    var conversationalForm = window.cf.ConversationalForm.startTheConversation({
        formEl: document.getElementById("form"),
        context: document.getElementById("cf-context"),
        submitCallback: function () {
            conversationalForm.addRobotChatResponse("Alright, you are done.");
        }
    });
};

//    new cf.ConversationalForm({
//     // HTMLFormElement
//     formEl/*: HTMLFormElement;*/
// });