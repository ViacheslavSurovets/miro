import { CLIENT_ID } from '../../utils/config'
import { images } from './data'


const getImage = (img) => {
  return `<div class="draggable-item image-box">
						<img src="${img.src}" data-image-url="https://realtimeboard.com/api/awesome-plugins/plugins/rtb_sticker_pack/${img.src}">
			</div>`
}

const addShapes = (container) => {
  container.innerHTML += `<div class="shape draggable-item green" data-color="0ca788">I am shape</div><div class="shape draggable-item red" data-color="f24726">Me too</div>`
}

const addImages = (container) => {
  container.innerHTML += images.map((i) => getImage(i)).join('')
}

const createImage = (canvasX, canvasY, url)  =>{
  return miro.board.widgets.create({
    metadata:{
      [CLIENT_ID]: {
        createdImage: true
      }
    },
    type: 'image',
    url: url,
    x: canvasX,
    y: canvasY,
  })
}

export const isCreatedImage = (widget) => {
  console.log('isCreatedImage', widget.metadata[CLIENT_ID].createdImage)
  return widget.metadata[CLIENT_ID] && widget.metadata[CLIENT_ID].createdImage
}

const createShape = (canvasX, canvasY, color, text) => {
  return miro.board.widgets.create({
    metadata:{
      [CLIENT_ID]: {
        createdShape: true
      }
    },
    type: 'shape',
    text: text,
    x: canvasX,
    y: canvasY,
    style: {
      textColor: '#fff',
      backgroundColor: '#' + color,
      borderColor: 'transparent',
    },
  })
}

export const getWidget = async ( e ) => {
  console.log('getWidget_event', e)
  let [widget] = await miro.board.selection.get()
  console.log('getWidget', widget)
  await miro.__setRuntimeState({imageUrl: widget.url})
  await miro.__setRuntimeState({imageMode: true})
  await miro.board.ui.openLibrary('content.html', {title: 'ContentImages'})
}

export const bootstrap = () => {
  const container = document.getElementById('content_images')
  addShapes(container)
  addImages(container)

  let currentImageUrl
  const imageOptions = {
    draggableItemSelector: 'img',
    onClick: async (targetElement) => {
      console.log(targetElement)
      const url = targetElement.getAttribute('data-image-url')
      const widget = (await createImage(0, 0, url))[0]
      miro.board.viewport.zoomToObject(widget)
    },
    getDraggableItemPreview: (targetElement) => {
      //drag-started
      console.log('horrrrrrrrrrraaayyy')
      currentImageUrl = targetElement.getAttribute('data-image-url')
      return {
        width: 100,
        height: 100,
        url: currentImageUrl,
      }
    },
    onDrop: (canvasX, canvasY) => {
      console.log('onDrop 1')
      createImage(canvasX, canvasY, currentImageUrl)
    },
  }
  miro.board.ui.initDraggableItemsContainer(container, imageOptions)

  let currentShapeColor
  let currentShapeText
  const shapeOptions = {
    draggableItemSelector: '.shape',
    onClick: async (targetElement) => {
      console.log(targetElement)
      const color = targetElement.getAttribute('data-color')
      const text = targetElement.innerText
      const widget = (await createShape(0, 0, color, text))[0]
      miro.board.viewport.zoomToObject(widget)
    },
    getDraggableItemPreview: (targetElement) => {
      currentShapeColor = targetElement.getAttribute('data-color')
      currentShapeText = targetElement.innerText
      return {
        url: `data:image/svg+xml,%3Csvg width='140' height='140' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Crect stroke='null' x='0' y='0' fill='%23${currentShapeColor}' height='140' width='140'/%3E%3C/g%3E%3C/svg%3E`,
      }
    },
    onDrop: (canvasX, canvasY) => {
      console.log('onDrop 2')
      createShape(canvasX, canvasY, currentShapeColor, currentShapeText)
    },
  }
  miro.board.ui.initDraggableItemsContainer(container, shapeOptions)
}


