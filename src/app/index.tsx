import { StatusBar, StyleSheet, View } from "react-native";

import Logo from "@/assets/logo.svg";
import { colors } from "@/styles/colors";
import { CustomText } from "@/components/CustomText/indext";
import { Input } from "@/components/Input";
import { CustomButton } from "@/components/CustomButton";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <View style={styles.logo}>
        <Logo />
        <CustomText type="bold" fontSize={28} color={colors.gray[1]}>
          marketspace
        </CustomText>
        <CustomText type="light" fontSize={14} color={colors.gray[1]}>
          Seu espaço de compra e venda
        </CustomText>
      </View>

      <View style={styles.content}>
        <CustomText type="regular" fontSize={14} color={colors.gray[2]}>
          Acesse sua conta
        </CustomText>

        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input placeholder="Senha" secureTextEntry autoCapitalize="none" />

        <CustomButton title="Entrar" type="primary" />
      </View>

      <View style={styles.footer}>
        <CustomText type="regular" fontSize={14} color={colors.gray[2]}>
          Ainda não tem acesso?
        </CustomText>
        <CustomButton title="Criar uma conta" type="secondary" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[6],
    flex: 1,
  },
  logo: {
    marginTop: 65,
    alignItems: "center",
  },
  content: {
    marginTop: 65,
    backgroundColor: colors.gray[6],
    padding: 40,
    alignItems: "center",
    gap: 16,
  },
  footer: {
    flex: 1,
    backgroundColor: colors.gray[7],
    padding: 40,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
});
