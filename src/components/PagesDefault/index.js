import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled, {css} from 'styled-components';

const Main = styled.main`
    color: var(--white);
    flex: 1;
    ${({paddingAll}) => css`
        padding: ${paddingAll};
    `}
`;


function PagesDefault({ children, paddingAll}){
    return(
        <>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    );
}

export default PagesDefault;