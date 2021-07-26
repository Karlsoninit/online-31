export const validationNumber = (value) => {
  const validationPhoneSchema =
    /^[+]{0,1}[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/;
  const agreementValidated = validationPhoneSchema.test(value);
  return agreementValidated;
};
