import React from 'react';

import styled from 'styled-components';
import Man_Mediation from '../../assets/icons/aside/icon1.png';
import Swim from '../../assets/icons/aside/icon2.png';
import Bike from '../../assets/icons/aside/icon3.png';
import Alter from '../../assets/icons/aside/icon4.png';

const AsideContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
    background-color: var(--black-color);
    color: var(--white-color);
    
    width: min-content;
    height: calc(100vh - 90px);
    padding: 26px;
`;

const LinkButtons = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
`

const Link = styled.a`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    border-radius: 6px;
    background-color: var(--white-color);
    margin-bottom: 20px;
    cursor: pointer;
`;

const Icon = styled.img`
    display: block;
`;

const CopyrightText = styled.p`
    text-orientation: sideways;
    writing-mode: vertical-rl;
    transform: rotate(-180deg);
`

/**
 * This component is used to display a menu of links containing images and the copyright information.
 * @returns {JSX.Element} Display component for the link menu containing images and the copyright, returns an HTML element.
 * @constructor
 */
export default function AsideBar() {
    return (
        <>
            <AsideContainer>
                <LinkButtons>
                    <Link>
                        <Icon src={Man_Mediation} alt='Personne fesant de la médiation' />
                    </Link>

                    <Link>
                        <Icon src={Swim} alt="Personne nagant dans l'eau" />
                    </Link>

                    <Link>
                        <Icon src={Bike} alt='Personne fesant du vélo' />
                    </Link>

                    <Link>
                        <Icon src={Alter} alt='Altère de musculation' />
                    </Link>
                </LinkButtons>

                <CopyrightText>Copyright, SportSee 2020</CopyrightText>
            </AsideContainer>
        </>
    );
}