import { colors } from "@/styles/colors";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import Logo from "@/assets/logo.svg";
import { CustomText } from "@/components/CustomText/indext";
import { User, Plus, PencilLine } from "phosphor-react-native";
import { Input } from "@/components/Input";
import { CustomButton } from "@/components/CustomButton";

export default function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo width={60} height={40} />
        <CustomText type="bold" fontSize={20} color={colors.gray[1]}>
          Boas vindas!
        </CustomText>

        <CustomText
          type="regular"
          fontSize={14}
          color={colors.gray[2]}
          textAlign="center"
        >
          Crie sua conta e use o espaço para comprar itens variados e vender
          seus produtos
        </CustomText>

        <View style={styles.avatar}>
          <User size={57} color={colors.gray[4]} />

          <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
            <PencilLine size={16} color={colors.gray[6]} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <View style={styles.form}>
          <Input placeholder="Nome" />
          <Input placeholder="E-mail" keyboardType="email-address" />
          <Input
            placeholder="Telefone"
            keyboardType="numeric"
            enterKeyHint="next"
          />
          <Input placeholder="Senha" iconPassword />
          <Input placeholder="Confirmar senha" iconPassword />

          <CustomButton title="Criar" type="tertiary" />
        </View>

        <View style={styles.footer}>
          <CustomText type="regular" fontSize={14} color={colors.gray[2]}>
            Já possui uma conta?
          </CustomText>

          <CustomButton title="Ir para o login" type="secondary" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[6],
  },
  logo: {
    marginTop: 65,
    alignItems: "center",
    gap: 8,
    marginHorizontal: 48,
  },
  avatar: {
    width: 88,
    height: 88,
    marginTop: 24,
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 99,
    borderColor: colors.blue_light,
    borderWidth: 3,
    backgroundColor: colors.gray[5],
    marginHorizontal: 48,
    position: "relative",
  },
  addButton: {
    position: "absolute",
    right: -12,
    bottom: -4,
    width: 40,
    height: 40,
    borderRadius: 99,
    backgroundColor: colors.blue_light,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: colors.gray[6],
  },
  form: {
    marginTop: 16,
    marginHorizontal: 48,
    gap: 16,
  },
  footer: {
    marginTop: Platform.OS === "ios" ? 32 : 8,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 16,
    marginHorizontal: 48,
  },
  scroll: {
    flex: 1,
    paddingBottom: 32,
  },
});
