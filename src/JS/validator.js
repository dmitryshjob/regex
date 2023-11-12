export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUsername() {
    // Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);
    let res = this.username.match(/[^\w-_]/);

    if (res !== null) {
      console.log('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
      return false;
    }

    // Имя не должно содержать подряд более трёх цифр
    res = this.username.match(/.+\d{3}/);
    if (res !== null) {
      console.log('Имя не должно содержать подряд более трёх цифр');
      return false;
    }
    // Имя не должно начинаться цифрами, символами подчёркивания или тире.
    res = this.username.match(/^[\d-_]/);
    if (res !== null) {
      console.log('Имя не должно начинаться цифрами, символами подчёркивания или тире');
      return false;
    }

    // Имя не должно заканчиваться цифрами, символами подчёркивания или тире.
    res = this.username.match(/[\d-_]$/);
    if (res !== null) {
      console.log('Имя не должно заканчиваться цифрами, символами подчёркивания или тире');
      return false;
    }

    return true;
  }
}


