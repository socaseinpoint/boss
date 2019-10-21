export const fetchStaffMembers = () => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('members');
    });
  })
);

export default fetchStaffMembers;
