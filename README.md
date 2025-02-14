
# Regex-based Data Extraction for Web Application

## Prologue

You’ve just graduated from a three-year program and are embarking on your journey as a Junior Full Stack Developer. Excited for the road ahead, you’ve landed a short-term gig to develop a web application for a private organization. As part of the project, you’ve designed an API that aggregates data from various sources on the web and presents relevant information to users based on their requests. 

In order to process and display data accurately, you need to extract specific types of information from hundreds of pages of strings returned by the API. These are the data types that need to be extracted:

- **Email addresses**
- **URLs**
- **Phone numbers**
- **Credit card numbers**
- **Time in 12-hour or 24-hour format**
- **HTML tags**
- **Hashtags**
- **Currency amounts**

You have decided to use the power of Regular Expressions to extract these pieces of information from the string data, having already identified how each type of data appears in the string.

## The Task

As a Junior Full Stack Developer, your task is to implement the Regular Expressions for **at least four** of the data types mentioned above. The goal is to extract information such as:

- **Email addresses**: e.g., `user@example.com`
- **URLs**: e.g., `https://www.example.com`
- **Phone numbers** (various formats): e.g., `(123) 456-7890`, `123-456-7890`, `123.456.7890`
- **Credit card numbers**: e.g., `1234 5678 9012 3456`
- **Time**: e.g., `14:30` (24-hour format) or `2:30 PM` (12-hour format)
- **HTML tags**: e.g., `<p>`, `<div class="example">`
- **Hashtags**: e.g., `#example`, `#ThisIsAHashtag`
- **Currency amounts**: e.g., `$19.99`, `$1,234.56`

## Usage

### 1. **Clone the Repository**
To start working with the project, clone this repository to your local machine:

```bash
git clone https://github.com/{YourUsername}/alu_regex-data-extraction-{YourUsername}.git
```

### 2. **Edit the Code**
Open the JavaScript file (`regexExtractor.js`) and modify the `myStrings` array to include any test strings you want to extract data from.

### 3. **Run the Code**
The code can be executed in a JavaScript environment such as:

- **Browser Console**: Open the developer tools in your browser, paste the code, and hit Enter to run.
- **Node.js**: Save the code to a `.js` file and run it using `node filename.js`.

### 4. **View the Results**
After running the code, the extracted data will be printed in the console, showing results for each regex pattern.

## Regular Expressions Used

The following regular expressions are used to extract different types of data from the sample strings:

1. **Email**: 
   ```js
   /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g
   ```

2. **URL**: 
   ```js
   /https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}[^\s"]*/g
   ```

3. **Credit Card Numbers**:
   ```js
   /\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}/g
   ```

4. **Phone Numbers**:
   ```js
   /\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g
   ```

5. **Time Formats**:
   ```js
   /(?:([01]?\d|2[0-3]):([0-5]\d)|(1?[0-2]):([0-5]\d)\s?(AM|PM))/gi
   ```

6. **HTML Tags**:
   ```js
   /<[^>]+>/g
   ```

7. **Hashtags**:
   ```js
   /#[A-Za-z0-9_]+/g
   ```

8. **Currency**:
   ```js
   /\$\d{1,3}(?:,\d{3})*(\.\d{2})?/g
   ```

## Example Input & Output

### Example Input Strings:
```js
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
    "<div class="example">",
    "<img src="image.jpg" alt="description">",
    "#example",
    "#ThisIsAHashtag",
    "$19.99",
    "$1,234.56"
];
```

### Example Output:
```js
Testing Regular Expressions:
Emails: [ 'user@example.com', 'firstname.lastname@company.co.uk' ]
URLs: [ 'https://www.example.com', 'https://subdomain.example.org/page' ]
Credit Card Numbers: [ '1234 5678 9012 3456', '1234-5678-9012-3456' ]
Phone Numbers: [ '(123) 456-7890', '123-456-7890', '123.456.7890' ]
Times: [ '14:30', '2:30 PM' ]
HTML Tags: [ '<p>', '<div class="example">', '<img src="image.jpg" alt="description">' ]
Hashtags: [ '#example', '#ThisIsAHashtag' ]
Currency: [ '$19.99', '$1,234.56' ]
```

## GitHub Repository Setup

### 1. **Repository Naming**
Ensure the repository is named: `alu_regex-data-extraction-{YourUsername}`.

### 2. **Commit and Collaboration**
Make sure to commit your changes regularly, and follow good GitHub collaboration practices. Your repository should include meaningful commits that document your progress.

## Requirements & Rubric

This assignment requires the following:

1. **Regex Accuracy**: Ensure your regex patterns correctly extract data for at least 5 data types.
2. **GitHub Setup**: Use your ALU email address and create a GitHub repository named according to the instructions.
3. **Code Quality**: Ensure your code is clean, readable, and well-documented. The repository should include a detailed README with setup instructions and an overview of your project.
4. **Edge-Case Handling**: Handle common edge cases like malformed inputs or multiple formats.
5. **Output Presentation**: Your outputs should demonstrate clear and accurate extraction with sample input and test cases.

