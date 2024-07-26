export const omitKey = (obj, removeKey) => {
  const { [removeKey]: _, ...rest } = obj;
  return rest;
};
