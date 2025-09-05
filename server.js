const express = require('express')

const app = express()

/* 1. Be Polite, Greet the User */
//Link: http://localhost:3000/greetings/Harry

app.get('/greetings/:username', (req, res) => {
    res.send(`<h1>Hello there, ${req.params.username}</h1>`)
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})


/* 2. Rolling the Dice */
// Link: http://localhost:3000/roll/number (2,3,4)
app.get('/roll/:number', (req, res) => {
    const n = Number(req.params.number);
    if (isNaN(n))
        return res.send('You must specify a number.');
    res.send(`You rolled a ${Math.floor(Math.random() * (n+1))}.`)
})


/* 3. I Want THAT One! */
app.get('/collectibles/:index', (req, res) => {
  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  // index comes from the URL param
  const i = Number(req.params.index);

  // optional: you can still log these (but they won’t exist in this route)
  console.log(req.params.name, req.query.price);

  let findCollectibles = collectibles[i];

  // check if collectible exists
  if (!findCollectibles) {
    return res.send("This item is not yet in stock. Check back soon!");
  }

  // response with name + price
  res.send(
    `So, you want the ${findCollectibles.name}? For ${findCollectibles.price}, it can be yours!`
  );
});