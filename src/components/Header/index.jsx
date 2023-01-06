import React from 'react';

import styled from 'styled-components';
import Logo from '../../assets/img/logo.png'

const HeaderContainer = styled.div`
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ImageLogo = styled.img`
    display: block;
    height: 60px;
    padding: 18px 0 12px 28px
`;

const NavContainer = styled.nav`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    margin-left: 150px;
    margin-right: 90px;
`;

const FakeLink = styled.li`
    color: inherit;
    cursor: pointer;
    display: block;
    font-weight: inherit;
`;

export default function Header() {
    return (
        <HeaderContainer>
            <ImageLogo src={Logo} alt="Logo de l'entreprise" />
            <NavContainer>
                <FakeLink>Accueil</FakeLink>
                <FakeLink>Profil</FakeLink>
                <FakeLink>Réglage</FakeLink>
                <FakeLink>Communauté</FakeLink>
            </NavContainer>
        </HeaderContainer>
    )
}