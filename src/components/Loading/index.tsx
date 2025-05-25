import { colors } from "@/styles/colors";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./syles";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.blue} />
    </View>
  );
}
