import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { Text, TextProps } from "react-native";

type Props = TextProps & {
  type: "light" | "regular" | "bold";
  fontSize?: number;
  color?: string;
  children: string;
};

export function CustomText({
  type,
  fontSize,
  color,
  children,
  ...rest
}: Props) {
  return (
    <Text
      {...rest}
      style={{
        fontFamily: fontFamily[type],
        fontSize: fontSize,
        color: color || colors.gray[1],
      }}
    >
      {children}
    </Text>
  );
}
