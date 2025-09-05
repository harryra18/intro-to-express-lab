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

  const i = Number(req.params.index);

  let findCollectibles = collectibles[i];

  if (!findCollectibles) {
    return res.send("This item is not yet in stock. Check back soon!");
  }

  res.send(
    `So, you want the ${findCollectibles.name}? For ${findCollectibles.price}, it can be yours!`
  );
});

/* 4. Filter Shoes by Query Parameters */
app.get('/shoes/:name', (req, res) => {
      const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];
  const minPrice = req.query['min-price'];
  const maxPrice = req.query['max-price'];
  const type = req.query.type

  
});