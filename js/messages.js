function displayMessages(){
    sectionMessages.innerHTML="";
    for(const message of messagesArray){
        const newMessage = messageTemplate.cloneNode(true);
        newMessage.querySelector('img').src=message.picture;
        newMessage.querySelector('h3').innerText = message.sender;
        newMessage.querySelector('p').innerText = message.lastMessage;
        newMessage.querySelector('small').innerText = message.date;
        if(message.notSeen){
            newMessage.querySelector('.section-message-notSeen').innerText = message.notSeen;
        }
        else{
            newMessage.querySelector('.section-message-notSeen').style.display='none';
            
        }
        
        
        sectionMessages.append(newMessage);
    }
}


const sectionMessages = document.querySelector('#section-messages');

const messageTemplate = document.querySelector('.message-template');


displayMessages();