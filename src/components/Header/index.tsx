import { View, Text, TouchableOpacity, Platform } from "react-native";
import { useRouter } from "expo-router";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";

interface HeaderProps {
  title?: string;
  icon?: React.ReactNode;
  onIconPress?: () => void;
  orientation?: "left" | "right";
}

export function Header({
  title,
  icon,
  onIconPress,
  orientation = "left",
}: HeaderProps) {
  const router = useRouter();

  return (
    <View
      style={{
        marginTop: Platform.OS === "ios" ? 48 : 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        paddingVertical: 12,
        backgroundColor: colors.gray[6],
      }}
    >
      {orientation === "left" ? (
        <>
          <TouchableOpacity onPress={onIconPress || (() => router.back())}>
            {icon}
          </TouchableOpacity>
          {title && (
            <View
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: colors.gray[1],
                  fontSize: 20,
                  fontFamily: fontFamily.bold,
                }}
              >
                {title}
              </Text>
            </View>
          )}
          <View style={{ width: 24 }} />
        </>
      ) : (
        <>
          <View style={{ width: 24 }} />
          {title && (
            <View
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: colors.gray[1],
                  fontSize: 20,
                  fontFamily: fontFamily.bold,
                }}
              >
                {title}
              </Text>
            </View>
          )}
          <TouchableOpacity onPress={onIconPress}>{icon}</TouchableOpacity>
        </>
      )}
    </View>
  );
}
