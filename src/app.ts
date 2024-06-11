import { buildLogger } from "./plugin";
// const { getUUId, getAge, buildLogger } = require("./plugin");
//const { emailTemplate } = require('./js-foundation/01-template');
//require('./js-foundation/02-destructuring');
//const { getUserById } = require("./js-foundation/04-arrow");
// const { buildMakePerson } = require("./js-foundation/05-factory");
//const getPokemonById = require("./js-foundation/06-promises");

// const logger = buildLogger("app.js");

// logger.log("App started info!");

// logger.error("App started error!");

// getPokemonById(1)
//   .then((pokemon) => console.log(pokemon))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("Pokemon fetched!"));

// ! Reference to factory function
// const makePerson = buildMakePerson({ getUUId, getAge });

// const obj = { name: "John", birthdate: "1995-08-07" };
// const john = makePerson(obj);

// console.log({ john });

const logger = buildLogger("app.js");

logger.log("App started info!");
