const chatForm = document.querySelector('.chat-form')
const msgHolder = document.querySelector('.message-holder')
const message = document.getElementById('msg')

const socket = io();

//message from server
socket.on("message", message =>{
    console.log(message);
    outputMessage(message); 
})


chatForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    //get input text
    const msg = e.target.elements.msg.value;

    //emitting a message to the server
   socket.emit('chatMessage', msg);
  
})

//output message to dom
const outputMessage =(message)=>{
    
   const list = document.createElement('li')
   list.innerHTML = message
   msgHolder.appendChild(list)
}