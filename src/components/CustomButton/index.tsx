import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { CustomText } from "../CustomText/indext";
import { colors } from "@/styles/colors";

type Props = TouchableOpacityProps & {
  title: string;
  type: "primary" | "secondary" | "tertiary";
  marginTop?: number;
};

export function CustomButton({
  title,
  type = "primary",
  marginTop,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...rest}
      style={[
        styles.container,
        {
          marginTop: marginTop,
          backgroundColor:
            type === "primary"
              ? colors.blue_light
              : type === "secondary"
              ? colors.gray[5]
              : colors.gray[1],
        },
      ]}
    >
      <CustomText
        type="bold"
        fontSize={14}
        color={
          type === "primary"
            ? colors.gray[7]
            : type === "secondary"
            ? colors.gray[2]
            : colors.gray[7]
        }
      >
        {title}
      </CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 52,
    justifyContent: "center",
    borderRadius: 6,
    padding: 16,
    alignItems: "center",
  },
});
