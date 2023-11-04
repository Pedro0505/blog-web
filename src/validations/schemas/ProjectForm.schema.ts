import Joi from 'joi';

const name = Joi.string().min(1).max(50).required().messages({
  'string.base': 'O nome precisa ser uma string',
  'string.empty': 'O nome não pode ser vazio',
  'string.min': 'O nome precisa ter pelo menos {#limit} caracteres',
  'string.max': 'O nome não pode ter mais que {#limit} caracteres',
  'any.required': 'O nome é obrigatório',
});

const url = Joi.string().required().messages({
  'string.base': 'A URL precisa ser uma string',
  'string.empty': 'A URL não pode ser vazia',
  'any.required': 'A URL é obrigatória',
});

const description = Joi.string().min(1).max(255).required().messages({
  'string.base': 'A descrição precisa ser uma string',
  'string.empty': 'A descrição não pode ser vazia',
  'string.min': 'A descrição precisa ter pelo menos {#limit} caracteres',
  'string.max': 'A descrição não pode ter mais que {#limit} caracteres',
  'any.required': 'A descrição é obrigatória',
});

export { name, url, description };
