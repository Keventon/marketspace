import { CustomText } from "@/components/CustomText/indext";
import { Header } from "@/components/Header";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { Plus } from "phosphor-react-native";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export default function Ads() {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const data = [
    { label: "Todos", value: "todos" },
    { label: "Novo", value: "novo" },
    { label: "Usado", value: "usado" },
  ];

  return (
    <View style={styles.container}>
      <Header title="Meus anúncios" orientation="right" icon={<Plus />} />

      <View style={styles.content}>
        <View style={styles.contentAds}>
          <CustomText type="regular" fontSize={14} color={colors.gray[2]}>
            9 anúncios
          </CustomText>

          <Dropdown
            style={[
              styles.dropdown,
              isFocus && { borderColor: colors.blue_light },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Todos" : "..."}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => null}
          />
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
  dropdown: {
    width: 120,
    height: 50,
    borderColor: colors.gray[5],
    borderWidth: 0.5,
    borderRadius: 6,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    fontFamily: fontFamily.regular,
  },
  placeholderStyle: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
});
