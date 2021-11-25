// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup('bdd');

// Establish variables for use in all tests
const { assert, expect } = chai;

describe('Test - Operadores Lógicos II', () => {
  it('Las variables tengoDinero, meDaMiedoVolar y edad existen y tiene el valor correcto', () => {
    expect(tengoDinero).to.be.true;
    expect(meDaMiedoVolar).to.be.false;
    expect(edad).to.equal(30);
  });

  it('Las variable puedoVolar está comprobada correctamente', () => {
    expect(puedoVolar).to.be.true;
  });
});
