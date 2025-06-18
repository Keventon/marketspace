import { CustomText } from "@/components/CustomText/indext";
import { Header } from "@/components/Header";
import { colors } from "@/styles/colors";
import { ArrowLeft, CaretDown, Plus } from "phosphor-react-native";
import { StyleSheet, View } from "react-native";

export default function Ads() {
  return (
    <View style={styles.container}>
      <Header title="Meus anúncios" orientation="right" icon={<Plus />} />

      <View style={styles.content}>
        <View style={styles.contentAds}>
          <CustomText type="regular" fontSize={14} color={colors.gray[2]}>
            9 anúncios
          </CustomText>
          <View
            style={{
              width: 112,
              flexDirection: "row",
              alignItems: "center",
              padding: 8,
              borderColor: colors.gray[5],
              borderRadius: 6,
              gap: 16,
              borderWidth: 1,
            }}
          >
            <View style={{ flex: 1 }}>
              <CustomText type="regular" color={colors.gray[1]} fontSize={14}>
                Todos
              </CustomText>
            </View>
            <CaretDown color={colors.gray[3]} size={16} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[6],
  },
  content: {
    marginHorizontal: 24,
  },
  contentAds: {
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
