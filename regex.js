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
let emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
let urlRegex = /https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}[^\s"]*/g;
let creditCardRegex = /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/g;
let phoneRegex = /\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g;
let timeRegex = /(?:\b([01]?\d|2[0-3]):([0-5]\d)\b|\b(1?[0-2]):([0-5]\d)\s?(AM|PM)\b)/gi;
let htmlTagRegex = /<[^>]+>/g;
let hashtagRegex = /#[A-Za-z0-9_]+/g;
let currencyRegex = /\$\d{1,3}(?:,\d{3})*(\.\d{2})?/g;

// Extract matches
let matches = {
    emails: myStrings.filter(str => emailRegex.test(str)),
    urls: myStrings.filter(str => urlRegex.test(str)),
    creditCards: myStrings.filter(str => creditCardRegex.test(str)),
    phoneNumbers: myStrings.filter(str => phoneRegex.test(str)),
    times: myStrings.filter(str => timeRegex.test(str)),
    htmlTags: myStrings.filter(str => htmlTagRegex.test(str)),
    hashtags: myStrings.filter(str => hashtagRegex.test(str)),
    currency: myStrings.filter(str => currencyRegex.test(str))
};

// Run tests
console.log("Testing Regular Expressions:");
console.log("Emails:", matches.emails.length > 0 ? matches.emails : "No match");
console.log("URLs:", matches.urls.length > 0 ? matches.urls : "No match");
console.log("Credit Card Numbers:", matches.creditCards.length > 0 ? matches.creditCards : "No match");
console.log("Phone Numbers:", matches.phoneNumbers.length > 0 ? matches.phoneNumbers : "No match");
console.log("Times:", matches.times.length > 0 ? matches.times : "No match");
console.log("HTML Tags:", matches.htmlTags.length > 0 ? matches.htmlTags : "No match");
console.log("Hashtags:", matches.hashtags.length > 0 ? matches.hashtags : "No match");
console.log("Currency:", matches.currency.length > 0 ? matches.currency : "No match");
