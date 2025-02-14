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
    "$1,234.56",
    "hello world  #with spaces",
    "invalid email@domain",
    "https://example.com/?query=abc#fragment"
];

// Updated Regular Expressions
let email = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?!\s)/g;
let url = /https?:\/\/(?:[a-zA-Z0-9.-]+)(?:\/[^\s]*)?/g;
let creditCard = /\b(?:\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}|\d{16})\b/g;
let phone = /\(?\+?\d{1,4}?\)?[\s.-]?\(?\d{1,4}?\)?[\s.-]?\d{1,4}[\s.-]?\d{1,4}/g;
let time = /(?:\b([01]?\d|2[0-3]):([0-5]\d)\b|\b(1?[0-2]):([0-5]\d)\s?(AM|PM)\b)(?!\s)/gi;
let htmlTag = /<([a-zA-Z][a-zA-Z0-9]*)([^>]*)(?<!\/)>/g;
let hashtag = /#[A-Za-z0-9_]+/g;
let currency = /\$\s?\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g;

// Separate matches into their own arrays
let emails = myStrings.filter(str => str.match(email));
let urls = myStrings.filter(str => str.match(url));
let creditCards = myStrings.filter(str => str.match(creditCard));
let phoneNumbers = myStrings.filter(str => str.match(phone));
let times = myStrings.filter(str => str.match(time));
let htmlTags = myStrings.filter(str => str.match(htmlTag));
let hashtags = myStrings.filter(str => str.match(hashtag));
let currencyAmounts = myStrings.filter(str => str.match(currency));

// Run tests
console.log("Testing Regular Expressions with Edge Case Handling:");
console.log("Emails:", emails);
console.log("URLs:", urls);
console.log("Credit Card Numbers:", creditCards);
console.log("Phone Numbers:", phoneNumbers);
console.log("Times:", times);
console.log("HTML Tags:", htmlTags);
console.log("Hashtags:", hashtags);
console.log("Currency:", currencyAmounts);
