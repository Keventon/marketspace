import { View, ImageBackground, TouchableOpacity, Text } from "react-native";
import { Plus, X } from "phosphor-react-native";
import { colors } from "@/styles/colors";

interface ImagePickerBoxProps {
  imageUri?: string;
  onAdd: () => void;
  onRemove?: () => void;
}

export function ImagePickerBox({
  imageUri,
  onAdd,
  onRemove,
}: ImagePickerBoxProps) {
  return (
    <TouchableOpacity
      onPress={onAdd}
      style={{ width: 100, height: 100 }}
      activeOpacity={0.8}
    >
      <ImageBackground
        source={imageUri ? { uri: imageUri } : undefined}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: imageUri ? "transparent" : colors.gray[5],
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 6,
          overflow: "hidden",
        }}
      >
        {!imageUri ? (
          <Plus size={24} color={colors.gray[3]} />
        ) : (
          <>
            {onRemove && (
              <TouchableOpacity
                onPress={onRemove}
                style={{
                  position: "absolute",
                  top: 4,
                  right: 4,
                  backgroundColor: "rgba(0,0,0,0.6)",
                  borderRadius: 99,
                  padding: 2,
                }}
              >
                <X size={14} color={colors.gray[7]} />
              </TouchableOpacity>
            )}
          </>
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
}
