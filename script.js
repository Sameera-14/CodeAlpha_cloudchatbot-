const chatbotData = [

    {
        patterns:["hi","hello","hey"],
        response:"Hello! Welcome to our Cloud Support Chatbot."
    },

    {
        patterns:["cloud computing"],
        response:"Cloud Computing provides computing resources such as servers, storage and databases over the internet."
    },

    {
        patterns:["aws"],
        response:"AWS stands for Amazon Web Services. It is one of the leading cloud platforms."
    },

    {
        patterns:["azure"],
        response:"Microsoft Azure is a cloud platform used for application deployment and management."
    },

    {
        patterns:["google cloud"],
        response:"Google Cloud Platform provides cloud services such as storage, AI and virtual machines."
    },

    {
        patterns:["storage"],
        response:"Cloud storage allows users to store and access data through the internet."
    },

    {
        patterns:["security"],
        response:"Cloud security protects data, applications and infrastructure from cyber threats."
    },

    {
        patterns:["contact"],
        response:"You can contact us at support@cloud.com."
    },

    {
        patterns:["thanks","thank you"],
        response:"You're welcome. Happy to help!"
    },

    {
        patterns:["bye"],
        response:"Goodbye! Have a great day."
    }

];

function getBotResponse(message){

    message = message.toLowerCase();

    for(let item of chatbotData){

        for(let pattern of item.patterns){

            if(message.includes(pattern)){
                return item.response;
            }

        }

    }

    return "Sorry, I couldn't understand your question.";
}

function sendMessage(){

    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    let userMessage = input.value.trim();

    if(userMessage === ""){
        return;
    }

    chatBox.innerHTML +=
    `<div class="user-message">${userMessage}</div>`;

    let botReply = getBotResponse(userMessage);

    setTimeout(() => {

        chatBox.innerHTML +=
        `<div class="bot-message">${botReply}</div>`;

        chatBox.scrollTop = chatBox.scrollHeight;

    },500);

    input.value = "";
}

document.getElementById("userInput")
.addEventListener("keypress",function(event){

    if(event.key === "Enter"){
        sendMessage();
    }

});