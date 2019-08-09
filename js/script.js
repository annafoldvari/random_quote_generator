/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/




/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.

var quotes = [
  {
    quote: "You wanna fly, you got to give up the shit that weighs you down.",
    source: "Toni Morrison",
    citation: "Song of Solomon",
    tags: "burdens, empowerment, flying, freedom, unburdening, weight"
  },
  {
    quote: "f you don’t like something, change it. If you can’t change it, change your attitude.",
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