import { CustomButton } from "@/components/CustomButton";
import { CustomText } from "@/components/CustomText/indext";
import { colors } from "@/styles/colors";
import {
  ArrowRight,
  MagnifyingGlass,
  Plus,
  Sliders,
  Tag,
} from "phosphor-react-native";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { fontFamily } from "@/styles/fontFamily";
import { Product } from "@/components/Product";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
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
              onPress={() => router.replace("/(tabs)/home/createProduct")}
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
            <TouchableOpacity activeOpacity={0.5}>
              <Sliders size={24} color={colors.gray[2]} weight="bold" />
            </TouchableOpacity>
          </View>
        </View>

        {/* <Product /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[6],
    flex: 1,
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
});
