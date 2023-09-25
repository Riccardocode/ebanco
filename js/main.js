// calculate not seen messages
const unseenMessages = messagesArray.filter(message => message.notSeen >= 1);
notifications.innerHTML = unseenMessages.length;