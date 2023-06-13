import React from "react";
import styled from "styled-components";
import Logo from "../../../components/Logo";
import { Link } from "react-router-dom";
import { Logout, Home3, Car, Activity, Celo, Polyswarm } from 'iconsax-react'



const FooterDashboard:React.FC = () => {
    return (
        <DashboardContainer>
            <SectionUp>
                <LogoSection>
                    <Link to="">
                        <Logo size="sm" />
                    </Link>
                </LogoSection>
                <MiddleSection>
                    <Line />
                    <Link to="">    
                        <Homebar>
                            <Home3 size="20"/>
                            <h5>Project Overview</h5>
                        </Homebar>
                    </Link>
                    <Line />

                    <Services>
                        <h5>Services</h5>
                        <ServiceRender>
                        <Nav>
                            <List>
                                <Link to="">
                                    <DashLink>
                                        <Polyswarm size="15" color="#030819"/>
                                        <li>Dispatch Center</li>
                                    </DashLink>
                                </Link>
                                <Link to="">
                                    <DashLink>
                                        <Car  size="15" color="#030819"/>
                                        <li>Ambulance Services</li>
                                    </DashLink>
                                </Link>
                                <Link to="">
                                    <DashLink>                                   
                                        <Celo size="15" color="#030819"/> 
                                        <li>Medical Control/Direction</li>
                                    </DashLink>
                                </Link>
                                <Link to="">
                                    <DashLink>
                                        <Activity size="15" color="#030819"/> 
                                        <li>Medical Providers</li>
                                    </DashLink>
                                </Link>
                            </List>
                        </Nav>
                        </ServiceRender>
                    </Services>

                </MiddleSection>
                <Link to="/">
                    <LogoutSec>
                        <Logout size="20" color="#020c24" />
                        <p>Logout</p>
                    </LogoutSec>
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

const LogoSection = styled.div`
     padding: 3rem 6rem;
`

const Homebar = styled.div`
     display: flex;
     gap: 1rem;
     padding: 1rem 3rem;

     h5 {
        margin-top: 0.5rem;
     }

    &:hover {
        background-color: #020c24;
        color: #fff;
    }
    
`

const DashLink = styled.div`
    display: flex;
    gap: 5px;
`

const Services = styled.section`
    margin-top: 10rem;

     h5 {
         font-weight: lighter;
         padding: 1rem 7rem;
    }
`
const ServiceRender = styled.div`

    align-items: center;

`

const Line = styled.hr`
    height: 2px;
    width: 100%;
    background-color: #000;
`

const SectionUp = styled.section`
    width: 200px;
    height: 969px;
    position: absolute;
    background-color: #e1e7ee;
    margin-top: -6%;
    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`

const MiddleSection = styled.section`
 height: 750px;
 justify-content: center;
 align-items: center;
  /* padding: 0 2rem; */
`

const LogoutSec = styled.div`
    padding: 3rem 5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;

    p {
        color: #020c24;
        font-size: 1.2rem;
        font-weight: 600;
    }
`

const Nav = styled.nav`
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: left;
    background-color: #eceef6;
    gap: ${({ theme }) => theme.spacing(3)};
    padding: 1rem 1em;
    margin: 0 0.5rem;
    border-radius: 5px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);


  li {
    font-size: 12px;
    color: #000000;
    display: flex;
    align-items: left;
    padding: 1rem 0rem;
    margin-top: -1rem;
    font-weight: lighter;
    gap: ${({ theme }) => theme.spacing(2)};
  }

`;