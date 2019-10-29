export const getVenue = (venues, id) => {
  const venue = venues.find((item) => item.id === id);

  if (venue) {
    return {
      value: String(id),
      label: venue.name,
    };
  }

  return null;
};

export default getVenue;
