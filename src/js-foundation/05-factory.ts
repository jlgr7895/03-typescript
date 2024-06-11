//const { getUUId } = require("../plugin/get-id.plugin");
//const { getAge } = require("../plugin/get-age.plugin");
//const { getUUId, getAge } = require("../plugin");

interface BuildMakePersonOptions {
  getUUId: () => string;
  getAge: (birthdate: string) => number;
}

interface PersonOptions {
  name: string;
  birthdate: string;
}

export const buildMakePerson = ({
  getUUId,
  getAge,
}: BuildMakePersonOptions) => {
  return ({ name, birthdate }: PersonOptions) => {
    return {
      id: getUUId(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  };
};

/*
const obj = { name: "John", birthdate: "1995-08-07" };

const john = buildPerson(obj);

console.log(john);
*/
