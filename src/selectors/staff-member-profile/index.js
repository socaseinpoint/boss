export const isProfileLoading = (state) => {
  const profile = state.staffMemberProfile;
  if (profile.loading) {
    return true;
  }

  return false;
};
