export const getStatus = (state) => {
  const status = {
    loading: state.staffMemberProfile.loading,
    error: state.staffMemberProfile.error,
  };

  return status;
};

export default getStatus;
