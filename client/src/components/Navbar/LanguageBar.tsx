import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { languageOptions } from '../../constants/options'
import { setLanguage } from '../../actions/lang'
import Icon from '../../UIKit/Icon'
import theme from '../../UIKit/theme'
import { useTranslation } from "react-i18next"

const Wrapper = styled.div`
  padding: .5rem 0 .5rem .5rem;
  background-color: ${props => props.theme.palette.gray};
  display: flex;
  width: 10rem;
  justify-content: space-around;
  border-radius: 0 4px 4px 0;
`

const LangOption = styled.div<{isChosen: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${props => !props.isChosen && 'pointer'};
  margin: 0 .3rem;
  opacity: ${props => props.isChosen ? .4 : 1};
  transition: all 0.3s ease-out;
  pointer-events: ${props => props.isChosen && 'none'};
`
const OpenBar = styled.div`
  padding: .5rem 1rem;
  width: 5rem;
  background-color: ${props => props.theme.palette.gray};
  display: flex;
  border-radius: 0 4px 4px 0;
`

const LanguageOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

const OpenBarBtn = styled.div`
  flex: 1;
  padding-left: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    svg {
      transition: all 0.3s ease-out;
      fill: ${props => props.theme.palette.lightgrey};
    }
  }
`

const CloseBarBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(180deg);
  cursor: pointer;
  
  :hover {
    svg {
      transition: all 0.3s ease-out;
      fill: ${props => props.theme.palette.lightgrey};
    }
  }
`

const LanguageBar = (props: {
  language: { lang: 'ru' | 'en' },
  setLanguage: (str: string) => void,
}) => {
  const { language: { lang }, setLanguage} = props
  const [barOpen, changeBar] = useState(false)

  const {i18n} = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang, i18n])

  if (!barOpen) {
    return (
      <OpenBar>
        <LanguageOption>
          <Icon type={lang} />
        </LanguageOption>
        <OpenBarBtn onClick={() => changeBar(true)}>
          <Icon type='arrow' fill={theme.palette.black}/>
        </OpenBarBtn>
      </OpenBar>
    )
  } else {

    return (
      <Wrapper>
        {
          Object.values(languageOptions).map((option: 'rus' | 'eng'| any) => {
            return (
              <LangOption key={option} isChosen={option === lang} onClick={() => setLanguage(option)}>
                <Icon type={option} />
              </LangOption>
            )
          })
        }
        <CloseBarBtn onClick={() => changeBar(false)}>
          <Icon type='arrow' fill={theme.palette.black}/>
        </CloseBarBtn>
      </Wrapper>
    )
  }
  
}

const mapStateToProps = (state: { language: any }) => ({
  language: state.language,
});

const mapDispatchToProps = {
  setLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageBar)