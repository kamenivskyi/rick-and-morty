const logoCommonStyles = {
  mr: 2,
  color: "inherit",
  textDecoration: "none",
};

export const headerLogoDesktopStyles = {
  display: { xs: "none", md: "flex" },
  ...logoCommonStyles,
};

export const headerLogoPhoneStyles = {
  display: { xs: "flex", md: "none" },
  flexGrow: 1,
  ...logoCommonStyles,
};
