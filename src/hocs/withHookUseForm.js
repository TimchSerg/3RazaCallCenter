import React from 'react';
import {useForm} from 'react-hook-form';

export const withHookUseForm = (Component) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const {register, handleSubmit, control, setError, setValue, errors} = useForm();

    return <Component
      register={register}
      handleSubmit={handleSubmit}
      control={control}
      setError={setError}
      setValue={setValue}
      errors={errors}
      {...props}
    />;
  };
};
