// Make "require" available
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// import and require modules
import { franc } from 'franc'
const langs = require("langs")
const colors = require("colors");

const input = process.argv[2];
const langCode = langs.where("3", franc(input));

if (langCode === undefined) {
    console.log('Cannot determine the language, try a longer sample text'.red)
} else {
    const language = langCode.name;
    const response = `${language} is most likely the language`;
    console.log(response.green);
    console.log(response.rainbow);
    console.log(response.rainbow);
}