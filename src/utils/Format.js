export const Format = (str) => {
  return str.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
}
