import React from "react";
import { Button } from "../../globalStyles";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Nuestros servicios</PricingHeading>
          <PricingContainer>
            <PricingCard to="">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Paquete de Inicio</PricingCardPlan>
                <PricingCardCost>Q150.00</PricingCardCost>
                <PricingCardLength>por mes</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 Nuevos Usuarios</PricingCardFeature>
                  <PricingCardFeature>Q 10,000 Presupuesto</PricingCardFeature>
                  <PricingCardFeature>Analiticas</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Elija un plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Intermedio</PricingCardPlan>
                <PricingCardCost>Q220.00</PricingCardCost>
                <PricingCardLength>por mes</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1000 Nuevos Usuarios</PricingCardFeature>
                  <PricingCardFeature>Q50,000 Presupuesto</PricingCardFeature>
                  <PricingCardFeature>Analiticas</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Elija un plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Avanzado</PricingCardPlan>
                <PricingCardCost>Q490.00</PricingCardCost>
                <PricingCardLength>por mes</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Usuarios Ilimitados</PricingCardFeature>
                  <PricingCardFeature>presupuesto Ilimitado</PricingCardFeature>
                  <PricingCardFeature>24/7 Soporte</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Elija un plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
