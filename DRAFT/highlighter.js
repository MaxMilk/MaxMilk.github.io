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
      var nothing = inputText.replaceAll("N/A");
//      alert("The word \"" + inputWord + "\" was not found in the text.");
    }
}
