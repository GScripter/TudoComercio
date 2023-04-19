if(document.getElementsByClassName("showcategories").length > 0){
    [...document.getElementsByClassName("showcategories")].map(btn => {
        btn.addEventListener("click", () => {
            document.getElementById("categories-dropdown-container").classList.toggle("d-none")
        })
        btn.addEventListener("mouseenter", () => {
            document.getElementById("categories-dropdown-container").classList.toggle("d-none")
        })
    })
}


const THUMBNAILS = [...document.getElementsByClassName("image-thumbnail")]
THUMBNAILS.map(thumbnail => {
    thumbnail.addEventListener("click", (evt) => {
        document.getElementsByClassName("gallery-main-img")[0].src = evt.target.src
    })
})


if(document.getElementById("btn-filters")){
    document.getElementById("btn-filters").addEventListener("click", () => {
        document.getElementById("filters").classList.toggle("close")
    })
}
