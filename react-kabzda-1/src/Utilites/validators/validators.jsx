export const required = value => (value || typeof value === 'number') ? undefined : 'Required'

export const maxLength = max => value =>
  value && value.length > max ? `MaxLength is ${max} symbols` : undefined
export const maxLength50 = maxLength(50);
export const maxLength10 = maxLength(10);
export const maxLength15 = maxLength(15);

export const minLength = min => value =>
  value && value.length < min ? `MinLength is 5 symbols` : undefined
export const minLength5 = minLength(5);

