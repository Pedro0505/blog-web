import { useState } from 'react';

const useForm = <T>(initialForm: T) => {
  const [values, setValues] = useState<T>(initialForm);

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
