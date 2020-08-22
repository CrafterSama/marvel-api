export const isObject = (value) => {
  return value && typeof value === 'object' && value.constructor === Object;
}

export const fixedEncodeURIComponent = (str) => {
  return encodeURIComponent(str).replace(/[!'()*]/g, (c) => {
    return '%' + c.charCodeAt(0).toString(16);
  });
};
