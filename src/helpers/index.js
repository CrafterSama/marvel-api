export const isObject = (value) => {
  return value && typeof value === 'object' && value.constructor === Object;
}

export const fixedEncodeURIComponent = (str) => {
  return encodeURIComponent(str).replace(/[!'()*]/g, (c) => {
    return '%' + c.charCodeAt(0).toString(16);
  });
};

export const listFromCreators = (array, search) => {
  const list = array
    .filter((x) => x.role.includes(search))
    .map((x) => {
      return x.name;
    })
    .join(', ');

  return list;
};
