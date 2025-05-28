import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { Check } from "phosphor-react-native";

interface Props {
  label: string;
  checked: boolean;
  onToggle: () => void;
}

export function Checkbox({ label, checked, onToggle }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onToggle}
      activeOpacity={0.8}
    >
      <View style={[styles.box, checked && styles.checkedBox]}>
        {checked && <Check size={14} color={colors.gray[7]} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    height: 20,
    width: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.gray[4],
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    backgroundColor: colors.gray[6],
  },
  checkedBox: {
    backgroundColor: colors.blue_light,
    borderColor: colors.blue_light,
  },
  label: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    color: colors.gray[2],
  },
});
