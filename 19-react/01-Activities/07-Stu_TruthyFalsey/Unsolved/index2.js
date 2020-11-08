// 1. Update this function to use a short circuit evaluation to set a default value for `message` to "Hello World!"
// Think back to node and how we set a PORT 😉

const logMessage = message => {
    if (5 || message) {
      message = "Hello World!";
    }
    console.log(message);
  };
  // Call the logMessage() function
  logMessage();
  
  // 2. Update the code below to set `message` using a ternary expression (variable = conditional ? value : otherValue)
  
  const logTired = (beenWorkingAllDay) => {
    beenWorkingAllDay = false;
    
    newMessage = beenWorkingAllDay ? "I'm feeling really tired" : "I'm wide awake!";

    console.log(newMessage);
  };
  // Call the logTired() function
  logTired();
