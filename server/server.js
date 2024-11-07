const express = require('express');
const app = express();
const PORT = 5001;
// some bodyparser thing

// This must be added before GET & POST routes.
app.use(express.urlencoded({extended:true}))
app.use(express.json())


// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));


// Get Guesses into an Array

// VARIABLES
// set variable for generated random number
// global variable

// FUNCTIONS

// generate random number
  // between 1 & 25
  // we want a whole integer
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

// function to compare random number against guesses
 //(if, else if, else if, and so on and so forth)
      // if playerOneGuess > num
      // if playerOneGuess < num
      // if playerOneGuess == num
      // if playerTwoGuess > num
      // if playerTwoGuess < num
      // if playerTwoGuess == num
      // if playerThreeGuess > num
      // if playerThreeGuess < num
      // if playerThreeGuess == num  



  // GET & POST Routes go here

  // full url of this get request; localhost:5001/inventory
// first argument is the inventory url path
// express gives you callback of request (req) and response(res)

app.get("/inventory",(req,res)=>{

  // send back inventory array of objects as the response body of this get request
  
      res.send(inventory)
  
  })
 
app.post("/inventory",(req,res)=>{

  // from the client, we're sending down an object with the same structure as
  // the dummy data objects currently in the inventory array
  // {name: "item",
  // description:"it's an item"}
  
  
  const newInventoryItem = req.body
  
  // add new inventory item sent from the client into the array
  
  inventory.push(newInventoryItem)
  
  // send back 201 (created) to the client to tell the browser that the request was successful
  // without 201 status it would be waiting for a response indefinitely
  
  res.sendStatus(201)
  })
  
// END POST FUNCTION


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
