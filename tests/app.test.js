// Instalar las dependencias (paquetes / librerias) para poder ejecutar los tests
// npm install jest supertest
// Jest ==> Motor de ejecucion de nuestros test
// Supertest ==> Funcionalidades extra para poder correr test que involucren peticiones HTTP

// Los archivos de test deben teminar con la extension:
// .test (app.test.js)
// .spec (app.spec.js)

// Importar un paquete instalado
const supertest = require("supertest");

// Importar un archivo desarrollado en el proyecto
const app = require("../app.js");

// Estructura de la funcion describe ==> describe(MENSAJE DESCRIPTIVO DEL BLOQUE DE TESTS, FUNCION QUE ALOJA TODOS LOS TESTS)
describe("Tests for exercise #1", () => {
  // it() === test()
  // Estructura de la funcion it/test ==> it(MENSAJE DESCRIPTIVO, FUNCION DONDE SE EVALUA EL TEST)

  // TEST /Borg
  it("should return plain text: 'Resistance is futile'", () => {
    const expected = "Resistance is futile";

    // El expect encadenado evalua el STATUS CODE si se le envia un numero
    // O un texto si se le envia un string
    const result = supertest(app).get("/Borg");
  });

  // TEST /Zeus
  it("should return plain text: Release 'the Kraken'", () => {
    const expected = "Release the Kraken";
    const result = supertest(app).get("Zeus").expect(expected);
  });

  // TEST /Rocky
  it("should return plain text: Yo, Adrian", () => {
    const expected = "Yo, Adrian";
    const result = supertest(app).get("Rocky").expect(expected);
  });

  // ....
});

// Crear un bloque de describe para el ejercicio #2
// Testear la ruta /magic8
