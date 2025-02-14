// Sample strings to test
let myStrings = [
    "user@example.com",
    "firstname.lastname@company.co.uk",
    "https://www.example.com",
    "https://subdomain.example.org/page",
    "1234 5678 9012 3456",
    "1234-5678-9012-3456",
    "(123) 456-7890",
    "123-456-7890",
    "123.456.7890",
    "14:30",
    "2:30 PM",
    "<p>",
    "<div class=\"example\">",
    "<img src=\"image.jpg\" alt=\"description\">",
    "#example",
    "#ThisIsAHashtag",
    "$19.99",
    "$1,234.56"
];

// Regular Expressions
let email = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
let url = /https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}[^\s"]*/g;
let creditCard = /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/g;
let phone = /\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g;
let time = /(?:\b([01]?\d|2[0-3]):([0-5]\d)\b|\b(1?[0-2]):([0-5]\d)\s?(AM|PM)\b)/gi;
let htmlTag = /<[^>]+>/g;
let hashtag = /#[A-Za-z0-9_]+/g;
let currency = /\$\d{1,3}(?:,\d{3})*(\.\d{2})?/g;

// Extract matches
let matches = {
    emails: myStrings.filter(str => str.match(email)),
    urls: myStrings.filter(str => str.match(url)),
    creditCards: myStrings.filter(str => str.match(creditCard)),
    phoneNumbers: myStrings.filter(str => str.match(phone)),
    times: myStrings.filter(str => str.match(time)),
    htmlTags: myStrings.filter(str => str.match(htmlTag)),
    hashtags: myStrings.filter(str => str.match(hashtag)),
    currency: myStrings.filter(str => str.match(currency))
};

// Run tests
console.log("Testing Regular Expressions:");
console.log("Emails:", matches.emails);
console.log("URLs:", matches.urls);
console.log("Credit Card Numbers:", matches.creditCards);
console.log("Phone Numbers:", matches.phoneNumbers);
console.log("Times:", matches.times);
console.log("HTML Tags:", matches.htmlTags);
console.log("Hashtags:", matches.hashtags);
console.log("Currency:", matches.currency);
