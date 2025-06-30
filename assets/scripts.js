"use strict";

const quote = document.getElementById("quote");
const author = document.getElementById("author");

fetch("https://api.quotable.io/quotes?tags=Famous Quotes|Competition")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    const today = new Date();

    const generator = new Math.seedrandom('' + today.getUTCDate() + today.getUTCMonth() + today.getUTCFullYear() );
    const randomNumber = generator();

    const quoteObject = data.results[ Math.trunc( randomNumber * (data.results.length) ) ];

    quote.innerHTML = "\"" + quoteObject.content + "\"";

    if (quoteObject.author == null) {

      author.innerHTML = "- (Unknown author)";

    } else {

      author.innerHTML = "- " + quoteObject.author.toString().split(",")[0];

    }

  });
