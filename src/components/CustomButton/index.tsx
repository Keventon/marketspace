import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { CustomText } from "../CustomText/indext";
import { colors } from "@/styles/colors";

type Props = TouchableOpacityProps & {
  title: string;
  type: "primary" | "secondary";
};

export function CustomButton({ title, type = "primary", ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...rest}
      style={[
        styles.container,
        {
          backgroundColor:
            type === "primary" ? colors.blue_light : colors.gray[5],
        },
      ]}
    >
      <CustomText
        type="bold"
        fontSize={14}
        color={type === "primary" ? colors.gray[7] : colors.gray[2]}
      >
        {title}
      </CustomText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 6,
    padding: 16,
    alignItems: "center",
  },
});
