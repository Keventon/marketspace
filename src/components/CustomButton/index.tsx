import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { CustomText } from "../CustomText/indext";
import { colors } from "@/styles/colors";
import React from "react";

type Props = TouchableOpacityProps & {
  title: string;
  type: "primary" | "secondary" | "tertiary";
  marginTop?: number;
  icon?: React.ReactNode;
};

export function CustomButton({
  title,
  type = "primary",
  marginTop,
  icon,
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
      <View style={styles.content}>
        {icon && <View>{icon}</View>}

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
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    borderRadius: 6,
    padding: 16,
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
