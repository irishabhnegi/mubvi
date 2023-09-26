class View {
  #banner = document.querySelector('.banner')
  #bannerLeft = document.querySelector('.banner-left')
  #bannerSlider = document.querySelector('.banner-slider')
  #data
  render(data) {
    this.data = data
    const markup = this._generateMarkup()
    this.#bannerSlider.innerHTML = ''
    this.#bannerSlider.insertAdjacentHTML('afterbegin', markup)
  }

  _generateMarkup() {
    return this.data
      .map((data) => {
        return `<div class="show">
                 <a href="">
                   <img src="https://image.tmdb.org/t/p/original/${data.poster_path}" alt="" />
                 </a>
              </div>
  `
      })
      .join('')
    // console.log(markup)
  }
}

export default new View()
