function validarPassword(password) {
  if (password.length < 4 || password.length > 72) {
    return { valido: false, texto: "A senha deve ter entre 4 e 72 dígitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarName(name) {
  if (name === "") {
    return { valido: false, texto: "Campo necessário!" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarEmail(email) {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!regex.test(email)) {
    return { valido: false, texto: "Campo necessário" };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validarPassword, validarName, validarEmail };