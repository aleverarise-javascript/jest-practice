const text = "hola mundo";

const fruits = ["manzana", "melon", "mango", "banana"];

test("debe contener un texto ", () => {
  expect(text).toMatch(/mundo/);
});

test("¿Tenemos una banana?", () => {
  expect(fruits).toContain("banana");
});

test("Mayor que otro", () => {
  expect(10).toBeGreaterThan(9);
});

test("Verdadero", () => {
  expect(true).toBeTruthy();
});

const reverseString = (string, callback) => {
  callback(
    string
      .split("")
      .reverse()
      .join("")
  );
};

test("Probar callback", () => {
  reverseString("Hola", str => {
    expect(str).toBe("aloH");
  });
});

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

// test("Probar promesa", () => {
//   return reverString2("Hola").then(string => {
//     expect(string).toBe("aloH");
//   });
// });

// test("Probar Async Await", async () => {
//   const string = await reverString2("Hola");
//   expect(string).toBe("aloH");
// });

// afterEach(() => {
//   console.log("Despues de cada prueba");
// });

// afterAll(() => {
//   console.log("Despues de todas las pruebas");
// });

// beforeEach(() => {
//   console.log("Antes de cada prueba");
// });

// beforeAll(() => {
//   console.log("Antes de todas las pruebas");
// });
