import {Entry} from './entry';
import './styles.css';

$(document).read(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var content = $('#content').val();

    var entry = new Entry(title, content);
    var wordCount = entry.countWord();
    var vowelsCount = entry.countVowels();
    var consonantCount = entry.countConsonant();
    var getTeaser = entry.getTeaser();

   $("#result").append("<h3> Word Count: " + wordCount + "</h3");
   $("#result").append("<h3> Vowels Count: " + vowelsCount + "</h3");
   $("#result").append("<h3> Consonant Count: " + consonantCount + "</h3");
   $("#result").append("<h3> First sentence: " + getTeaser + "</h3");
  });
});
