"use strict";

const quote = document.getElementById("quote");
const author = document.getElementById("author");

fetch("https://api.quotable.io/quotes?tags=Famous Quotes|Competition")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    if (!data.results || data.results.length === 0) {
      return;
    }

    const today = new Date();

    const generator = new Math.seedrandom('' + today.getUTCDate() + today.getUTCMonth() + today.getUTCFullYear() );
    const randomNumber = generator();

    const quoteObject = data.results[ Math.trunc( randomNumber * (data.results.length) ) ];

    quote.textContent = "\"" + quoteObject.content + "\"";

    if (quoteObject.author == null) {

      author.textContent = "- (Unknown author)";

    } else {

      author.textContent = "- " + quoteObject.author.toString().split(",")[0];

    }

  });
