import { useState } from 'react';

const useForm = (initialForm: any) => {
  const [values, setValues] = useState<any>();

  const handleChange = (name: string, value: string) => {
    setValues((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setValues(initialForm);
  };

  return { handleChange, values, resetForm };
};

export default useForm;
