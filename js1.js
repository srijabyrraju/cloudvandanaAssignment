const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a sentence: ', (input) => {
  const reversedSentence = reverseWords(input);
  console.log('Reversed sentence:', reversedSentence);
  rl.close();
});

function reverseWords(sentence) {
  const words = sentence.split(/\s+/);
  const reversedWords = words.map(word => {
    return word.split('').reverse().join('');
  });
  return reversedWords.join(' ');
}
