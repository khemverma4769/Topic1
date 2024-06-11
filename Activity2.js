const quotes = [
    {
      text: "What are some smart Building scenario?",
      author: "Answer: •Smart Parking System:Having a reserved parking spot saves people time, stress, and money, • Emergency Evacuation system(like electrical leaks) - In case of emergencies like fire, finding safe areas to exit the building Lighting control, •Smart Security System - consisting technologies like face detection for safety purposes, •Smart Guest Guidance System: To automate the guest check-in process,  •Personnel Tracking System"
    },
    {
      text: "What are some examples",
      author: "Answer: •Security, •Quality, •Reliability, •Energy, •Cloud Storage"
    },
    {
      text: "What does smart mean?",
      author: "Answer: Combining traditional systems with the recent technology to create an efficient and secure product."
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
  