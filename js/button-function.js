function toggleLikeButton(el) {

    if (el.classList.contains("mdi-heart-outline")) {
        el.classList.remove("mdi-heart-outline")
        el.classList.add("mdi-heart");
    } else if (el.classList.contains("mdi-heart")) {
        
        el.classList.add("mdi-heart-outline");
        el.classList.remove("mdi-heart")
    }
}

function ratingListener (el) {
    if (el.classList.contains("mdi-star-outline")) {
        el.classList.remove("mdi-star-outline")
        el.classList.add("mdi-star");
    } else if (el.classList.contains("mdi-star")) {
        el.classList.add("mdi-star-outline");
        el.classList.remove("mdi-star")
    }
}
