const challenges = require("./challenges.json");
const chalk = require("chalk");
const fs = require("fs");

let LOG_TO_CONSOLE = false;

const assertionErrors = (_name, asserts) => {
  const fn = require(`${__dirname}/../index.js`)[_name];
  let errors = [];
  if (!fn) {
    errors.push(
      `Function \`${_name}\` not found in index.js, did you export it?`
    );
  } else {
    asserts.forEach((assert) => {
      let actualOutput = null;
      if (assert.input !== null) {
        actualOutput = fn(...assert.input);
      } else {
        actualOutput = fn();
      }

      if (actualOutput !== assert.output) {
        errors.push(
          `INPUT: ${assert.input || "None"} \n\tEXPECTED: ${
            assert.output
          }\n\tACTUAL: ${actualOutput}`
        );
      }
    });
  }
  return errors.length === 0 ? null : errors;
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
    if (LOG_TO_CONSOLE) {
      if (errors) {
        console.log("❌ ERROR:", chalk.bold.underline(_name));
        errors.forEach((error) => console.log("\t" + chalk.red(error) + "\n"));
      } else {
        console.log("✅ Check:", chalk.bold.underline(_name));
      }
    }
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

if (process.argv.slice(2).includes("--clg")) {
  LOG_TO_CONSOLE = true;
}

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
