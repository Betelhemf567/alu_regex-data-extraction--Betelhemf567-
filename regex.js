let mystring = ["1234 5678 9012 3456",
"1234-5678-9012-3456","<p>",'<div class="example">','<img src="image.jpg" alt="description">' ,"$19.99","$1,234.56","(123) 456-7890","123.456.7890","123-456-7890"
];

let creCard = /\d{4,}(\s|-)\d{4,}(\s|-)\d{4,}(\s|-)\d{4,}/g
let html = /<[^>]+>/g
let curam =/\$\d{1,3}(?:,\d{3})*\.\d{2}/g
let phonum = /\(?\d{3,}\)?(\s|\.|-)\d{3,}(-|\.)\d{4,}/g

let firmatch = mystring[0].match(creCard);
let secmatch = mystring[1].match(creCard);
let thimatch = mystring[2].match(html);
let formatch = mystring[3].match(html);
let fitmatch = mystring[4].match(html);
let sixmatch = mystring[5].match(curam);
let sevmatch = mystring[6].match(curam);
let eimatch = mystring[7].match(phonum);
let ninmatch = mystring[8].match(phonum);
let lastmatch = mystring[9].match(phonum);



console.log(`The matches for the Credit Card Numbers\n${firmatch}\n${secmatch}`);
