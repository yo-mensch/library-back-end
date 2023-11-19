function isValidISBN(isbn) {
    // Remove hyphens and spaces from the ISBN
    if (!isbn) {
        return false;
    }

    const cleanedISBN = isbn.replace(/[-\s]/g, '');
  
    // Check if the cleaned ISBN is either ISBN-10 or ISBN-13
    if (isValidISBN10(cleanedISBN) || isValidISBN13(cleanedISBN)) {
      return true;
    } else {
      return false;
    }
  }
  
  function isValidISBN10(isbn) {
    if (/^\d{10}$/.test(isbn)) {
      // Calculate the checksum for ISBN-10
      const checksum = Array.from(isbn).reduce((acc, digit, index) => {
        return acc + (digit === 'X' ? 10 : parseInt(digit)) * (10 - index);
      }, 0) % 11;
  
      return checksum === 0;
    } else {
      return false;
    }
  }
  
  function isValidISBN13(isbn) {
    if (/^\d{13}$/.test(isbn)) {
      // Calculate the checksum for ISBN-13
      const checksum = Array.from(isbn).reduce((acc, digit, index) => {
        return acc + parseInt(digit) * (index % 2 === 0 ? 1 : 3);
      }, 0) % 10;
  
      return checksum === 0;
    } else {
      return false;
    }
  }
  
  module.exports = {isValidISBN}