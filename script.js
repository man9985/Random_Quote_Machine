var quotes = [
    {
        quotation: "I got everything I need right here with me. I got air in my lungs, a few blank sheets of paper. I mean, I love waking up in the morning not knowing what's gonna happen or who I'm gonna meet, where I'm gonna end up.", 
        name: "- Jack Dawson",
        movie: "Titanic"
    },
    {
        quotation: "We buy things we don't need, with money we don't have, to impress people we don't like.", 
        name: "- Tyler Durden",
        movie: "Fight Club"
    },
    {
        quotation: "I don't know how to put this but, I'm kind of a big deal.", 
        name: "- Ron Burgundy",
        movie: "Anchorman"
    },
    {
        quotation: "Hard work may not always result in success, but it will never result in regret.", 
        name: "- Billy Beane",
        movie: "Moneyball"
    },
    {
        quotation: "They call it a Royale with cheese.", 
        name: "- Vincent Vega",
        movie: "Pulp Fiction"
    },
    {
        quotation: "Funny how? I mean, funny like I'm a clown? I amuse you? I make you laugh?", 
        name: "- Tommy Devito",
        movie: "Goodfellas"
    },
    {
        quotation: "Hey careful man, there's a beverage here!", 
        name: "- The Dude",
        movie: "The Big Lebowski"
    },
    {
        quotation: "How about a magic trick?", 
        name: "- Joker",
        movie: "The Dark Knight"
    },
    {
        quotation: "Well, dreams, they feel real while we're in them right? It's only when we wake up then we realize that something was actually strange..", 
        name: "- Cobb",
        movie: "Inception"
    },
    {
        quotation: "Alright, Alright, Alright.", 
        name: "- Wooderson",
        movie: "Dazed and Confused"
    }
];

quoteButton.addEventListener("click", function(){
     var randomQuote = Math.floor((Math.random()*quotes.length));
     var getQuote = quotes[randomQuote];
     document.getElementById("quote").innerText = getQuote.quotation;
     document.getElementById("author").innerText = getQuote.name;
     document.getElementById("film").innerText = getQuote.movie;
  
  $("#tweetButton").attr("href", 'https://twitter.com/intent/tweet?text=' + getQuote.quotation + " " + getQuote.name);
  
var colors = ["#001f3f", "#0074D9", "#7FDBFF", "#39CCCC", "#3D9970", "#2ECC40", "#01FF70", "#FFDC00", "#FF851B", "#F012BE"];

var color = Math.floor(Math.random() * colors.length);
      $("body").animate({
        backgroundColor: colors[color],    
      }, 1200);
      $("h1").animate({
        color: colors[color]    
      }, 1200);
});


