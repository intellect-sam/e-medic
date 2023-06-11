import React from "react";
import styled from "styled-components";

import { Title, Container } from "../../../styles/reusableElements.styled";
import overview from "./assets/images/overview-image.png";
import overviewWing from "./assets/icons/overview-wing.svg";

const AccountOverview: React.FC = () => {
  return (
    <>
      <OverviewContainer>
        <OverviewText>
          <Title $color="#004578" $size="42px" $weight="600">
            OVERVIEW <img src={overviewWing} alt="" />
          </Title>
          <p>
            EMS (Emergency Medical Services) is a comprehensive system of medical care designed to provide immediate assistance, stabilization, and transportation to individuals experiencing medical emergencies or injuries. It encompasses a range of services, professionals, and resources aimed at delivering timely and effective pre-hospital care.
            <br />
            <br />
            EMS (Emergency Medical Services) is a comprehensive system of medical care designed to provide immediate assistance, stabilization, and transportation to individuals experiencing medical emergencies or injuries. It encompasses a range of services, professionals, and resources aimed at delivering timely and effective pre-hospital care.
            <br />
            <br />
            
          </p>
        </OverviewText>
        <OverviewImage>
          <img src={overview} alt="" />
        </OverviewImage>
      </OverviewContainer>
    </>
  );
};

export default AccountOverview;

const OverviewContainer = styled(Container)`
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(8)};
`;

const OverviewText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  flex: 0 0 calc(50% - ${({ theme }) => theme.spacing(3)});
  padding: ${({ theme }) => theme.spacing(10)} 0;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex: initial;
  }

  p {
    color: #605e5c;
  }
`;

const OverviewImage = styled.div`
  flex: 0 0 calc(50% - ${({ theme }) => theme.spacing(3)});

  ${({ theme }) => theme.breakpoints.down("sm")} {
    display: none;
  }

  img {
    max-width: 100%;
  }
`;
