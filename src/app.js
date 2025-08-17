// Versión inicial
function saludar() {
    console.log("Hola mundo");
}

saludar();

function convertirDistancia(valor, desde, hacia) {
  const unidades = {
    mm: 0.001,
    cm: 0.01,
    m: 1,
    km: 1000,
    mi: 1609.34
  };

  const u1 = desde.toLowerCase();
  const u2 = hacia.toLowerCase();

  if (!(u1 in unidades) || !(u2 in unidades)) {
    return null; 
  }

  if (u1 === u2) {
    return valor;
  }

  const valorEnMetros = valor * unidades[u1];   
  const resultado = valorEnMetros / unidades[u2];

  return resultado;
}
