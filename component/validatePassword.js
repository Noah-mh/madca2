function validatePassword(password) {
    // minimum 8 characters
    if (password.length < 8) {
      return {
        isValid: false,
        error: "Password must be at least 8 characters long"
      };
    }
  
    // check for mix of letters, numbers, and symbols
    let hasLetters = false;
    let hasNumbers = false;
    let hasSymbols = false;
    let letters = /[A-Za-z]/;
    let numbers = /[0-9]/;
    let symbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
  
    for (let i = 0; i < password.length; i++) {
      if (password[i].match(letters)) {
        hasLetters = true;
      } else if (password[i].match(numbers)) {
        hasNumbers = true;
      } else if (password[i].match(symbols)) {
        hasSymbols = true;
      }
    }
  
    if (!hasLetters || !hasNumbers || !hasSymbols) {
      return {
        isValid: false,
        error: "Password must contain a mix of letters, numbers, and symbols"
      };
    }
  
    return {
      isValid: true,
      error: ""
    };
  }

  export default validatePassword;