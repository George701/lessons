import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 2rem 10rem;
  border: 1px solid ${(props: any) => props.theme.palette.gray};
  background: ${(props: any) => props.theme.palette.white};
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 ${(props: any) => props.theme.palette.gray}, 0 6px 20px 0 ${(props: any) => props.theme.palette.gray};
  min-height: 10rem;
  padding: 2rem 2rem 1rem 2rem;
  max-height: 632px;
  overflow: auto;
`