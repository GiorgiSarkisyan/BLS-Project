const logo = document.getElementById("logo");

logo.addEventListener("mouseup", () => {
  logo.setAttribute("src", "GlobalImages/BLS_Frame_Logo_White.png");
});

logo.addEventListener("mousedown", () => {
  logo.setAttribute("src", "GlobalImages/BLS_Original_Logo.png");
});