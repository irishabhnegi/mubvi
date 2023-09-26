import { state, getNowPlaying } from './model.js'
import view from './view.js'

const controlNowPlaying = async function () {
  await getNowPlaying()

  const { nowPlaying } = state

  view.render(nowPlaying)
}
controlNowPlaying()
