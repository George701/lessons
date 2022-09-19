import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import withTranslation from '../../i18n/withTranslation'
import Icon from '../../UIKit/Icon'
import theme from '../../UIKit/theme'
import LanguageBar from './LanguageBar'

const NavbarContainer = styled.header`
  padding: 2rem 10rem;
  display: flex;
  flex-direction: row;
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.palette.black};
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  padding: 2rem 1rem;
  transition: all 0.3s ease-out;
  :hover {
    color: ${props => props.theme.palette.gray};
  }
`
const LogoEmblem = styled.div`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  background: ${props => props.theme.palette.black};
  border: 4px solid ${props => props.theme.palette.lightblue};
  position: relative;
  margin-right: 3rem;
`

const logoStyle = {
  position: 'absolute',
  top: '47%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

const Navbar = (props: { t: (label: string) => string }) => {
  const { t } = props;
  return (
    <div>
      <NavbarContainer>
          <Link to="/">
            <LogoEmblem>
              <Icon
                type='logo'
                fill={theme.palette.lightgrey}
                style={logoStyle}
                height={70}
                width={70}
              />
            </LogoEmblem>
          </Link>
          <StyledLink to="/lessons">
            {t('lessonsLabel')}
          </StyledLink>
          <StyledLink to="/timetable">
          {t('timetableLabel')}
          </StyledLink>
      </NavbarContainer>
      <LanguageBar/>
    </div>
  )
}

export default withTranslation(Navbar)