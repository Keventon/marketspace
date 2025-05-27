import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { Eye, EyeClosed } from "phosphor-react-native";

type Props = TextInputProps & {
  placeholder: string;
  iconPassword?: boolean;
  height?: number;
  visible?: boolean;
  onClick?: () => void;
};

export function Input({
  placeholder,
  iconPassword,
  visible,
  height,
  onClick,
  ...rest
}: Props) {
  return iconPassword ? (
    <View style={[styles.containerPassword, { height: height || 50 }]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.gray[4]}
        selectionColor={colors.blue}
        underlineColorAndroid="transparent"
        cursorColor={colors.blue}
        style={styles.input}
        {...rest}
      />
      {visible ? (
        <TouchableOpacity onPress={onClick}>
          <Eye
            size={20}
            color={colors.gray[3]}
            style={{
              padding: 10,
            }}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onClick}>
          <EyeClosed size={20} color={colors.gray[3]} />
        </TouchableOpacity>
      )}
    </View>
  ) : (
    <View style={[styles.container, { height: height || 50 }]}>
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
  containerPassword: {
    width: "100%",
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderRadius: 6,
    backgroundColor: colors.gray[7],
  },
  input: {
    flex: 1,
    fontFamily: fontFamily.regular,
    fontSize: 16,
    color: colors.gray[1],
    paddingVertical: 8,
  },
});
