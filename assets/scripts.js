"use strict";

const quote = document.getElementById("quote");
const author = document.getElementById("author");

// fetch("https://type.fit/api/quotes")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {

//     const today = new Date();

//     const generator = new Math.seedrandom('' + today.getUTCDate() + today.getUTCMonth() + today.getUTCFullYear() );
//     const randomNumber = generator();

//     const quoteObject = data[ Math.trunc( randomNumber * (data.length + 1) ) ];

//     quote.innerHTML = "\"" + quoteObject.text + "\"";

//     if (quoteObject.author == null) {

//       author.innerHTML = "- (Unknown author)"

//     } else {

//       author.innerHTML = "- " + quoteObject.author;

//     }

//   });
