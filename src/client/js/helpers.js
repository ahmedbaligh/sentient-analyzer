export const onValidate = (form, isValid) => {
  form.querySelector('[type="submit"]').disabled = !isValid;
  return form.classList.toggle('invalid', !isValid);
};
