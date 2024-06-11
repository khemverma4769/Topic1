const quotes = [
    {
      text: "What are the main features are needed?",
      author: "Answer: Analyzing Security, Dynamic Nature, Time consuming, Accuracy ,Quality and Reliability, Real-Time data"
    },
    {
      text: "What are some examples",
      author: "Answer: •Smart city, •Smart Home, •Auto Pilot, •(Self-Driven Car), •Smart Traffic System, •Smart Phones,  •Healthcare System, •Smart Farming"
    },
    {
      text: "What is an IoT Applications",
      author: "Answer: A network of internet-connected objects able to collect and exchange data using embedded sensors."
    },
    
  ];
  
  const quoteContainer = document.querySelector(".quote-container");
  const quoteText = document.querySelector(".quote-text");
  const quoteAuthor = document.querySelector(".quote-author");
  const newQuoteButton = document.querySelector(".new-quote-button");
  
  function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex].text;
    quoteAuthor.textContent = quotes[randomIndex].author;
  }
  
  displayQuote();
  
  newQuoteButton.addEventListener("click", displayQuote);
  