const testStrings = [
    "user@example.com", "firstname.lastname@company.co.uk", "https://www.example.com",
    "https://subdomain.example.org/page", "1234 5678 9012 3456", "1234-5678-9012-3456",
    "$19.99", "$1,234.56", "#example", 
    "#ThisIsAHashtag", "<p>", "<div class='example'>", "<img src='image.jpg' alt='description'>"
];

// Regular expressions for selected types
const patterns = {
    // Matches valid email formats and avoids common malformed cases.
    email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?=\b)/g, 

    // Matches credit card numbers with optional spaces or dashes between digits.
    creditCard: /\b(?:\d{4}[-\s]?){3}\d{4}\b/g,

    // Matches currency amounts with or without decimals.
    currency: /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g,

    // Matches hashtags with numbers, underscores, and hyphens.
    hashtag: /#\w+([-_\w]*)/g,  

    // Matches HTML tags with optional attributes and spaces.
    htmlTag: /<\s*([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>/g 
};

// Extract matches and store them in separate arrays
const results = {
    email: [],
    creditCard: [],
    currency: [],
    hashtag: [],
    htmlTag: []
};

for (const str of testStrings) {
    for (const [key, regex] of Object.entries(patterns)) {
        const matches = str.match(regex); // Get matches for the string
        if (matches) {
            results[key] = results[key].concat(matches); // Concatenate matches to the respective array
        }
    }
}

// Display results
console.log("Extracted Matches:", results);
