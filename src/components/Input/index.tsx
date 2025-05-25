import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

type Props = TextInputProps & {
  placeholder: string;
};

export function Input({ placeholder, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.gray[4]}
        selectionColor={colors.blue}
        underlineColorAndroid="transparent"
        cursorColor={colors.blue}
        style={styles.input}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    backgroundColor: colors.gray[7],
  },
  input: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    color: colors.gray[1],
  },
});
