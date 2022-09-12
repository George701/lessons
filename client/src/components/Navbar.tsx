import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import withTranslation from '../i18n/withTranslation'
import { setLanguage } from '../actions/lang'
import { connect } from 'react-redux'
import { languageOptions } from '../constants/options'

const NavbarContainer = styled.header`
  padding: 2rem 10rem;
  background-color: #21293D;
  display: flex;
  flex-direction: row;
`

const StyledLink = styled(Link)`
  color: #eeeeee;
  text-decoration: none;
  font-size: 20px;
  padding: 2rem 1rem;
`

// const Navbar = ({ t }) => {
const Navbar = (props: { language: { lang: string }; setLanguage: any }) => {
  const {
		language: {lang},
		setLanguage,
	} = props;
  return (
    <NavbarContainer>
        <Link to="/">
          <img src={require("../img/logo.png")} alt="logo" />
        </Link>
        <StyledLink to="/lessons">
          Lessons
        </StyledLink>
        <StyledLink to="/timetable">
          Timetable
        </StyledLink>
        <div>
        <select value={lang} onChange={event => setLanguage(event.target.value)}>
            {
              Object.values(languageOptions).map(option => (
                <option key={option} value={option}>
                    {option.toUpperCase()}
                </option>
              ))
            }
          </select>
        </div>
    </NavbarContainer>
  )
}

const mapStateToProps = (state: { language: any }) => ({
  language: state.language,
});

const mapDispatchToProps = {
  setLanguage,
};

export default withTranslation(connect(mapStateToProps, mapDispatchToProps)(Navbar))