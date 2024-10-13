import {defineStyleConfig} from "@chakra-ui/react";
import {customColors} from "../colors";

const baseVariantStyle = {
  minW: '181px',
  w: 'min-content',
}

export const Button = defineStyleConfig({
  baseStyle: {
    // minW: '181px',
    // w: 'min-content',
    py: "13px",
    px: "25px",
    rounded: "30px",
    fontWeight: "medium",
    fontSize: "lg",
    lineHeight: "1.5",
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'transparent',
  },
  variants: {
    primary: {
      ...baseVariantStyle,
      background: customColors.sun["100"],
      color: 'white',
      boxShadow: "0px 4px 10px rgba(252, 132, 45, 0.5)",
      bg: customColors.sun["100"],
      _hover: { background: customColors.sun["200"] },
    },
    outline: {
      ...baseVariantStyle,
      bg: "transparent",
      borderColor: customColors.sun["100"],
      color: customColors.sun["100"],
      _hover: {
        borderColor: customColors.sun["200"],
        color: customColors.sun["200"],
        bg: "transparent",
      },
    },
  },
})
