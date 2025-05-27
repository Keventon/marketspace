import { View, Text, TouchableOpacity, Platform } from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft, Pencil } from "phosphor-react-native";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";

interface HeaderProps {
  title?: string;
  onEditPress?: () => void;
}

export function Header({ title, onEditPress }: HeaderProps) {
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
      <TouchableOpacity onPress={() => router.back()}>
        <ArrowLeft size={24} color={colors.gray[1]} />
      </TouchableOpacity>

      {title ? (
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
      ) : (
        <TouchableOpacity onPress={onEditPress}>
          <Pencil size={24} color={colors.gray[1]} />
        </TouchableOpacity>
      )}
    </View>
  );
}
