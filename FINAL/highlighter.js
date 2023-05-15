function highlightText() {
  // get input
  var inputText = document.getElementById("input-text").value;
  var inputWord = document.getElementById("input-word").value;

  // # count
  var count = (inputText.match(new RegExp(inputWord, 'gi')) || []).length;

  if (count > 0) {
    // replace old with new 
    var boldedText = inputText.replaceAll(new RegExp('(' + inputWord + ')', 'gi'), "<strong>$1</strong>");
    
    // new div element 
    var resultDiv = document.createElement("div");
    resultDiv.classList.add("result-box");
    
    var template = `
      <p>Search: "${inputWord}"</p>
      <p>Count: ${count}</p>
      <p>Text: ${boldedText}</p>
    `;
    
    // Set the HTML content of the result div to the template
    resultDiv.innerHTML = template;
    
    // Insert the new div element at the beginning of the output container
    var outputDiv = document.getElementById("output");
    outputDiv.insertBefore(resultDiv, outputDiv.firstChild);
  } else {
    alert("The word \"" + inputWord + "\" was not found in the text.");
  }
}

/* 

function highlightText() {
    //input text/word
    var inputText = document.getElementById("input-text").value;
    var inputWord = document.getElementById("input-word").value;
  
    //counts number of occourances
    var count = (inputText.match(new RegExp(inputWord, 'gi')) || []).length;
  
    // check for word in text
    if (count > 0) {
      // Replace all occurrences of the word with bolded version
      var bolded = inputText.replaceAll(new RegExp('(' + inputWord + ')', 'gi'), "<strong>$1</strong>");
      
      // count
      var outputDiv = document.getElementById("output");
      outputDiv.innerHTML = "Count: " + count + "<br>" + bolded;
    } else {
      alert("The word \"" + inputWord + "\" was not found in the text.");
    }
}
*/

