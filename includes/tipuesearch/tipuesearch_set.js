
/*
Tipue Search 5.0
Copyright (c) 2015 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/

var tipuesearch_pages = ["http://dev.hajtek.se/new/", "http://dev.hajtek.se/new/about.html"];

/*
Stop words
Stop words list from http://www.ranks.nl/stopwords
*/

var tipuesearch_stop_words = ["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during", "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my", "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"];


// Word replace

var tipuesearch_replace = {'words': [
     {'word': 'tipua', 'replace_with': 'tipue'},
     {'word': 'javscript', 'replace_with': 'javascript'},
     {'word': 'jqeury', 'replace_with': 'jquery'}
]};


// Weighting

var tipuesearch_weight = {'weight': [
     {'url': 'http://dev.hajtek.se/new/', 'score': 200},
     {'url': 'http://dev.hajtek.se/new/about.html/', 'score': 100},
     {'url': 'http://dev.hajtek.se/new/about.html/', 'score': 100}
]};


// Stemming

var tipuesearch_stem = {'words': [
     {'word': 'e-mail', 'stem': 'email'},
     {'word': 'javascript', 'stem': 'jquery'},
     {'word': 'javascript', 'stem': 'js'}
]};


// Internal strings

var tipuesearch_string_1 = 'Ingen titel';
var tipuesearch_string_2 = 'Visar resultat för';
var tipuesearch_string_3 = 'Sök istället på';
var tipuesearch_string_4 = '1 resultat';
var tipuesearch_string_5 = 'resultat';
var tipuesearch_string_6 = 'Föregående';
var tipuesearch_string_7 = 'Nästa';
var tipuesearch_string_8 = 'Hittade inget';
var tipuesearch_string_9 = 'Vanliga ord är till stor del ignorerade';
var tipuesearch_string_10 = 'För kort sökfras';
var tipuesearch_string_11 = 'Måste vara en karaktär eller mer';
var tipuesearch_string_12 = 'Bör vara';
var tipuesearch_string_13 = 'karaktärer eller mer';
