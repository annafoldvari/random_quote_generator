/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Array of quote objects.

var quotes = [
  {
    quote: "You wanna fly, you got to give up the shit that weighs you down.",
    source: "Toni Morrison",
    citation: "Song of Solomon",
    tags: "burdens, empowerment, flying, freedom, unburdening, weight"
  },
  {
    quote: "If you don’t like something, change it. If you can’t change it, change your attitude.",
    source: "Maya Angelou"
  },
  {
    quote: "Every individual matters. Every individual has a role to play. Every individual makes a difference.",
    source: "Jane Goodall",
    citation: "With Love",
    year: 1999
  },
  {
    quote: "I wish that every human life might be pure transparent freedom.",
    source: "Simone de Beauvoir",
    citation: "The Blood of Others",
    year: 1946,
    tags: "human life, freedom"
  },
  {
    quote: "Most socipolitical hierarchies lack a logical or biological basis - they are nothing but the perpetuation of chance events supported by myths.",
    source: "Yuval Noah Harari",
    citation: "Sapiens",
    tags: "history, sociopolitical hierarchies, myths"
  },
];

// Gets a random quote object from the quotes array

function getRandomQuote(quotes) {
  var randomNumber = Math.floor(Math.random() * (quotes.length - 1) + 1);
  return quotes[randomNumber];
}

/*Builds up the html with the details of one selected quotes and prints it out in the adequate div. 
Also changes the background color of the body tag by calling the changeBackgroundColor function. */

function printQuote() {
  var html = '';
  var quote = getRandomQuote(quotes);

  html = `<p class="quote">${quote.quote}</p>
          <p class="source">${quote.source}`;
  
  if (quote.citation) {
    html += `<span class="citation">${quote.citation}</span>`;
  }
  
  if (quote.year) {
    html += `<span class="year">${quote.year}</span>`;
  }

  html += '</p>';

  if (quote.tags) {
    html += `<h4>Tags: ${quote.tags}</h4>`;
  }

  var quoteDiv = document.getElementById("quote-box");
  quoteDiv.innerHTML = html;
  changeBackgroundColor();
}

// Changes the background color of the body tag with a randomly chosen color from the colors array

function changeBackgroundColor() {
  var colors = ['#ffff00', '#ff3333', '#ff1aff', '#1a75ff', '#00ff00'];
  var randomIndex = Math.floor(Math.random() * (colors.length - 1) + 1);
  var randomColor = colors[randomIndex];

  var myElement = document.getElementsByTagName("body");
  myElement[0].style.backgroundColor = randomColor;
}

// Every 20 seconds calls the printQuote function, thus changing the quote and the background color.

window.setInterval(printQuote, 20000);