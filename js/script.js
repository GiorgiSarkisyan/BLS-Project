const cars = document.querySelector(".mainpage-ambulance-cards");
const users = [
  {
    image: "GlobalImages/BLS_FRONTLINE-200x227.jpg",
    title: "BLS Frontline",
    alt: "ambulance",
  },
  {
    image:
      "GlobalImages/BLS_Minibus-200x227.jpg",
    title: "Minibus",
    alt: "ambulance",
  },
  {
    image: "GlobalImages/BLS_PTS-200x227.jpg",
    title: "PTS",
    alt: "ambulance",
  },
  {
    image: "GlobalImages/BLS_SECURE-200x227.jpg",
    title: "Secure",
    alt: "ambulance",
  },
  {
    image: "GlobalImages/BLS_WAV-200x227.jpg",
    title: "WAV",
    alt: "ambulance",
  },
  {
    image: "GlobalImages/BLSHDU-200x227.jpg",
    title: "BLS HDU",
    alt: "ambulance",
  },
];

for (let i = 0; i < users.length; i++) {
    cars.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
    <div class ="card-image">
        <img src="${users[i].image}" alt="ambulance">
    </div>
    <div class="card-title">
    <h3>${users[i].title}<h3>
    </div>
    </div>`
    );
    
}




