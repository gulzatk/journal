export function Entry(title, content) {
  this.title = title,
  this.content = content;
}

Entry.prototype.countWord = function() {
  var words = this.content.split(" ");
  return words.length;
}
Entry.prototype.countVowels = function() {
  var content = this.content.toLowerCase();
  var vowelsEx = /[aeiou]/;
  var vowels = vowelsEx.match(content);
  return vowels.length;
}

Entry.prototype.countConsonant = function() {
  var content = this.content.toLowerCase();
  var consonantEx = /[^aeiou]/;
  var consonants = consonantEx.match(content);
  return consonants.length;
}

Entry.prototype.getTeaser = function() {
  var words = this.content.split(".");
  var firstSentence = words[0];

  if (firstSentence.length > 8) {
    return firstSentence.splice(0,8);
  } else {
    return firstSentence;
  }
}
