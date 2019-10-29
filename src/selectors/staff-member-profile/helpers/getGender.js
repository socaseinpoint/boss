export const getGender = (gender) => {
  if (gender.toLowerCase() === 'female') {
    return {
      label: 'Female',
      value: 'Female',
    };
  }

  if (gender.toLowerCase() === 'male') {
    return {
      label: 'Male',
      value: 'Male',
    };
  }

  return null;
};

export default getGender;
