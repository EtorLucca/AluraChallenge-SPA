function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "O CPF deve ter 11 dígitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarPassword(password) {
  if (password.length < 4 || password.length > 72) {
    return { valido: false, texto: "A senha deve ter entre 4 e 72 dígitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validarCpf, validarPassword };