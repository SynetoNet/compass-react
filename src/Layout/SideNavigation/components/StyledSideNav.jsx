import SideNav, {
  Nav,
  NavItem,
  NavIcon,
  NavText
} from '@trendmicro/react-sidenav';
import styled from 'styled-components';

// SideNav
const StyledSideNav = styled(SideNav)`
    border-right: 1px solid #ddd;
    background-color: #181C37;
    position: relative;
    height: 100%;
    width: 100%;
`;
StyledSideNav.defaultProps = SideNav.defaultProps;

// Nav
const StyledNav = styled(Nav)`
    && > [class*="sidenav-navitem--"][class*="selected--"] {
        > [class*="navitem--"] {
            background-color: #AD0F6C;
            color: #fff;
        }

        [class*="navicon--"] {
                &, > * {
                    color: #fff !important;
                }
            }
    }
    && > [class*="sidenav-navitem--"]:hover {
        > [class*="navitem--"] {
            background-color: #AD0F6C;
        }

        [class*="navicon--"] {
                &, > * {
                    color: #fff !important;
                }
            }
    }

    &&[class*="expanded--"] {
    background-color: #181C37;

        [class*="sidenav-subnav--"] {
            > [class*="sidenav-subnavitem--"],
            > [class*="sidenav-subnavitem--"]:hover {
                > [class*="navitem--"] {
                    color: #fff;
                }
            }
            > [class*="sidenav-subnavitem--"]:hover {
                > [class*="navitem--"] {
                    background-color: #AD0F6C;
                }
            }
            > [class*="sidenav-subnavitem--"][class*="selected--"] {
                > [class*="navitem--"] {
                    color: #fff;
                    background-color: #AD0F6C;
                }
                > [class*="navitem--"]::before {
                    border-left: 2px solid #AD0F6C;
                }
            }
        }
    }
`;
StyledNav.defaultProps = Nav.defaultProps;

// NavItem
const StyledNavItem = styled(NavItem)`
`;
StyledNavItem.defaultProps = NavItem.defaultProps;

// NavIcon
const StyledNavIcon = styled(NavIcon)`
`;
StyledNavIcon.defaultProps = NavIcon.defaultProps;

// NavText
const StyledNavText = styled(NavText)`
`;
StyledNavText.defaultProps = NavText.defaultProps;

export {
  StyledNav as Nav,
  StyledNavItem as NavItem,
  StyledNavIcon as NavIcon,
  StyledNavText as NavText
};

export default StyledSideNav;
