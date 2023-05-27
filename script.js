const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};
 
function rot13(encodedStr){
   const words = encodedStr.split(" ");  // String to Array
   let decodedArr = []; // Your Result goes here
  // Only change code below this line
   for(let i=0; i< words.length; i++){
        const word = words[i]
        let decoded_word  = ''
        for(let j = 0; j < word.length; j++) {
            const char = word.charAt(j)
            const decoded_char = lookup[char]
            decoded_word += decoded_char
        }
        decodedArr.push(decoded_word)
     }
        return decodedArr.join(" ");
}
module.exports = rot13;