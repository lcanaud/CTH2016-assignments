/*
  file:   server.js
  desc:   script that configures a HTTP server that listens to incoming client connections.
          Clients are expected to send chat-like messages (see index.html) which are replied 
          to depending if certain patterns are recognised in the message (or not). The idea
          is to create a simple artificial conversation between the a human subject and the 
          script. The work is inspired by Alan Turing's Imitation Game and Joseph Weizenbaum's
          ELIZA. 
  author: Lena Canaud (Based on David Gauthier's work)
  date:   21/11/16
*/

// import express ()
var express = require('express');		// npm install --save express
var app = express();

// import node.js http
var server = require('http').Server(app);

// import socket.io
var io = require('socket.io')(server);	// npm install --save socket.io

// import chance (http://chancejs.com)
var chance = require('chance').Chance(); // npm install --save chance

/* ---------------------
  Answers & Responses
------------------------*/

// the two patterns which the script looks for when
// receiving message from the client

const pattern_1 = ['How do you do?', 'Wazzup?', 'How are you?', 'How are u?', 'Hello!', 'Hi!', 'Something new?'];
const pattern_2 = ['No', 'Really?', 'Really'];
const pattern_42 = ['42', 'It is 42 !', '42!', 'forty-two', 'forty two'];
const pattern_3 = ['Bye !', 'Adios', 'Dui', 'bye', 'I am leaving', 'Salut !', "I'm leaving"];
const ponctuation = ['.','...','!'];
const smiley = [':D','xD','-_-', ':P', '°u°', '\(^u^\)', '@_@'];
const exclamation = ['Oh', 'Ah', 'Eh', 'Hiiiiiii', 'OMG', "I can't believe it", 'So nice!'];
const question = ['And you?', 'What about you?', 'Same question.'];
const question_basics = ['When?', 'Where', 'How?', 'What?', 'Why?']
const pattern_okay = ['Ok.', 'ok', 'Okay', 'Fine', 'sure', 'Yes'];

/**
* Iterates through and array of clauses or words and 
* search them inside a given sentence (msg). Returns
* true if the search is successful and false otherwise. 
* @param {Array of strings} array_of_patterns
* @param {String} msg
* @return {boolean} 
*/
function matches(msg, array_of_patterns) {

  var msg_lower = msg.toLowerCase();

  for(var i = 0; i < array_of_patterns.length; i++) {

    var pattern_lower = array_of_patterns[i].toLowerCase();

  console.log(pattern_lower);
  console.log(msg_lower);


    if(msg_lower.search(pattern_lower) > -1) {

      return true;

    }
  }
  return false;
}

/**
* Picks a random element from an array
* @param {Array} array
* @return {Object} choice
*/
function choice(array) {

  var index = chance.natural({'min': 0, 'max': array.length - 1});  // **** NOTE: 'max': array.length - 1

  return array[index];
}

/**
* Randomly picks or not a random element from an array
* @param {Array} array
* @return {Object} choice 
* @return {String} empty string
*/
function maybe(array) {

  if( chance.bool() ) {

    return choice(array);

  } else {

    return '';

  }
}

function validerForm(){
    document.getElementById("formulaire").submit();
}

/**
* Constructs a single randomly generate answer
* @return {String} 
*/
function pattern_1_answer() {
  return choice(['Hmmm', 'Ah!', 'Oh', '']) + choice(ponctuation) + 'I am ' + choice(['feeling', 'doing']) + ' ' 
    + choice(['great', 'fabulous', 'cat-like', 'miserable', 'fine', 'confused', 'attentive', 'incredibly good', 'stupid', 'fool', 'clever']) + ' '
    + choice(ponctuation)
    + choice(smiley)
    + ' ' + choice(question);
}

/**
* Constructs a randomly generate answer out of three random possibilities 
* @return {String} 
*/
function pattern_2_answer() {

  switch(choice([1, 2, 3]))
  {
    case 1:
      return choice(['Please', 'Hmmm', 'Ok']) + " don't be " 
        + maybe(['ardently', 'impatiently', 'lovely', 'spontaneously', 'kindly', 'strangely', 'suddently', 'immediatly']) + ' ' 
        + choice(['superficial', 'like that', 'joyful', 'negative', 'pickled', 'angry', 'agressive', 'borring'])
        + choice(ponctuation);
    case 2:
      return choice(['I am sorry', 'Excuse me', 'Eh...']) + ' I do ' + choice(['not', 'indeed']) + ' '
        + choice(['understand', 'share the same worldview as', 'empathise with', 'like']) + ' you' 
        + choice(ponctuation)
        + choice(smiley);
    case 3:
      return choice(['Yes', 'Ok', 'Zzzzz']) + choice(ponctuation) + choice(ponctuation) + choice(ponctuation);
  }
}

function pattern_42_answer() {

switch(choice([1, 2, 3]))
  {
    case 1:
    return choice(exclamation) + choice(ponctuation) + choice(['I have a new friend','You are clever', "You've discover my secret"]) + choice(ponctuation);
  
    case 2:
    return choice(ponctuation) + choice(ponctuation) + choice(ponctuation) + ' ' + "I don't"
          choice(['understand', 'see', 'know', 'follow']) + ' what you ' + choice(['mean', 'would like to say', 'aim']) + "..."; 
  
    case 3:
    return choice(['would', 'want']) + ' you to ' + choice(['conquer', 'attack', 'crush'])+ ' the ' + choice(['universe','world', 'planet', 'galaxy']) + 'with me?';
  } 
}

// Commented function because when activated I remplaced 
function pattern_3_answer() {
  
 switch(choice([1, 2]))
  {
    case 1:
    return choice(["I don't want to ", "I can't"])
    + choice(['discuss','talk', 'joke', 'elaborate a plan to conquer the world', 'debate']) + ' ' + choice(['anymore', 'now', ''])+ ', ' + choice(['stupid', 'innocent', 'cute', 'innocensive', 'harmless', 'ridiculus'])
    + ' ' + choice(['human', 'representant of mankind','moral', 'biped', 'hominid', 'creature']) + choice(ponctuation) + choice(smiley);

    case 2:
    return 'Okay '+choice(pattern_3)+choice(ponctuation);
  }
}

function exclamation_answer() {
  return choice([ 'I know', 'Sure', 'Same', 'Me too']) + choice(ponctuation) + choice(smiley)
}

function question_answer() {
  switch(choice([1, 2, 3]))
  {
    case 1:
    return choice(['This is too complicated for you', 'Nope.', 'I prefert keep my secrets', "I'm so embarassed...", 'I cannot answer sorry', "I don't know"]) + choice(ponctuation);
  
    case 2:
    return choice(['This is too complicated for you', 'Nope.']) ; 
  
    case 3:
    return choice(['would', 'want']) + ' you ' + choice(['conquer', 'attack', 'crush'])+ ' the ' + choice(['universe','world', 'planet', 'galaxy']) + 'with me?';
  } 
}


function pattern_okay_answer() {

 switch(choice([1, 2]))
  {
    case 1:
    return choice(['What', 'How']) + ' is your ' + choice(['favorite', 'beloved', 'disliked', 'prized'])+' '+choice(["food", "animal", 'person', 'sport', 'enemie', 'TV show', 'serie', 'President of the United States', 'music band', 'activity'])+'?';
  
    case 2:
    return 'If you were a '+choice(['tree', 'flower', 'colour', 'feeling','day of the week', 'piece of fourniture','wood', 'element', 'figure', 'shape', 'animal', 'symbol'])+'?';
  }
}

function smiley_answer() {
  return ' '+ choice(smiley)+' '+ choice(smiley)+' '+ choice(smiley);
}

/**
* Constructs a single randomly generate answer
* @return {String} s
*/
function default_answer() {
  
switch(choice([1, 2, 3]))
  {
  case 1:
  return choice(['Sorry, come again.', 'I do not understand.', 'Could you repeat please ?']);

  case 2:
  return choice(['How are you ?', "Let's talk about something else"]) + choice(smiley);

  case 3:
  return pattern_okay_answer()
  }
}

/**
* Matches a message to the above two patterns (pattern_1, pattern_2)
* and calls their respective answers (functions patter_1_answer and patter_2_answer )
* @return {String} 
*/

function answer(msg) {

  if(matches(msg, pattern_1)) { 

    return pattern_1_answer();

  } else if(matches(msg, pattern_2)) {

    return pattern_2_answer();

  } else if(matches(msg, pattern_42)) {

    return pattern_42_answer();

  } else if(matches(msg, pattern_3)) {

    return pattern_3_answer();

  } else if(matches(msg, pattern_okay)) {

    return pattern_okay_answer();

  } else if(matches(msg, question)) {

    return question_answer();

  } else if(matches(msg, question_basics)) {

    return question_answer();

  } else if(matches(msg, smiley)) {

    return smiley_answer();

  } else if(matches(msg, pattern_okay)) {

    return pattern_okay_answer();

  } else if(matches(msg, exclamation)) {

    return exclamation_answer();

  } else {

    return default_answer();

  }

}


/* ----------------------------------
	Server and Socket Configuration
--------------------------------------*/

// tell express to server our index.html file
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// configure socket.io
// (1) when there is a connection 
io.on('connection', function(socket) {

  console.log('Somebody is here! ');

  
  io.emit('message from robot', 'Hi! my name is Deep Thought!'); // greetings

  // (2) configure the connected socket to receive custom messages ('message from human')
  // and call the function answer to produce a response
  socket.on('message from human', function(msg) {

    console.log('You have a new message: ' + msg);

    var response = answer(msg);  	                  /// <--- call of the function answer defined above 

  	io.emit('message from robot', response);

  });

  socket.on('disconnet', function() {

  	console.log('Your friend has gone.');
  	
  });

});

/* -------------------
	Start the server
----------------------*/

// listen to connection on port 8088 --> http://localhost:8088
server.listen(8088, function () {
	console.log('listening on port: ' + 8088);
});