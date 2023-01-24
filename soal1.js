// run npm install prompt-sync untuk mendapatkan package prompt
// run node soal1.js untuk menjalankan program

const prompt = require("prompt-sync")();
let input = prompt("Input one line of word : ");
function vowelConsonant(input) {
  //menggunakan method yang sudah ada di javascript untuk membersihkan input
  input = input.split(" ").join("");
  input = input.toLowerCase();

  //menentukan variable yang akan dipakai untuk loop
  let i = 0;
  let k = input.length;
  //membuat variable arr penyimpan data
  vowels = [];
  consonants = [];
  //looping
  while (i < k) {
    //check vowels
    if (
      input[i] === "a" ||
      input[i] === "e" ||
      input[i] === "i" ||
      input[i] === "o" ||
      input[i] === "u"
    ) {
      //check apakah huruf sudah ada jika sudah splice ke tempat awalnya
      if (vowels.includes(input[i])) {
        j = vowels.indexOf(input[i]);
        vowels.splice(j, 0, input[i]);
      }
      //jika tidak splice ke i
      else {
        vowels.splice(i, 0, input[i]);
      }
      // jika tidak vowels maka consonant
    } else {
      //check apakah huruf sudah ada jika sudah splice ke tempat awalnya
      if (consonants.includes(input[i])) {
        j = consonants.indexOf(input[i]);
        consonants.splice(j, 0, input[i]);
      }
      //jika tidak splice ke i
      else {
        consonants.splice(i, 0, input[i]);
      }
    }
    i++;
  }
  console.log("Vowels Characters : ");
  console.log(vowels.join(""));
  console.log("Consonants Characters : ");
  console.log(consonants.join(""));
}

vowelConsonant(input);
