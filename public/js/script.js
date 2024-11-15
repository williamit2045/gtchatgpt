console.log("script working")
const setCid = (event) => {
    sessionStorage.setItem("cids", event.target.closest("a").getAttribute("data-cids"))
}

const submitForm = (event) => {
    event.target.closest("form").submit()
}

const nextPage = async () => {
    const pageNumber = document.getElementById("pageNumber").innerText
    const newPageNumber = String(+pageNumber + 1)
    const url = window.location.href
    if (url[url.length-2] !== "=") {
        window.location.assign(window.location.href + "?page=" + newPageNumber)
    } else {
        window.location.assign(window.location.href.slice(0, -1) + newPageNumber)
    }
}

const previousPage = async () => {
    const pageNumber = document.getElementById("pageNumber").innerText
    const newPageNumber = String(+pageNumber - 1)
    window.location.assign(window.location.href.slice(0, -1) + newPageNumber)
}