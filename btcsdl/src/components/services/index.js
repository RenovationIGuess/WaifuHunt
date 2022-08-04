import React from "react";
import Icon1 from "../../images/hutaostick.png";
import Icon2 from "../../images/raidenfbi.png";
import Icon3 from "../../images/realdoggo.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesCard,
  ServicesWrapper,
  ServicesP,
  ServicesIcon,
  ServicesBackground,
} from "./serviceselements";

const Services = () => {
  return (
      <ServicesBackground id="services">
        <ServicesContainer>
          <ServicesH1>Các tính năng đang có</ServicesH1>
          <ServicesWrapper>
            <ServicesCard>
              <ServicesIcon src={Icon1} />
              <ServicesH2>Waifu Info</ServicesH2>
              <ServicesP>Info Waifu :D</ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon3} />
              <ServicesH2>Hệ thống Ranking</ServicesH2>
              <ServicesP>Xếp hạng most owned :v</ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon2} />
              <ServicesH2>Waifu Roll</ServicesH2>
              <ServicesP>Roll Waifu và sở hữu :3</ServicesP>
            </ServicesCard>
          </ServicesWrapper>
        </ServicesContainer>
      </ServicesBackground>
  );
};

export default Services;
