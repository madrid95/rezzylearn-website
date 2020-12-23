function toggleLikeButton(el) {

    if (el.classList.contains("mdi-heart-outline")) {
        el.classList.remove("mdi-heart-outline")
        el.classList.add("mdi-heart");
    } else if (el.classList.contains("mdi-heart")) {
        
        el.classList.add("mdi-heart-outline");
        el.classList.remove("mdi-heart")
    }

    
}