export const getPayRate = (payRates, id) => {
  const payRate = payRates.find((item) => item.id === id);

  if (payRate) {
    return {
      value: String(id),
      label: payRate.name,
    };
  }

  return null;
};

export default getPayRate;
