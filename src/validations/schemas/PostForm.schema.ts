import joi from 'joi';

const title = joi.string().min(1).max(50).required().messages({
  'any.required': 'O título não pode ser vazio',
  'string.empty': 'O título não pode ser vazio',
  'string.min': 'O título não pode ser vazio',
  'string.max': 'O título precisa ter entre 1 e 50 caracteres',
});

const description = joi.string().min(1).max(255).required().messages({
  'any.required': 'A descrição não pode ser vazia',
  'string.empty': 'A descrição não pode ser vazia',
  'string.min': 'A descrição não pode ser vazia',
  'string.max': 'A descrição precisa ter entre 1 e 255 caracteres',
});

const category = joi.string().min(1).max(30).required().messages({
  'any.required': 'A categoria não pode ser vazia',
  'string.empty': 'A categoria não pode ser vazia',
  'string.min': 'A categoria não pode ser vazia',
  'string.max': 'A categoria precisa ter entre 1 e 30 caracteres',
});

const content = joi.string().required().messages({
  'any.required': 'O conteúdo não pode ser vazio',
  'string.empty': 'O conteúdo não pode ser vazio',
});

export default {
  title,
  description,
  category,
  content,
};
