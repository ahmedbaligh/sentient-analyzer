export const onValidate = (form, isValid) => {
  form.querySelector('[type="submit"]').disabled = !isValid;

  if (isValid) form.classList.remove('invalid');
  else form.classList.add('invalid');
};
