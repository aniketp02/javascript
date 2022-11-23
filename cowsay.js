const cowsay = require("cowsay");
const quotes = require("inspirational-quotes");

const text = quotes.getQuote().text;
console.log(
  cowsay.say({
    text: text,
    e: "xx",
    T: "U",
  })
);
