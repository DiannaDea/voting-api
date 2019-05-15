import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const FormInput = (props) => {
  const {
    fieldLabelName, fieldName, fieldValue, onChangeHandler, passwordError,
  } = props;

  return (
    <FormControl margin='normal' required fullWidth>
      <InputLabel htmlFor={fieldName}>{fieldLabelName}</InputLabel>
      <Input
        error={fieldName === 'password' && passwordError}
        name={fieldName}
        type={fieldName}
        id={fieldName}
        value={fieldValue}
        {...(onChangeHandler)
          ? { onChange: event => onChangeHandler(event, fieldName) }
          : null
        }
      />
      {
        (fieldName === 'password' && passwordError)
          ? <FormHelperText error={passwordError}>Invalid password. Must contain at least 6 symbols. Only numbers and letters are allowed</FormHelperText>
          : null
      }
    </FormControl>
  );
};

export default FormInput;
