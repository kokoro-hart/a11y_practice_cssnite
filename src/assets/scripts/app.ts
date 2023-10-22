import {
  addClassOnViewportEnter,
  changeMetaViewport,
  followCurrents,
  hamburgerMenu,
  hashTransition,
  smoothEasingScroll,
} from "./common"
import { videoModalWithTab } from "./video"

function App() {
  changeMetaViewport()
  hamburgerMenu()
  addClassOnViewportEnter()
  smoothEasingScroll()
  videoModalWithTab()
  hashTransition()
  followCurrents()
}

export default App()
