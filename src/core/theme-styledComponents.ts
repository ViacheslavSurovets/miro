import { DefaultTheme } from 'styled-components';

const colors = {
  darkGray: '#161616',
  black: '#000',
  blue: '#21A8F4',
  white: '#FFFFFF',
  pink: '#F204C5',
  opacityBlue: 'rgba(33, 168, 244, .2)',
  opacityPink: 'rgba(242, 4, 197, .2)',
  opacityGray: 'rgba(22, 22, 22, .2)',
  orangeSoft: '#ff504f',
  gray: '#808080',
  googleColor: '#4285f4',
  ghostWhite: '#f8f8ff'
}

const baseUnit = 4

const theme: DefaultTheme = {
  pink: colors.pink,
  white: colors.white,
  darkGray: colors.darkGray,
  black: colors.black,
  unit: baseUnit,
  orangeSoft: colors.orangeSoft,
  gray: colors.gray,
  ghostWhite: colors.ghostWhite,
  googleButtonColor: colors.googleColor,
  header: {
    shopCartBackground: colors.orangeSoft,
    searchColor: colors.blue,
    infoContainerBackground: colors.black,
    dropdownBackground: colors.white,
    borderBottomDropdownHover: colors.blue,
    borderBottomDropdown: colors.darkGray,
    colorOnHover: colors.blue,
    linkColor: colors.darkGray,
    bordersDropdown: colors.darkGray,
    cartBackground: colors.white,
    cartColor: colors.darkGray,
    burgerMenuLineBackground: colors.white,
    burgerMenuNavBackground: colors.white,
    searchDropdownBorderBottom: colors.darkGray,
    dropdownSearchBackground: colors.white,
    searchWrapperBorder: colors.darkGray,
    headerNavBackground: colors.white
  },
  menu: {
    background: colors.white,
    color: colors.blue,
    selected: {
      background: colors.opacityBlue,
      color: colors.blue,
      borderLeft: colors.pink
    }
  },
  customButton: {
    customButtonColor: colors.darkGray,
    customButtonBorderColor: colors.darkGray
  },
  main: {
    sliderPopUp: {
      popUpBackgroundMediaHuge: colors.black,
      popUpColorMediaHuge: colors.white,
      popUpBackgroundMediaLow: colors.white,
      popUpColorMediaLow: colors.darkGray,
      popUpButtonBackgroundMediaHuge: colors.white,
      popUpButtonBackgroundMediaLow: colors.darkGray,
      popUpButtonColorMediaHuge: colors.black,
      popUpButtonColorMediaLow: colors.white
    },
    linkCardHover: {
      linkCardButtonBackground: colors.orangeSoft,
      linkCardButtonColor: colors.white,
      linkCardColor: colors.white
    },
    sliderSmallCard: {
      sliderSmallCardText: colors.darkGray,
      sliderSmallCardLabelBackground: colors.orangeSoft,
      sliderSmallCardLabelTextColor: colors.white
    },
    onScrollHeader: {
      onScrollHeaderWrapperBackground: colors.white
    }
  },
  input: {
    inputColor: colors.blue,
    inputPlaceholder: colors.gray
  },
  footer: {
    footerBackground: colors.black,
    footerColor: colors.white,
    footerColorOnHover: colors.blue
  }
}

export default theme
