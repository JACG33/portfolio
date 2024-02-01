document.addEventListener("DOMContentLoaded", e => {

  
  const getThemeConfig = () => {
    let theme = window.localStorage.getItem("theme")
    if (theme) {
      let configTheme = JSON.parse(theme)
      if (configTheme.theme == "dark") {
        document.querySelector("svg.icon-sun").classList.remove("opacity-0")
        document.querySelector("svg.icon-moon").classList.add("opacity-0")
        document.querySelector("html").classList.add("dark")
        document.querySelector("html").classList.remove("ligth")
      }
      if (configTheme.theme == "ligth") {
        document.querySelector("svg.icon-sun").classList.add("opacity-0")
        document.querySelector("svg.icon-moon").classList.remove("opacity-0")
        document.querySelector("html").classList.remove("dark")
        document.querySelector("html").classList.add("ligth")
      }
    }
  }
  getThemeConfig()

  document.addEventListener("click", e => {

    const { target } = e

    if (target.closest("[data-btn=toggletheme]")) {
      if (document.querySelector("html").classList.contains("dark")) {
        target.closest("[data-btn=toggletheme]").querySelector("svg.icon-sun").classList.add("opacity-0")
        target.closest("[data-btn=toggletheme]").querySelector("svg.icon-moon").classList.remove("opacity-0")
        document.querySelector("html").classList.toggle("dark")
        document.querySelector("html").classList.toggle("ligth")
      }
      else {
        target.closest("[data-btn=toggletheme]").querySelector("svg.icon-sun").classList.remove("opacity-0")
        target.closest("[data-btn=toggletheme]").querySelector("svg.icon-moon").classList.add("opacity-0")
        document.querySelector("html").classList.toggle("dark")
        document.querySelector("html").classList.toggle("ligth")
      }

      let theme = window.localStorage.getItem("theme")
      if (theme) {
        let configTheme = JSON.parse(theme)
        if (configTheme.theme == "dark") {
          window.localStorage.setItem("theme", JSON.stringify({ "theme": "ligth" }))
        }
        if (configTheme.theme == "ligth") {
          window.localStorage.setItem("theme", JSON.stringify({ "theme": "dark" }))
        }

      } else {
        window.localStorage.setItem("theme", JSON.stringify({ "theme": "dark" }))
      }
    }



  })


})