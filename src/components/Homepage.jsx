import React from "react";
import styled from "styled-components";
const Homepage = ()=>{
    return(
        <Wrapper>
        <WrapperSideBar>
            <h1>hi</h1>
        </WrapperSideBar>
        <WrapperMainPage>
        <h1>hi</h1>

        </WrapperMainPage>
    </Wrapper>
    );
}

const Wrapper = styled.div`
display:flex;
min-height:100vh;

`;
const WrapperSideBar = styled.div`
width:300px;
background-color:#332969;

`;
const WrapperMainPage = styled.div`
width:100%;
background-color:#F0F0EE;
`;
export default Homepage;
