function encrypt() {
    var input = document.getElementById("input").value.toLowerCase();
    var output = "";
  
    for (var i = 0; i < input.length; i++) {
      var currentChar = input.charAt(i);
      var encryptedChar = "";
  
      switch (currentChar) {
        case "e":
          encryptedChar = "enter";
          break;
        case "i":
          encryptedChar = "imes";
          break;
        case "a":
          encryptedChar = "ai";
          break;
        case "o":
          encryptedChar = "ober";
          break;
        case "u":
          encryptedChar = "ufat";
          break;
        default:
          encryptedChar = currentChar;
      }
  
      output += encryptedChar + "    "; // Espacio 4 veces mayor
    }
  
    document.getElementById("result").value = output;
  }
  
  function decrypt() {
    var input = document.getElementById("output").value.toLowerCase();
    var output = "";
  
    var words = input.split("    "); // Espacio 4 veces mayor
  
    for (var i = 0; i < words.length; i++) {
      var currentWord = words[i];
      var decryptedWord = "";
  
      var j = 0;
      while (j < currentWord.length) {
        var encryptedChar = currentWord.substr(j, 4);
        var decryptedChar = "";
  
        switch (encryptedChar) {
          case "ente":
            decryptedChar = "e";
            break;
          case "imes":
            decryptedChar = "i";
            break;
          case "ai":
            decryptedChar = "a";
            break;
          case "ober":
            decryptedChar = "o";
            break;
          case "ufat":
            decryptedChar = "u";
            break;
          default:
            decryptedChar = encryptedChar;
        }
  
        decryptedWord += decryptedChar;
        j += 4;
      }
  
      output += decryptedWord + " ";
    }
  
    document.getElementById("result").value = output;
  }
  