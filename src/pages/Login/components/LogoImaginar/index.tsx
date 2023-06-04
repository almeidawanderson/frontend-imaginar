import {Box, styled} from '@mui/material'
import Logo from '../../../../assets/logo-psicologia-png-7.jpg'

const BoxLogoImaginar = styled(Box)`
  position: absolute;
  right: 75%;
  top: 80%;

  @media screen and(max-width: 800px) {
    right: auto;
    top: 88%;
  }
`

export function LogoImaginar(){
  return(
    <>
    <BoxLogoImaginar>
      <img src={Logo} />
    </BoxLogoImaginar>
  </>
  )
}