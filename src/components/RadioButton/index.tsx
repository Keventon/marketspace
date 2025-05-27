import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";

interface RadioButtonProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}

export function RadioButton({ label, selected, onPress }: RadioButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.circle,
          {
            borderColor: selected ? colors.blue_light : colors.gray[4],
            borderWidth: selected ? 2 : 1,
          },
        ]}
      >
        {selected && <View style={styles.innerCircle} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 24,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: colors.blue_light,
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[2],
  },
});
