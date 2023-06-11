import React from "react";
import styled from "styled-components";
import Logo from "../../../components/Logo";
import { Link } from "react-router-dom";


const FooterDashboard:React.FC = () => {
    return (
        <DashboardContainer>
            <SectionUp>
                <Link to="/">
                    <Logo size="sm" />
                </Link>
            </SectionUp>
        </DashboardContainer>
    )
}

export default FooterDashboard;

const DashboardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SectionUp = styled.section`
    width: 200px;
    height: 100vh;
    padding: 3rem 6rem;
    position: absolute;
    background-color: #dee7f1;
    margin-top: -6%;
    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`
