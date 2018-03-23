# youmachine
**Ada C7 Capstone**     

In our last month at Ada Developers Academy, we create a full-scale application utilizing at minimum, 3 technolgies/languages that are new to us. For mine, I wanted to incorporate some basic AI, and perhaps some attempts machine learning. Brainstorming brought the idea of Ubot or YouMachine; an AI/ML-based chatbot trained to talk like you...or in this case me.     

With a month to create this app, from concept to deployment, I set out to see if I could use an existing implementation of Char-rnn, a recurrent neural network I'd been researching, to train Ubot on data from my Gmail and Facebook Messenger sent messages. Knowing this was a long shot, I simultaneously created a speech emulator API in case I couldn't get my training model to train. 

With the time constraints, working in a new stack and the nightmare of verisoning incompatiblies with required python libraries, I would love to refactor this code - it still feels pretty hacked together. 

However, spoiler alert: It worked! I created the emulator, complete with API/socketing to make Ubot speak. With some help from the Ada staff and advisors, we also trained YouMachine (ubot+) using char-rnn and some extensive Sci-Py libraries and TensorFlow. 

Caveat: I disconnected the Flask API that provided the messages from the training-model. The responses were so unpredicatble and sometimes offensive that I thought it best to stick to the emulator for Capstone presentation day. However, talking to Ubot with the emulator is still a hoot.

**Technologies Used:**  
Ruby/Rails  
JavaScript  
Socket.io  
Node.js  
Python
Sci-Py  
Flask  
Numpy  
Lasagne  
TensorFlow  

**Ubot connected to speech emulator API: https://youmachine.herokuapp.com/**  (Current version is optimized for Chrome. Turn up the volume to hear Ubot speak.)

**Coming soon...**

Research Links  
Build + Dependencies  
External Repos  
Tests  
Findings  
Refactoring  


