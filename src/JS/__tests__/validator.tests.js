import Validator from '../validator.js';

test('Корректное username', () => {
  const user = new Validator('A-z_e12s');
  expect(user.validateUsername()).toBe(true);
});

test('username содержит символы помимо латинских букв, тире -, подчёркивания _ и цифр (0-9)', () => {
  const user = new Validator('&.!+!=!');
  expect(user.validateUsername()).toBe(false);
});

test('username содержит подряд более трёх цифр', () => {
  const user = new Validator('a123a');
  expect(user.validateUsername()).toBe(false);
});

test('username начинаться цифрами', () => {
  const user = new Validator('1a');
  expect(user.validateUsername()).toBe(false);
});

test('username начинаться символом подчёркивания', () => {
  const user = new Validator('_a');
  expect(user.validateUsername()).toBe(false);
});

test('username начинаться с тире', () => {
  const user = new Validator('-a');
  expect(user.validateUsername()).toBe(false);
});

test('username заканчивается цифрами', () => {
  const user = new Validator('a1');
  expect(user.validateUsername()).toBe(false);
});

test('username заканчивается символом подчёркивания', () => {
  const user = new Validator('a_');
  expect(user.validateUsername()).toBe(false);
});

test('username заканчивается с тире', () => {
  const user = new Validator('a-');
  expect(user.validateUsername()).toBe(false);
});