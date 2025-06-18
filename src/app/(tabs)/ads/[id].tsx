import { CustomText } from "@/components/CustomText/indext";
import { colors } from "@/styles/colors";
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import Carousel, {
  Pagination,
  ICarouselInstance,
} from "react-native-reanimated-carousel";

import { useSharedValue } from "react-native-reanimated";
import React from "react";
import { numberToCurrancy } from "@/utils/numberToCurrancy";
import { CustomButton } from "@/components/CustomButton";
import { router } from "expo-router";
import { ArrowLeft, Tag, WhatsappLogo } from "phosphor-react-native";

export default function AdsDetails() {
  const width = Dimensions.get("window").width;
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  function onPressPagination(index: number) {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  }

  const data = [
    {
      id: 1,
      image: require("@/assets/play4.png"),
    },
    {
      id: 2,
      image: require("@/assets/bicicleta.png"),
    },
  ];

  const methodsPayment = [
    {
      id: 1,
      name: "Boleto",
      icon: require("@/assets/boleto.png"),
    },
    {
      id: 2,
      name: "Pix",
      icon: require("@/assets/pix.png"),
    },

    {
      id: 4,
      icon: require("@/assets/deposito.png"),
      name: "Depósito Bancário",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.gray[6]}
        translucent
      />

      <TouchableOpacity style={styles.header} onPress={() => router.back()}>
        <ArrowLeft size={24} color={colors.gray[1]} />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Carousel
            ref={ref}
            width={width}
            height={280}
            data={data}
            onProgressChange={progress}
            renderItem={({ index }) => (
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Image
                  source={data[index].image}
                  style={{ width: width, height: width, resizeMode: "cover" }}
                />
              </View>
            )}
          />
          <Pagination.Basic
            progress={progress}
            data={data}
            dotStyle={{
              width: 8,
              height: 8,
              borderRadius: 4,
              marginHorizontal: 8,
              backgroundColor: "rgba(0,0,0,0.2)",
            }}
            containerStyle={{
              gap: 8,
              marginTop: 16,
            }}
            onPress={onPressPagination}
          />
        </View>

        <View style={styles.content}>
          <View style={styles.contentAvatar}>
            <Image
              source={require("@/assets/perfil.jpeg")}
              style={styles.avatar}
            />
            <CustomText type="regular" fontSize={16} color={colors.gray[1]}>
              Keventon
            </CustomText>
          </View>

          <View style={styles.tag}>
            <CustomText type="regular" fontSize={12} color={colors.gray[2]}>
              USADO
            </CustomText>
          </View>

          <View style={styles.product}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <View style={{ maxWidth: "60%" }}>
                <CustomText type="bold" fontSize={20} color={colors.gray[1]}>
                  Playstation 4 Slim 1TB Bivolt Preto
                </CustomText>
              </View>
              <CustomText type="bold" fontSize={20} color={colors.blue_light}>
                {numberToCurrancy(3499.99)}
              </CustomText>
            </View>

            <CustomText type="regular" fontSize={14} color={colors.gray[2]}>
              Cras congue cursus in tortor sagittis placerat nunc, tellus arcu.
              Vitae ante leo eget maecenas urna mattis cursus.
            </CustomText>

            <View style={{ marginTop: 24, flexDirection: "row", gap: 8 }}>
              <CustomText type="bold" fontSize={16} color={colors.gray[2]}>
                Aceita troca?
              </CustomText>
              <CustomText type="regular" fontSize={16} color={colors.gray[2]}>
                Não
              </CustomText>
            </View>

            <View style={{ marginTop: 16, gap: 8 }}>
              <CustomText type="bold" fontSize={16} color={colors.gray[2]}>
                Meios de pagamento:
              </CustomText>

              <View style={{ gap: 8 }}>
                {methodsPayment.map((item) => (
                  <View key={item.id} style={{ flexDirection: "row", gap: 8 }}>
                    <Image source={item.icon} />
                    <CustomText
                      type="regular"
                      fontSize={16}
                      color={colors.gray[2]}
                    >
                      {item.name}
                    </CustomText>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.contentButton}>
        <View style={{ flex: 1 }}>
          <CustomText type="bold" fontSize={20} color={colors.blue_light}>
            {numberToCurrancy(3499.99)}
          </CustomText>
        </View>
        <View style={{ flex: 1 }}>
          <CustomButton
            title="Entrar em contato"
            type="primary"
            icon={
              <WhatsappLogo size={16} weight="fill" color={colors.gray[7]} />
            }
            onPress={() => router.replace("/(tabs)/home")}
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
  header: {
    width: 30,
    marginTop: 48,
    marginLeft: 24,
    marginBottom: 16,
  },
  content: {
    marginHorizontal: 24,
  },
  contentAvatar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 99,
    borderColor: colors.blue_light,
    borderWidth: 2,
    backgroundColor: colors.gray[5],
  },
  tag: {
    width: 62,
    padding: 8,
    marginTop: 16,
    alignItems: "center",
    height: 32,
    borderRadius: 99,
    backgroundColor: colors.gray[5],
  },
  product: {
    marginTop: 8,
  },
  contentButton: {
    backgroundColor: colors.gray[7],
    marginTop: 16,
    gap: 8,
    alignItems: "center",
    padding: 24,
    flexDirection: "row",
  },
});
