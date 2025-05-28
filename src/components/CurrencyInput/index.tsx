import { View, StyleSheet, Platform } from "react-native";
import { MaskedTextInput } from "react-native-mask-text";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";

interface Props {
  value: string;
  onChangeValue: (value: string) => void;
  placeholder?: string;
}

export function CurrencyInput({ value, onChangeValue, placeholder }: Props) {
  return (
    <View style={styles.container}>
      <MaskedTextInput
        type="currency"
        options={{
          prefix: "R$ ",
          decimalSeparator: ",",
          groupSeparator: ".",
          precision: 2,
        }}
        value={value}
        onChangeText={(text, rawValue) => onChangeValue(rawValue)}
        keyboardType="numeric"
        placeholder={placeholder}
        enterKeyHint="done"
        placeholderTextColor={colors.gray[4]}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: Platform.OS === "ios" ? 16 : 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    backgroundColor: colors.gray[7],
  },
  input: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[2],
  },
});
