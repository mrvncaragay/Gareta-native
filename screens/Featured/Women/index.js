import React from "react";
import { ScrollView } from "react-native";

import {
  SignInJoinTabBar, Button, OverlayImageWithText, Text
} from "../../../components";

const Men = () => {
  const dressText = (
    <>
      <Text size={24} letterSpacing={1} fontFamily="IMFellDoublePica-Italic">SHORTCUT TO SUMMER</Text>
      <Text
        size={16}
        style={{ lineHeight: 30 }}
        letterSpacing={1}
      >
        Soak up the sunshine wherever you
      </Text>
      <Text size={14} letterSpacing={1}>are in new summer dresses.</Text>
    </>
  );

  const summerPromoText = (
    <>
      <Text color="white" size={38} fontFamily="IMFellDoublePica-Italic">Summer Sale</Text>
      <Text color="white" size={14} style={{ lineHeight: 40 }} fontFamily="SourceSerifPro-Regular">up to 50% off*</Text>
      <Text color="white" size={12} letterSpacing={2}>PLUS, 25% OFF ENTIRE PURCHASE**</Text>
    </>
  );

  return (
    <ScrollView style={{ marginTop: 50 }}>
      <SignInJoinTabBar />
      <OverlayImageWithText
        url="https://gareta.s3-us-west-1.amazonaws.com/Native/Season+Promo/Summer.png"
        texts={summerPromoText}
        ratio={200 / 76}
      />
      <Button size="medium" variant="outlined"><Text>SHOP NOW</Text></Button>
      <OverlayImageWithText
        url="https://gareta.s3-us-west-1.amazonaws.com/Native/Season+Promo/WomenSummer.jpg"
        texts={dressText}
        ratio={1}
      />
      <Button size="medium" variant="outlined"><Text>SHOP NOW</Text></Button>
    </ScrollView>
  );
};

export default Men;
