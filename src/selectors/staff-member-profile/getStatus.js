export const getStatus = (state) => ({
  loading: state.staffMemberProfile.loading,
  error: state.staffMemberProfile.error,
});

export default getStatus;
