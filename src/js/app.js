import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
 img = document.getElementById("img1");
          
            function enlargeImg() {
                img.style.width = "60%";
                img.style.height = "auto";
                img.style.transition = "width 0.5s ease";
            }
            
            function resetImg() {
                img.style.width = "40%";
                img.style.height = "auto";
                img.style.transition = "width 0.5s ease";
            }
