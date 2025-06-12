import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { CustomText } from "../CustomText/indext";
import { colors } from "@/styles/colors";
import { XCircle } from "phosphor-react-native";

type Props = TouchableOpacityProps & {
  title: string;
  selected: boolean;
};

export function Condition({ title, selected, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      style={[
        styles.container,
        { backgroundColor: selected ? colors.blue_light : colors.gray[5] },
      ]}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <CustomText
          type="bold"
          fontSize={12}
          color={selected ? colors.gray[6] : colors.gray[3]}
        >
          {title}
        </CustomText>
      </View>

      {selected && <XCircle color={colors.gray[6]} size={16} weight="fill" />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    borderRadius: 99,
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
  },
});
