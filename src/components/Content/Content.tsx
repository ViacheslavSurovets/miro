import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import theme from '../../core/theme-styledComponents'
import GlobalStyles from '../../styles/globalStyles'
import { Header } from './styles'
import { bootstrap } from './controller'

const Root = (props: any) => {
  const { useRef, useEffect, useState } = React
  const containerRef = useRef<HTMLDivElement>(null)
  const [state, setState] = useState({
    isImageMode: false,
    imageUrl: undefined,
  })



  useEffect(() => {
    bootstrap()
    console.log('state', state)
    modeChanger().catch(e => console.log(e))
  }, [])

  const modeChanger = async () => {
    const savedState = await miro.__getRuntimeState()
    console.log('savedState', savedState)
    if(Object.keys(savedState).length == 0) return;
    await setState({
      ...state,
      isImageMode: savedState.imageMode,
      imageUrl: savedState.imageUrl
    })
  }


  const { isImageMode, imageUrl } = state

  return (
    <>
      { isImageMode ?
        <div className="draggable-item image-box">
          <img src="https://realtimeboard.com/api/awesome-plugins/plugins/rtb_sticker_pack/img/Asset_11.svg"
               data-image-url="https://realtimeboard.com/api/awesome-plugins/plugins/rtb_sticker_pack/${img.src}"/>
        </div>

        :
        <>
          <Header>Hello</Header>
          <div id="content_images" ref={ containerRef }/>
        </>
      }

    </>
  )
}

miro.onReady(() => {
  ReactDOM.render(
    <ThemeProvider theme={ theme }>
      <>
        <GlobalStyles/>
        <Root/>
      </>
    </ThemeProvider>
    , document.getElementById('container'))
})
