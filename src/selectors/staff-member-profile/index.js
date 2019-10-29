export const isProfileLoading = (state) => {
  const profile = state.staffMemberProfile;
  if (profile.loading) {
    return true;
  }

  return false;
};

export const getStatus = (state) => {
  const status = {
    loading: state.staffMemberProfile.loading,
    error: state.staffMemberProfile.error,
  };

  return status;
};
