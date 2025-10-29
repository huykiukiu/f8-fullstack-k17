const words = ["javascript", "php", "css", "html", "python", "java"];
const wordWithLengthGt5 = [];
const upperLetters = [];
const reverseWords = [];

// Lọc ra các từ có độ dài >= 5.
for (let word of words) {
  if (word.length >= 5) {
    wordWithLengthGt5[wordWithLengthGt5.length] = word;
  }
}
console.log(wordWithLengthGt5);

//Tạo mảng mới viết hoa toàn bộ.
for (let word of words) {
  upperLetters[upperLetters.length] = word.toUpperCase();
}
console.log(upperLetters);

//Tạo mảng mới viết ngược từng chuỗi (tpircsavaj, avaj...).
for (let word of words) {
  let newWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  reverseWords[reverseWords.length] = newWord;
}
console.log(reverseWords);
