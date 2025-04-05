const hoverSound = document.getElementById("hover-sound");
document.querySelector("img").addEventListener("mouseenter", () => hoverSound.play());

document.getElementById("shopForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-response").innerHTML =
    '<div class="success-message">Thanks for your message! A beam will reach you soon.</div>';
});

function savePet() {
  const pet = { name: "Glowy" };
  localStorage.setItem("holo-pet", JSON.stringify(pet));
  alert("Your Holo-Pet has been saved!");
}

function selectTab(tabName) {
  document.getElementById("pet-preview").innerHTML =
    `<p>Showing options for <strong>${tabName}</strong></p>`;
}
const petSelect = document.getElementById("pet-select");
const colorPicker = document.getElementById("color-picker");
const nameInput = document.getElementById("pet-name");
const previewImage = document.getElementById("preview-image");
const petNameDisplay = document.getElementById("pet-name-display");
const petDesc = document.getElementById("pet-desc");

const petData = {
  "Holo-Cat": {
    image: "./assets/cat.webp",
    desc: "A shimmering feline friend."
  },
  "Holo-Dragon": {
    image: "./assets/dragon.webp",
    desc: "A majestic glowing beast."
  },
  "Holo-Fox": {
    image: "./assets/fox.jpg",
    desc: "A sly, radiant companion."
  }
};

if (petSelect) {
  petSelect.addEventListener("change", () => {
    const selected = petSelect.value;
    previewImage.src = petData[selected].image;
    petDesc.textContent = petData[selected].desc;
  });

  colorPicker.addEventListener("input", () => {
    previewImage.style.filter = `drop-shadow(0 0 15px ${colorPicker.value})`;
  });

  nameInput.addEventListener("input", () => {
    const name = nameInput.value.trim();
    petNameDisplay.textContent = `Name: ${name || "N/A"}`;
  });
}

function savePet() {
  const name = nameInput.value.trim();
  const pet = petSelect.value;
  const color = colorPicker.value;

  if (!name) {
    alert("Please name your Holo-Pet before saving.");
    return;
  }

  alert(`Saved! Your ${pet} named "${name}" with theme ${color} is ready.`);
}
