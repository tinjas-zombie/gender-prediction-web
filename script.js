const input = document.getElementById("nameInput");
const button = document.getElementById("btn");
const result = document.getElementById("result");
const ClearBtn = document.getElementById("ClearBtn");
const mode = document.getElementById("mode");
const body = document.getElementById("display");
const mode2 = document.getElementById("mode2")
const judul = document.getElementById("judul");
const logoUser = document.getElementById("user");
const span = document.getElementById("span");

mode.addEventListener("click" , function () {
    mode.style.display = "none";
    body.style.backgroundColor = "#ffffffff";
    mode2.style.display = "flex";
    judul.style.color = "black";
    logoUser.style.color = "black";
    span.style.borderBottom = "2px solid black";
});

mode2.addEventListener("click" , function () {
    mode.style.display = "flex";
    body.style.backgroundColor = "rgb(19, 19, 73)";
    mode2.style.display = "none";
    judul.style.color = "white";
    logoUser.style.color = "white";
    span.style.borderBottom = "2px solid white";
});

button.addEventListener("click", async () => {
    const name = input.value;

    if (name === "") {
        alert("isi nama dulu");
        return;
    }

    const response = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await response.json();

    result.innerHTML = `gender ${name} kemungkinan : ${data.gender} <br> pencet bersihkan untuk mengisi nama baru`;
    
});

ClearBtn.addEventListener("click", () => {
    input.value = "";
    result.innerText = "";
    input.focus();
});