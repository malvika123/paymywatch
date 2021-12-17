const maxLength = (max) => (value) =>
  value && value.length < max ? `Must be ${max} characters or more` : undefined;
export const RegisterBugMaxLength = maxLength(10);
const maxLength15 = maxLength(10);
export const required = (value) => (value ? undefined : "Required");
