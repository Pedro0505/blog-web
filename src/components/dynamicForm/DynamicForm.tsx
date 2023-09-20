import React, { ChangeEvent, useRef, useState } from 'react';
import joi from 'joi';
import Axios from 'axios';
import InputLabel from '../InputLabel/InputLabel';
import ButtonIcon from '../buttonIcon/ButtonIcon';
import IInputFields from './interfaces/IInputFields';
import IButtonForm from './interfaces/IButtonForm';
import InputIcon from '../inputIcon/InputIcon';
import handleApiErrors from '../../helpers/handleApiErrors';
import './style.css';

interface DynamicFormProps<T> {
  fields: IInputFields[];
  onSubmit: () => Promise<void>;
  cleanForm?: () => void;
  onFieldChange: (name: string, value: string) => void;
  button?: IButtonForm;
  children?: React.ReactNode;
  errorMsgRef?: React.Dispatch<React.SetStateAction<any>>;
  values?: T | any;
}

function DynamicForm<T>({
  fields,
  onSubmit,
  onFieldChange,
  children,
  cleanForm = () => {},
  button = { name: 'Submit', style: {} },
  errorMsgRef = useState([])[1],
  values = {},
}: DynamicFormProps<T>) {
  const initialValues: Record<string, string> = {};
  const initialErrors: Record<string, string> = {};
  const validationSchemas: Record<string, joi.Schema> = {};

  fields.forEach(field => {
    initialValues[field.name] = '';
    initialErrors[field.name] = '';
    validationSchemas[field.name] = field.validationSchema;
  });

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const errorRef = useRef(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues(prevValues => ({ ...prevValues, [name]: value }));
    onFieldChange(name, value);
  };

  const handleError = () => {
    errorRef.current = false;
    const fieldErrors: Record<string, string> = {};

    for (const field of fields) {
      const fieldSchema = field.validationSchema.validate(formValues[field.name], { abortEarly: false });
      if (fieldSchema.error) {
        errorRef.current = true;
        fieldErrors[field.name] = fieldSchema.error.message;
      } else {
        fieldErrors[field.name] = '';
      }
    }

    setFormErrors(fieldErrors);
  };

  const handleSubmit = async () => {
    try {
      handleError();

      if (!errorRef.current) {
        await onSubmit();

        cleanForm();
      }

      errorMsgRef([]);
    } catch (error) {
      console.log(error);

      if (Axios.isAxiosError(error)) {
        errorMsgRef(handleApiErrors(error));
      }
    }
  };

  return (
    <form name="dynamic-form" className="dynamic-form-container">
      {fields.map(field =>
        !field.inputIcon ? (
          <InputLabel
            key={field.name}
            name={field.name}
            id={`${field.name}-field`}
            onChange={handleChange}
            labelText={field.labelText}
            error={formErrors[field.name]}
            placeholder={field.placeholder}
            type={field.type}
            value={values[field.name]}
          />
        ) : (
          <InputIcon
            key={field.name}
            name={field.name}
            id={`${field.name}-field`}
            onChange={handleChange}
            labelText={field.labelText}
            error={formErrors[field.name]}
            icon={field.inputIcon}
            placeholder={field.placeholder}
            type={field.type}
            value={values[field.name]}
          />
        ),
      )}
      {children}
      <ButtonIcon icon={button.icon} style={button.style} name={button.name} onClick={handleSubmit} type="button" />
    </form>
  );
}

export default DynamicForm;
