import themeLight from "./themeLight";
import themeDark from "./themeDark";

const themes: any = {
  themeDark,
  themeLight,
};

export default function getTheme(theme: any) {
  return themes[theme];
}
