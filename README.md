# youmachine
**// Ada C7 Capstone \\**    

To graduate at from Ada Developers Academy, in our last month we are required to create a full-scale application utilizing at minimum, 3 technolgies that are new to us. As per usual, I bit off a little more than I should chew. I wanted to create an ML-based chatbot trained on my outgoing emails. The plan for Ubot was born; a chat bot trained to talk like you...or in this case me.     

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
Caveat: I disconnected the Flask API we built that provided the messages from the training-model. The responses were so unpredicatble and sometimes offensive that I was really freaked out! (My sent messages were never that scary!)   

**Ubot conneted to the speech emulator API: https://youmachine.herokuapp.com/**   

**Coming soon...**

Research Links  
Build + Dependencies  
External Repos  
Tests  
Findings  
Refactoring  


