import React, { useCallback, forwardRef, Ref, ReactNode } from "react";
import { StyleSheet } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { colors } from "@/styles/colors";

interface CustomBottomSheetProps {
  children: ReactNode;
  snapPoints?: (string | number)[];
  onChange?: (index: number) => void;
}

const CustomBottomSheet = forwardRef(
  ({ children, snapPoints }: CustomBottomSheetProps, ref: Ref<BottomSheet>) => {
    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          {...props}
          pressBehavior="close" // permite fechar ao tocar fora
        />
      ),
      []
    );

    return (
      <BottomSheet
        ref={ref}
        snapPoints={snapPoints}
        enablePanDownToClose
        handleIndicatorStyle={{
          backgroundColor: colors.gray[5],
          width: "15%",
        }}
        backgroundStyle={{
          backgroundColor: colors.gray[6],
        }}
        backdropComponent={renderBackdrop}
      >
        {children}
      </BottomSheet>
    );
  }
);

export default CustomBottomSheet;
