export const getStaffType = (staffTypes, id) => {
  const staffType = staffTypes.find((item) => item.id === id);

  if (staffType) {
    return {
      value: String(id),
      label: staffType.name,
    };
  }

  return null;
};

export default getStaffType;
