import joi from 'joi';
import { HTMLInputTypeAttribute } from 'react';

interface IInputFields {
  name: string;
  validationSchema: joi.Schema;
  inputIcon?: React.ReactNode;
  labelText?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

export default IInputFields;
