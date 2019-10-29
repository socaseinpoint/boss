export const getOption = (list, id) => {
  const option = list.find((item) => item.id === id);

  if (option) {
    return {
      value: String(id),
      label: option.name,
    };
  }

  return null;
};

export default getOption;
