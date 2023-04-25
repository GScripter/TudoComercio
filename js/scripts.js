if(document.getElementsByClassName("showcategories").length > 0){
    [...document.getElementsByClassName("showcategories")].map(btn => {
        if(screen.width <= 768){
            btn.addEventListener("click", () => {
                document.getElementById("categories-dropdown-container").classList.toggle("d-none")
            })
        }else{
            btn.addEventListener("mouseenter", () => {
                document.getElementById("categories-dropdown-container").classList.toggle("d-none")
            })
            btn.addEventListener("mouseleave", () => {
                document.getElementById("categories-dropdown-container").classList.toggle("d-none")
            })
        }
    })
}

if(document.getElementById("categories-dropdown-container")){
    if(screen.width > 768){
        document.getElementById("categories-dropdown-container").addEventListener("mouseenter", () => {
            document.getElementById("categories-dropdown-container").classList.toggle("d-none")
        })
        document.getElementById("categories-dropdown-container").addEventListener("mouseleave", () => {
            document.getElementById("categories-dropdown-container").classList.toggle("d-none")
        })
    }
}

const THUMBNAILS = [...document.getElementsByClassName("image-thumbnail")]
THUMBNAILS.map(thumbnail => {
    thumbnail.addEventListener("click", (evt) => {
        THUMBNAILS.map(thumbnails => {
            thumbnails.style = "border: none;"
        })
        evt.target.style = "border: 4px solid #F1A83E;"
        document.getElementsByClassName("gallery-main-img")[0].src = evt.target.src
    })
})


if(document.getElementById("btn-filters")){
    document.getElementById("btn-filters").addEventListener("click", () => {
        document.getElementById("filters").classList.toggle("close")
    })
}

const THUMBNAILS_WIDTH = document.getElementsByClassName("thumbnails")[0]
THUMBNAILS.map(thumbnail => {
    thumbnail.addEventListener("click", (evt) => {
        evt.target.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "end"
        })
    })
})

