const photos = document.querySelectorAll(".team-photo");

photos.forEach(photo => {

  photo.addEventListener("mouseenter", () => {
    photo.classList.add("photo-hover");
  });

  photo.addEventListener("mouseleave", () => {
    photo.classList.remove("photo-hover");
  });

});
 
