class Codigo {
  constructor(idCodigo, codigo, description) {
    this.idCodigo = idCodigo;
    this.codigo = codigo;
    this.description = description;
  }

  save(idCodigo, codigo, description) {
    return idCodigo;
  }

  update(codigo, description) {
    return 1;
  }

  findByCodigo(codigo) {
    return Codigo;
  }

  findByDescription(description) {
    return Codigo;
  }
}
