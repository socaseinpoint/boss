export const formatOptions = (array) => array.map((item) => ({
  label: item.name,
  value: item.id,
}));

export default formatOptions;
