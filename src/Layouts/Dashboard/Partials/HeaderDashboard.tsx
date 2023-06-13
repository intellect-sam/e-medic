import React from "react";
import styled from "styled-components";

const HeaderDashboard:React.FC =  () => {
    return (
        <DashboardContainer>
            <SectionUp>
                
               
            </SectionUp>
        </DashboardContainer>
    )
}

export default HeaderDashboard


const DashboardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SectionUp = styled.section`
    width: 140rem;
    height: 100px;
    padding: 2rem 1rem;
    background-color: #020c24;
    position:relative;
    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`
