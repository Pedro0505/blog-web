import joi from 'joi';

const username = joi.string().min(1).max(50).required().messages({
  'string.base': 'O nome de usuário precisa ser uma string',
  'string.empty': 'O nome de usuário não pode ser vazio',
  'string.min': 'O nome de usuário precisa ter pelo menos {#limit} caracteres',
  'string.max': 'O nome de usuário não pode ter mais que {#limit} caracteres',
  'any.required': 'O nome de usuário é obrigatório',
});

const password = joi
  .string()
  .min(1)
  .max(50)
  .custom((value, helper) => {
    if (!/^[^\s]+$/.test(value)) {
      return helper.message({ custom: 'A senha não pode conter espaços em branco' });
    }

    if (!/[a-zA-Z]/.test(value)) {
      return helper.message({ custom: 'A senha tem que conter pelo menos uma letra' });
    }

    if (!/[0-9]/.test(value)) {
      return helper.message({ custom: 'A senha tem que conter pelo menos um número' });
    }
  })
  .required()
  .messages({
    'string.base': 'A senha precisa ser uma string',
    'string.empty': 'A senha não pode ser vazia',
    'string.min': 'A senha precisa ter pelo menos {#limit} caracteres',
    'string.max': 'A senha não pode ter mais que {#limit} caracteres',
    'any.required': 'A senha é obrigatória',
  });

export default {
  username,
  password,
};
