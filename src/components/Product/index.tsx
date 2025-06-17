import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { numberToCurrancy } from "@/utils/numberToCurrancy";
import React from "react";
import {
  ImageBackground,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export type ProductDatabase = {
  name: string;
  description: string;
  is_new: boolean;
  price: number;
  accept_trade: boolean;
  payment_methods: string[];
};

// type Props = {
//   data: ProductDatabase;
// };

export function Product() {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <ImageBackground
        source={require("@/assets/bicicleta.png")}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.overlay}>
          <Image
            source={require("@/assets/perfil.jpeg")}
            style={styles.avatar}
          />
          <View style={styles.conditionTag}>
            <Text style={styles.conditionText}>USADO</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.details}>
        <Text style={styles.name}>Playstation 4 SLIM 1TB Bivolt Preto</Text>
        <Text style={styles.price}>{numberToCurrancy(2900)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    height: 120,
    justifyContent: "space-between",
    padding: 10,
  },
  imageStyle: {
    resizeMode: "cover",
    borderRadius: 6,
  },
  overlay: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.gray[7],
  },
  conditionTag: {
    backgroundColor: colors.gray[2],
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 99,
  },
  conditionText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: fontFamily.bold,
  },
  details: {
    backgroundColor: colors.gray[6],
    padding: 10,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  name: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[2],
  },
  price: {
    fontSize: 16,
    fontFamily: fontFamily.bold,
    color: colors.gray[1],
  },
});
