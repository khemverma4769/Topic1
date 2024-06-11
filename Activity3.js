const quotes = [
    {
      text: "What are the parts needed?",
      author: "Answer: ••Smart Parking System: For every parking region, Infra-Red (IR) sensors are located and IR sensors would recognise the number of parking slots, Number of free and booked slots are explicitly presented in LCD screen, WIFI module is utilized for communication between mobile app and sensors. •Smart Security System: IoT provides smart security by combining AI to enhance the performance of devices such as CCTV cameras, smart lights, doorbells, and fire sensors."
    },
    {
            
            text: "who are the users?",
      author: "Answer: Smart Parking System: Residents using the parking lot, Smart Security System, Emergency Evacuation System - Residents, Staff and Visitors"
    },
    {
      text: "What are the high-level features?",
      author: "Answer: Must be Appropriate and Adequate Flexibility, Power Optimisation, Comfort, Security and Privacy"
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
  