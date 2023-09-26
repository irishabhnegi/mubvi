export const state = {
  nowPlaying: {},
}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 65fdaf6feadb7026078f21758ac799c9',
  },
}

export const getNowPlaying = async function () {
  try {
    const res = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing',
      options
    )
    // console.log(res)
    const { results } = await res.json()
    console.log(results)

    state.nowPlaying = results

    console.log(state.nowPlaying)
  } catch (error) {
    console.log(error)
  }
}
