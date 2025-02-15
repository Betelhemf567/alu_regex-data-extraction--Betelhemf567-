
# Data Extraction Web Application

## Project Overview
This project is built to extract specific types of data from strings using Regular Expressions (Regex). It targets the following data types:

- **Email addresses**
- **Credit card numbers**
- **Currency amounts**
- **Hashtags**
- **HTML tags**

The solution processes input strings, extracts relevant data using regex, and outputs the results in a structured format.

## Features
- Extracts **Email addresses**, **Credit card numbers**, **Currency amounts**, **Hashtags**, and **HTML tags** from input strings.
- Handles edge cases such as malformed emails and various credit card formats.
- Outputs results in a clean format for easy reading.

## Setup Instructions

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Betelhemf567/alu_regex-data-extraction--Betelhemf567-.git
   ```

2. Navigate to the project folder:
   ```bash
   cd alu_regex-data-extraction--Betelhemf567-
   ```

3. Open `regex.js` in your text editor and modify the `testStrings` array as needed with your data.

4. Run the script directly in your browser's developer console or run it using Node.js:
   ```bash
   node regex.js
   ```

5. View the extracted data in the console.

## Technologies Used
- JavaScript for regex data extraction.

## Edge Case Handling
The regex patterns are designed to handle common edge cases like:
- Malformed email addresses.
- Multiple formats of credit card numbers (e.g., with spaces or dashes).
- Variations in currency formats, including thousands separators and decimal places.

## For further explanation and any question contact:
    Betelhemf567 github username and email: b.chelebo@alustudent.com

## License
This project is licensed under the MIT License.
