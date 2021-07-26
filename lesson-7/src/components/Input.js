import { validationNumber } from "./utils/phoneValidation";

const Input = (submitData) => {
  const handleChange = (event) => {
    const value = event.target.value;
    if (!validationNumber(value)) {
      return;
    }

    submitData(value);
  };

  return <input onChange={handleChange} />;
};

export default Input;
