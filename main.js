let index = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll(".carousel-items .item");
    const totalItems = items.length;

    index += direction;

    if (index >= totalItems) {
        index = 0;
    } else if (index < 0) {
        index = totalItems - 1;
    }

    document.querySelector(".carousel-items").style.transform = `translateX(-${index * 100}%)`;
}

function toggleFaq(element) {
    const item = element.parentElement; 
    item.classList.toggle("active");
}
