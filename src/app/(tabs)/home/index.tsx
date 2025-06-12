import { CustomButton } from "@/components/CustomButton";
import { CustomText } from "@/components/CustomText/indext";
import { colors } from "@/styles/colors";
import {
  ArrowRight,
  MagnifyingGlass,
  Plus,
  Sliders,
  Tag,
  X,
} from "phosphor-react-native";
import {
  Image,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { fontFamily } from "@/styles/fontFamily";
import { router } from "expo-router";
import { useRef, useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import CustomBottomSheet from "@/components/BottomSheet";
import { GestureHandlerRootView, Switch } from "react-native-gesture-handler";
import { Condition } from "@/components/Condition";
import { Checkbox } from "@/components/CheckBox";

export default function Home() {
  const [selectedCondicion, setSelectedCondicion] = useState<
    "NOVO" | "USADO" | null
  >(null);
  const [acceptTrade, setAcceptTrade] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState<string[]>([]);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleBottomSheetOpen = () => {
    bottomSheetRef.current?.expand();
  };
  const handleBottomSheetClose = () => {
    bottomSheetRef.current?.close();
    Keyboard.dismiss();
  };

  const togglePaymentMethod = (method: string) => {
    setPaymentMethods((prev) =>
      prev.includes(method)
        ? prev.filter((item) => item !== method)
        : [...prev, method]
    );
  };

  const handleResetFilters = () => {
    setSelectedCondicion(null);
    setAcceptTrade(false);
    setPaymentMethods([]);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.contentHeader}>
          <Image
            style={styles.avatar}
            source={require("@/assets/perfil.jpeg")}
          />
          <View style={styles.gretting}>
            <CustomText type="regular" color={colors.gray[1]} fontSize={16}>
              Boas vindas,
            </CustomText>
            <CustomText type="bold" color={colors.gray[1]} fontSize={16}>
              Keventon!
            </CustomText>
          </View>
          <View>
            <CustomButton
              title="Criar anúncio"
              type="tertiary"
              icon={<Plus size={16} color={colors.gray[7]} />}
              onPress={() => router.navigate("/(tabs)/home/createProduct")}
            />
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <CustomText type="regular" fontSize={14} color={colors.gray[3]}>
          Seus produtos anunciados para venda
        </CustomText>

        <LinearGradient
          colors={["#dfeaff33", "#FFFFFF00"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.cardAds, { overflow: "hidden" }]}
        >
          <View style={styles.contentCardAds}>
            <View
              style={{ alignItems: "center", flexDirection: "row", gap: 16 }}
            >
              <Tag size={24} color={colors.blue} />
              <View>
                <CustomText type="bold" fontSize={20} color={colors.gray[2]}>
                  4
                </CustomText>
                <CustomText type="regular" fontSize={14} color={colors.gray[2]}>
                  anúncios ativos
                </CustomText>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              style={{ alignItems: "center", flexDirection: "row", gap: 8 }}
            >
              <CustomText type="bold" fontSize={14} color={colors.blue}>
                Meus anúncios
              </CustomText>
              <ArrowRight size={16} color={colors.blue} />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        <CustomText type="regular" fontSize={14} color={colors.gray[3]}>
          Compre produtos variados
        </CustomText>

        <View style={styles.filter}>
          <View style={styles.inputFilter}>
            <TextInput
              style={styles.input}
              placeholder="Buscar anúncio"
              placeholderTextColor={colors.gray[4]}
              selectionColor={colors.blue_light}
              underlineColorAndroid="transparent"
              cursorColor={colors.blue_light}
            />
          </View>

          <View style={styles.contentFilter}>
            <MagnifyingGlass size={20} color={colors.gray[2]} weight="bold" />
            <CustomText type="regular" fontSize={20} color={colors.gray[5]}>
              |
            </CustomText>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={handleBottomSheetOpen}
            >
              <Sliders size={24} color={colors.gray[2]} weight="bold" />
            </TouchableOpacity>
          </View>
        </View>

        {/* <Product /> */}
      </View>
      <CustomBottomSheet ref={bottomSheetRef} snapPoints={[0.01, 587]}>
        <BottomSheetView style={{ flex: 1, marginHorizontal: 24 }}>
          <View
            style={{
              marginTop: 16,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CustomText type="bold" fontSize={20} color={colors.gray[1]}>
              Filtrar anúncios
            </CustomText>

            <TouchableOpacity onPress={handleBottomSheetClose}>
              <X color={colors.gray[4]} size={24} />
            </TouchableOpacity>
          </View>

          <View style={{ marginVertical: 24 }}>
            <CustomText type="bold" color={colors.gray[2]}>
              Condição
            </CustomText>
            <View style={{ flexDirection: "row", gap: 8, marginTop: 12 }}>
              <Condition
                title="NOVO"
                selected={selectedCondicion === "NOVO"}
                onPress={() =>
                  setSelectedCondicion((prev) =>
                    prev === "NOVO" ? null : "NOVO"
                  )
                }
              />
              <Condition
                title="USADO"
                selected={selectedCondicion === "USADO"}
                onPress={() =>
                  setSelectedCondicion((prev) =>
                    prev === "USADO" ? null : "USADO"
                  )
                }
              />
            </View>
          </View>

          <View>
            <CustomText type="bold" fontSize={16} color={colors.gray[2]}>
              Aceita troca?
            </CustomText>
            <Switch
              style={{ marginTop: 12 }}
              value={acceptTrade}
              onValueChange={setAcceptTrade}
              trackColor={{ false: colors.gray[5], true: colors.blue_light }}
              thumbColor={colors.gray[7]}
            />
          </View>

          <View style={styles.paymentMethod}>
            <CustomText type="bold" fontSize={16} color={colors.gray[2]}>
              Meios de pagamento aceitos
            </CustomText>

            <Checkbox
              label="Boleto"
              checked={paymentMethods.includes("Boleto")}
              onToggle={() => togglePaymentMethod("Boleto")}
            />
            <Checkbox
              label="Pix"
              checked={paymentMethods.includes("Pix")}
              onToggle={() => togglePaymentMethod("Pix")}
            />
            <Checkbox
              label="Dinheiro"
              checked={paymentMethods.includes("Dinheiro")}
              onToggle={() => togglePaymentMethod("Dinheiro")}
            />
            <Checkbox
              label="Cartão de Crédito"
              checked={paymentMethods.includes("Cartão de Crédito")}
              onToggle={() => togglePaymentMethod("Cartão de Crédito")}
            />
            <Checkbox
              label="Depósito Bancário"
              checked={paymentMethods.includes("Depósito Bancário")}
              onToggle={() => togglePaymentMethod("Depósito Bancário")}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: 12,
              position: "absolute",
              bottom: -90,
            }}
          >
            <View style={{ flex: 1 }}>
              <CustomButton
                title="Resetar filtros"
                type="secondary"
                onPress={handleResetFilters}
              />
            </View>
            <View style={{ flex: 1 }}>
              <CustomButton title="Aplicar filtros" type="tertiary" />
            </View>
          </View>
        </BottomSheetView>
      </CustomBottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[6],
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "grey",
  },
  header: {
    marginTop: Platform.OS === "ios" ? 68 : 54,
    marginHorizontal: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  contentHeader: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  avatar: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 99,
    borderColor: colors.blue_light,
    borderWidth: 2,
    backgroundColor: colors.gray[5],
    position: "relative",
  },
  gretting: {
    flex: 1,
  },
  content: {
    marginTop: 32,
    marginHorizontal: 24,
  },
  cardAds: {
    marginTop: 8,
    marginBottom: 40,
    backgroundColor: colors.gray[5],
    padding: 16,
    borderRadius: 6,
    justifyContent: "space-between",
  },
  contentCardAds: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    justifyContent: "space-between",
  },
  filter: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 6,
    backgroundColor: colors.gray[7],
    paddingRight: 16,
    borderRadius: 6,
  },
  inputFilter: {
    flex: 1,
    borderRadius: 6,
  },
  input: {
    padding: 12,
    fontFamily: fontFamily.regular,
    fontSize: 16,
    color: colors.gray[1],
  },
  contentFilter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  paymentMethod: {
    marginTop: 16,
    gap: 12,
  },
});
