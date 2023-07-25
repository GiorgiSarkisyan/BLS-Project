const logo = document.querySelector(".wrapper")

const users = [{
    image: "GlobalImages/BLS_Frame_Logo_White.png",
    title: "EMS Frontline"
},
{

}]
for (let i = 0; i < users.length; i++) {
    logo.insertAdjacentHTML("beforeend", `<div class="card">
    <div class="card-image">
    ${users[i].image}
    </div>
    <div class="card-title">
    ${users[i].title}
    </div>
</div>` 
)    
}