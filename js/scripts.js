if(document.getElementsByClassName("showcategories").length > 0){
    // DropDown of categories from the home page
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
            document.getElementById("categories-dropdown-container").addEventListener("mouseenter", () => {
                document.getElementById("categories-dropdown-container").classList.remove("d-none")
            })
            document.getElementById("categories-dropdown-container").addEventListener("mouseleave", () => {
                document.getElementById("categories-dropdown-container").classList.add("d-none")
            })
        }
    })

    // Do not repeat sample categories from the home page
    let spaceTopFilled = 0
    let totalCategoriesVisibleInTheTopRow = -1
    const SAMPLE_CATEGORIES = document.getElementsByClassName("sample-categories")[0]
    const SAMPLE_CATEGORIES_CHILDS = [...SAMPLE_CATEGORIES.children]
    SAMPLE_CATEGORIES_CHILDS.map(el => {
        if(spaceTopFilled + el.clientWidth < SAMPLE_CATEGORIES.clientWidth){
            totalCategoriesVisibleInTheTopRow++
            spaceTopFilled += el.clientWidth
        }
    })

    let spaceBottomFilled = 0
    let totalCategoriesVisibleInTheBottomRow = -1
    SAMPLE_CATEGORIES_CHILDS.map((el, index) => {
        if(index > totalCategoriesVisibleInTheTopRow && spaceBottomFilled + el.clientWidth < SAMPLE_CATEGORIES.clientWidth){
            totalCategoriesVisibleInTheBottomRow++
            spaceBottomFilled += el.clientWidth
        }
    })
    const totalTopAndBottom = totalCategoriesVisibleInTheTopRow + totalCategoriesVisibleInTheBottomRow
    const CATEGORIES_DROPDOWN_CHILDS = [...document.getElementById("categories-dropdown-container").children[0].children]
    CATEGORIES_DROPDOWN_CHILDS.map((el, index) => {
        if(index-1 <= totalTopAndBottom){
            document.getElementById("categories-dropdown-container").children[0].innerHTML = ''
        }else{
            document.getElementById("categories-dropdown-container").children[0].appendChild(el)
        }
    })
}

const THUMBNAILS = [...document.getElementsByClassName("image-thumbnail")]
THUMBNAILS.map(thumbnail => {
    thumbnail.addEventListener("click", (evt) => {
        // Move scroll by clicking thumbnail
        evt.target.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
        })
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


