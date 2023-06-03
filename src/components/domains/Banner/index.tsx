import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";

const Banner = () => {
  return (
    <BannerSection>
      <StyledBanner>
        <BannerText>
          밤돌이로에서 입학전형 <EmphasisText>마루</EmphasisText>
          <br />
          <EmphasisText>가티</EmphasisText> 만들 사람?
        </BannerText>
      </StyledBanner>
    </BannerSection>
  );
};

export default Banner;

const BannerSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 180px;
  margin-bottom: 44px;
`;

const StyledBanner = styled.div`
  width: 50%;
  height: 100%;
  padding: 40px;
  border: 1px solid ${color.gray200};
  border-radius: 16px;
`;

const BannerText = styled.p`
  ${font.H3}
  ${color.black}
`;

const EmphasisText = styled.p`
  color: ${color.maruDefault};
`;
