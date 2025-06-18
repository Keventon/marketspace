import { StatusBar, StyleSheet, View } from "react-native";

import Logo from "@/assets/logo.svg";
import { colors } from "@/styles/colors";
import { CustomText } from "@/components/CustomText/indext";
import { Input } from "@/components/Input";
import { CustomButton } from "@/components/CustomButton";
import { useState } from "react";
import { router } from "expo-router";

export default function Index() {
  const [visibilityPassword, setVisibilityPassword] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent />

      <View style={styles.content}>
        <View style={styles.logo}>
          <Logo />
          <CustomText type="bold" fontSize={28} color={colors.gray[1]}>
            marketspace
          </CustomText>
          <CustomText type="light" fontSize={14} color={colors.gray[1]}>
            Seu espaço de compra e venda
          </CustomText>
        </View>

        <View style={styles.login}>
          <CustomText type="regular" fontSize={14} color={colors.gray[2]}>
            Acesse sua conta
          </CustomText>

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            visible={false}
            iconPassword={false}
          />
          <Input
            placeholder="Senha"
            secureTextEntry={!visibilityPassword}
            autoCapitalize="none"
            iconPassword
            visible={visibilityPassword}
            onClick={() => setVisibilityPassword(!visibilityPassword)}
          />

          <CustomButton
            title="Entrar"
            type="primary"
            marginTop={16}
            onPress={() => router.navigate("/(tabs)/home")}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <CustomText type="regular" fontSize={14} color={colors.gray[2]}>
          Ainda não tem acesso?
        </CustomText>
        <CustomButton
          title="Criar uma conta"
          type="secondary"
          onPress={() => router.navigate("/register")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[7],
    flex: 1,
  },
  logo: {
    marginTop: 65,
    alignItems: "center",
  },
  content: {
    backgroundColor: colors.gray[6],
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingBottom: 40,
  },
  login: {
    marginTop: 65,
    padding: 40,
    alignItems: "center",
    gap: 16,
  },
  footer: {
    padding: 40,
    marginTop: 24,
    alignItems: "center",
    gap: 16,
  },
});
