import { CustomText } from "@/components/CustomText/indext";
import { Header } from "@/components/Header";
import { colors } from "@/styles/colors";
import { useState } from "react";
import { StyleSheet, View, ScrollView, Alert } from "react-native";

import * as ImagePicker from "expo-image-picker";
import { ImagePickerBox } from "@/components/ImagePickerBox";
import { Input } from "@/components/Input";
import { RadioButton } from "@/components/RadioButton";
import { CurrencyInput } from "@/components/CurrencyInput";

export default function CreateProduct() {
  const [images, setImages] = useState<string[]>([]);
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const handleAddImage = async () => {
    if (images.length >= 3) return;

    if (!status?.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        Alert.alert(
          "Permissão necessária",
          "É necessário permitir o acesso à galeria para escolher imagens do produto."
        );
        return;
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets[0].uri) {
      setImages((prev) => [...prev, result.assets[0].uri]);
    }
  };

  const handleRemoveImage = (index: number) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  };

  return (
    <View style={styles.container}>
      <Header title="Criar anúncio" />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.contentImage}>
          <CustomText type="bold" fontSize={16} color={colors.gray[2]}>
            Imagens
          </CustomText>
          <CustomText type="regular" fontSize={14} color={colors.gray[3]}>
            Escolha até 3 imagens para mostrar o quanto seu produto é incrível!
          </CustomText>
          <View style={styles.imageBoxContainer}>
            {images.map((uri, index) => (
              <ImagePickerBox
                key={index}
                imageUri={uri}
                onAdd={handleAddImage}
                onRemove={() => handleRemoveImage(index)}
              />
            ))}
            {images.length < 3 && <ImagePickerBox onAdd={handleAddImage} />}
          </View>
        </View>

        <View style={styles.contentProduct}>
          <CustomText type="bold" fontSize={16} color={colors.gray[2]}>
            Sobre o produto
          </CustomText>

          <Input placeholder="Título do anúncio" />
          <Input
            placeholder="Descrição do produto"
            height={160}
            multiline
            iconPassword={false}
            enterKeyHint="next"
          />

          <View style={styles.radioGroup}>
            <RadioButton
              label="Produto novo"
              selected={condition === "new"}
              onPress={() => setCondition("new")}
            />
            <RadioButton
              label="Produto usado"
              selected={condition === "used"}
              onPress={() => setCondition("used")}
            />
          </View>

          <CustomText type="bold" fontSize={16} color={colors.gray[2]}>
            Venda
          </CustomText>

          <CurrencyInput
            value={price}
            onChangeValue={setPrice}
            placeholder="Valor do produto"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[6],
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  contentImage: {
    gap: 12,
  },
  imageBoxContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 12,
  },
  contentProduct: {
    marginTop: 32,
    gap: 12,
  },
  radioGroup: {
    marginTop: 8,
    flexDirection: "row",
    gap: 8,
    marginBottom: 12,
  },
});
