# youmachine
**Ada C7 Capstone**     

In our last month at Ada Developers Academy, we are required to create a full-scale application utilizing at minimum, 3 technolgies/languages that are new to us. As per usual, I bit off a little more than I should chew. I wanted to create an ML-based chatbot trained on my outgoing emails. The plan for Ubot was born; a chat bot trained to talk like you...or in this case me.     

With a month to create this app, from concept to deployment, I set out to see if I could use an existing implementation of Char-rnn, a recurrent neural network, to train Ubot on data from my Gmail and Facebook Messenger sent messages....or at least get the process moving while I simultaneously created a speech emulator in the event this zany plan couldn't be pulled off by someone so new to programming.   

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

Spoiler Alert: It worked! I created the emulator, complete with API/socketing to make Ubot speak. With some help from the Ada staff and advisors, we also trained YouMachine (ubot+) using char-rnn and some extensive Sci-Py libraries and TensorFlow. 
Caveat: I disconnected the Flask API we built that provided the messages from the training-model. The responses were so unpredicatble and sometimes offensive that I was really freaked out! (My sent messages were never that scary!) However, talking to Ubot as is with the emulator is still lots of fun.

**Ubot connected to speech emulator API: https://youmachine.herokuapp.com/**  (Current version is optimized for Chrome. Turn up the volume to hear Ubot speak.)

**Coming soon...**

Research Links  
Build + Dependencies  
External Repos  
Tests  
Findings  
Refactoring  


