const cities = ["Santiago", "Bogota", "Lima", "Buenos Aires"];

const randomString = () => {
  return cities[Math.floor(Math.random() * cities.length)];
};

const reverString2 = string => {
  return new Promise((resolve, reject) => {
    if (!string) {
      reject(Error("Error"));
    }
    resolve(
      string
        .split("")
        .reverse()
        .join("")
    );
  });
};

module.exports = randomString;
