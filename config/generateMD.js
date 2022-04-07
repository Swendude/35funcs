const challenges = require("./challenges.json");
const fs = require("fs");
var assert = require("assert");

const assertionErrors = (_name, asserts) => {
  const fn = require(`${__dirname}/../index.js`)[_name];
  let errors = [];
  if (!fn) {
    return [`Function \`${_name}\` not found in index.js`];
  } else {
    asserts.forEach((assert) => {
      const actualOutput = fn(assert.input);
      if (actualOutput !== assert.output) {
        errors.push(
          `input: ${assert.input}, expected: ${assert.output}, actual: ${actualOutput}`
        );
      }
    });
    return errors.length === 0 ? null : errors;
  }
};

const challengeTemplate = (
  ix,
  _name,
  description,
  tips = null,
  examples = null,
  assertions = null
) => {
  let statusSymbol = "🔴";
  let errors = null;
  if (assertions) {
    errors = assertionErrors(_name, assertions);
    if (!errors) {
      statusSymbol = "✅";
    } else {
      statusSymbol = "❌";
    }
  }

  let MD = `## ${statusSymbol} ${ix}: ${_name}\n${description}`;
  if (tips) {
    MD = MD + "\n### 🧠 Tips:\n" + tips.map((tip) => `> ${tip}`).join("\n");
  }
  if (examples) {
    MD =
      MD +
      "\n### 💭 Examples:\n" +
      examples.map((example) => `\`\`\`javascript ${example}\`\`\``).join("\n");
  }

  if (errors) {
    MD =
      MD +
      "\n### ⚠️ Errors:\n" +
      errors.map((error) => `\t- ${error}`).join("\n") +
      "";
  }
  return MD;
};

const totalMD = challenges
  .map((challenge, ix) =>
    challengeTemplate(
      ix,
      challenge.name,
      challenge.description,
      challenge.tips,
      challenge.examples,
      challenge.assertions
    )
  )
  .join("\n\n");

try {
  console.log("Generating markdown..");
  fs.writeFileSync(`${__dirname}/../README.MD`, totalMD);
  console.log("Done");
} catch (error) {
  console.log("Error generating Markdown");
  console.log(error);
}
