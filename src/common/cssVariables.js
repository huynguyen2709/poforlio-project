var style = window.getComputedStyle(document.getElementById("root-element"));

console.log("oke:", style.getPropertyValue("--title-color"));

// SET VARIABLES
const titleColor = style.getPropertyValue("--title-color");
const containerColor = style.getPropertyValue("--container-color");
const fontMedium = style.getPropertyValue("--font-medium");
const titleColorDark = style.getPropertyValue("--title-color-dark");

const zIndexFTooltip = style.getPropertyValue("--z-tooltip");
const zIndexFix = style.getPropertyValue("--z-fixed");
const zIndexModal = style.getPropertyValue("--z-modal");
export const testBg = style.getPropertyValue("--test-bg");

export {
  titleColor,
  containerColor,
  fontMedium,
  titleColorDark,
  zIndexFTooltip,
  zIndexFix,
  zIndexModal,
};
