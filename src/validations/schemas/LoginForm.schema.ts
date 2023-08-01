import joi from 'joi';

const username = joi.string().required().messages({
  'any.required': 'O nome de usuário não pode ser vazio',
  'string.empty': 'O nome de usuário não pode ser vazio',
});
const password = joi.string().required().messages({
  'any.required': 'A senha não pode ser vazia',
  'string.empty': 'A senha não pode ser vazia',
});

export default {
  username,
  password,
};
