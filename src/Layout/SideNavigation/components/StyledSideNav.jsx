import SideNav, {
  Nav,
  NavItem,
  NavIcon,
  NavText
} from '@trendmicro/react-sidenav';
import styled from 'styled-components';

// SideNav
export const StyledSideNav = styled(SideNav)`
  display: flex;
  border-right: 1px solid #ddd;
  background-color: #181C37;
  position: fixed;
  width: 86px;
  z-index: 798;
  transform: translate3d(0, 0, 0);
`;
StyledSideNav.defaultProps = SideNav.defaultProps;

// Nav
export const StyledNav = styled(Nav)`
  display: flex;
  flex-direction: column;

 [class*="sidenav-navitem--"] {
    background-color: #181C37;

    > [class*="navitem--"] {
    line-height: 48px;
    height: 48px;

      [class*="navicon--"] {
        &, > * {
        width: 86px;
        height: 48px;
        line-height: 48px;
        font-size: 18px;
        color: #7A8095;
        }
      }
      [class*="navtext--"] {
        &, > * {
            color: #fff;
        }
      }
      }
  }

  [class*="sidenav-navitem--"][class*="selected--"] {
    > [class*="navitem--"] {
      background-color: #AD0F6C;
      color: #fff;
    }

    [class*="navicon--"] {
      &, > * {
          color: #fff;
      }
    }
  }

  [class*="sidenav-navitem--"]:hover {
    > [class*="navitem--"] {
        background-color: #AD0F6C;
    }

    [class*="navicon--"] {
      &, > * {
          color: #fff;
      }
    }
  }

  [class*="expanded--"] {
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
export const StyledNavItem = styled(NavItem)`
`;
StyledNavItem.defaultProps = NavItem.defaultProps;

// NavIcon
export const StyledNavIcon = styled(NavIcon)`
`;
StyledNavIcon.defaultProps = NavIcon.defaultProps;

// NavText
export const StyledNavText = styled(NavText)`
`;
StyledNavText.defaultProps = NavText.defaultProps;
