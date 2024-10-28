const AllCars = document.querySelector(".AllCars");

const dragging = (e) => {
    AllCars.scrollLeft = e.pageX;
}

AllCars.addEventListener("mousemove", dragging);

