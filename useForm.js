import { useState } from "react";

export const useForm = (initalValue = {}) => {
  const [formState, setformState] = useState(initalValue);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setformState(initalValue);
  };

  return {
    formState,
    onInputChange,
    onResetForm,
    ...formState,
  };
};
