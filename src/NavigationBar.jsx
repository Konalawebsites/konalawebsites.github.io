import React from 'react';
import { NavLink } from 'react-router-dom'
import { Box, Header} from 'grommet';
import styled from 'styled-components';

const StyledHeader = styled(Header)`
  padding-left: medium;
  padding-right: small;
  padding-top: small;
  padding-bottom: small;
  margin: 15px;
  background: ${(props) => props.theme.global.colors.background};
  width: small;
`;

const NavigationBar = () => {
    return (
        <StyledHeader>
            <Box >
                <Box><NavLink to="/projects" className="link"> projects </NavLink> </Box>
                <Box><NavLink to="/contact" className="link"> contact </NavLink> </Box>
            </Box>
        </StyledHeader>
        )
    }

export default NavigationBar