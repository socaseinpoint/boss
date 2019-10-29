export const getGender = (gender) => {
  if (gender === 'Female' || gender === 'female') {
    return {
      label: 'Female',
      value: 'Female',
    };
  }

  if (gender === 'Male' || gender === 'male') {
    return {
      label: 'Male',
      value: 'Male',
    };
  }

  return null;
};

export default getGender;
