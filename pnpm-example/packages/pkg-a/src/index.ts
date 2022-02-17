import { FontSizes, FontWeights, ITheme, IStyle } from "@fluentui/react";

const contactText = (theme: ITheme) => ({
  fontSize: FontSizes.size14,
  lineHeight: "20px",
  color: theme.palette.themeDarkAlt,
});

const persona: IStyle = {
  position: "relative",
  margin: "4px 0px 0px",
};

const info = (theme: ITheme) => ({
  fontSize: FontSizes.size14,
  lineHeight: "20px",
  textTransform: "capitalize",
  color: theme.palette.neutralPrimary,
});

const personaInfo: IStyle = {
  personaInfo: {
    width: "359px",
    paddingRight: "24px",
  },
};

export const personScopeListItemOverrides = (
  personaSize: number,
  isSmall: boolean
) => {
  const personaInfoForSmall = {
    personaInfo: {
      marginLeft: `${personaSize + 12}px`,
      width: "auto",
    },
  };

  return {
    personScopeListItem: (theme: ITheme) => ({
      personFullName: {
        fontWeight: FontWeights.semibold,
        fontSize: FontSizes.size16,
        color: theme.palette.themeDarkAlt,
        lineHeight: "22px",
      },
      personAdditionalInfo: info(theme),
      personSkillInfo: {
        ...info(theme),
        marginBottom: !isSmall ? "0px" : "4px",
      },
      ...(isSmall ? personaInfoForSmall : personaInfo),
      column: {
        selectors: {
          ":first-child": {
            display: "flex",
          },
          ":last-child": {
            alignSelf: "start",
          },
        },
      },
      personaInfo: {
        marginLeft: "12px",
      },
      persona,
    }),
    contactActions: (theme: ITheme) => ({
      text: [contactText(theme)],
      contactAction: {
        color: theme.palette.neutralPrimary,
        ...(isSmall && { marginLeft: `${personaSize + 12}px` }),
        textDecoration: "none",
        letterSpacing: "normal", // needed to override Office.com host app style
        selectors: {
          ":hover": {
            textDecoration: "none",
          },
          ":hover > span": {
            textDecoration: "underline",
          },
        },
      },
      icon: [{ verticalAlign: "middle" }],
    }),
    departmentOfficeInline: (theme: ITheme) => ({
      officeLocationInline: info(theme),
      departmentInline: info(theme),
      departmentOfficeLocationContainer: {
        height: "fit-content",
        marginTop: "4px",
      },
    }),
  };
};