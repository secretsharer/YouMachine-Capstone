# **Ada C7 Capstone**  
## ***Ubot/YouMachine***

### *Contents*
- [Project Description](#Description)
- [Technologies](#Tech)
- [References](#Refs)
- [Findings](#Findings)
- Build + Dependencies  
- External Repositories  
- Tests 
- Refactoring

### **Project Description:** <a name="Description"></a>

In our final month at Ada Developers Academy, we create a full-scale application utilizing at minimum, three technolgies or languages that are new to us. For mine, I chose to delve into AI research on predictive chatbots.

After toiling with potential ideas, the treatment for Ubot was born; An AI/ML-based chatbot you can train to theoretically 'sound like you'.

With only a month to deliver this app from concept to deployment, I though it best to use an existing, open-source algorithm as the centerpiece. I chose a Recurrent Neural Network called char-rnn. Specifically, an implementation of char-rnn, developed by Andrej Karpathy https://github.com/karpathy/char-rnn. My data set would be my sent messages from Gmail and Facebook Messenger. 

There were enough things that could go wrong with this process from the outset, I simultaneously built a speech emulator utilizing the same data set as a resource. I designed it to conditionally respond to input in as nuanced a response pattern as I had time to program. Two APIs; a Flask API to respond with results from my training data, aka, YouMachine, and the Rails API/speech emulator, aka, Ubot. If all went to plan, I would toggle pings between API's and have fun comparing responses.

With the time constraints, working in a new stack and the difficulty of version incompatibilities with required Python libraries, it was a close call. However, the help of one of our TA's made it possible to finally get the model to successfully train. This took days, but it gave me the time I needed to build out the emulator and the frontend.

### **Technologies Used:** <a name="Tech"></a>

Type   |  Usage         
--- | --- 
|  Ruby/Rails   | API, Emulator Logic    | 
| JavaScript    | Frontend               |   
| Socket.io     | Socketing for chatroom |  
| Node/Express  | Server                 | 
| Python        | Training Libs          |  
| Flask         | Training Model API     |
| Sci-Py        | Lib                    |
| Numpy         | Lib                    |   
| Lasagne       | Lib                    |    
| TensorFlow    | Training Model Creation| 
| Gmail Dataset | Resource               |   
| FB Msgr Data  | Resource               |


### **Dependencies**   

`Python 2.7         `   

`TensorFlow >= 1.2       `

### **References** <a name="Refs"></a>

> https://github.com/karpathy/char-rnn  
> https://github.com/crazydonkey200/tensorflow-char-rnn

### **Findings** <a name="Findings"></a>   

The MVP and overall vision of Ubot was a success. I was able to present the deployed application for our graduating class and sponsors with the server toggled to the speech emulator. We questioned Ubot in front of a room of a hundred people. With the addition of voicing through the browser, we were able to hear our questions and laugh at Ubot's absurd answers.   


However, the Flask API retrieving from YouMachine had to be disconnected right before I went on. The meaninglessness and apparent incoherence of its responses would only occasionally give way to lucid grammar, and since enough of those moments bordered on offensive, the TA and I decided it was too risky and shut it down.   


Things that could make it better next time?    

A significantly larger data set.    
More time to train the model.    
A better understanding of how to adjust the network layers and thresholds to fine tune the training process.   
