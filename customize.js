const petSelect = document.getElementById("pet-select");
const colorPicker = document.getElementById("color-picker");
const nameInput = document.getElementById("pet-name");
const previewImage = document.getElementById("preview-image");
const petNameDisplay = document.getElementById("pet-name-display");
const petDesc = document.getElementById("pet-desc");

const petData = {
  "Holo-Cat": {
    image: "assets/holo-cat.png",
    desc: "A shimmering feline friend."
  },
  "Holo-Dragon": {
    image: "assets/holo-dragon.png",
    desc: "A majestic glowing beast."
  },
  "Holo-Fox": {
    image: "assets/holo-fox.png",
    desc: "A sly, radiant companion."
  }
};

petSelect.addEventListener("change", updatePetPreview);
colorPicker.addEventListener("input", updateColor);
nameInput.addEventListener("input", updateName);

function updatePetPreview() {
  const selected = petSelect.value;
  previewImage.src = petData[selected].image;
  petDesc.textContent = petData[selected].desc;
}

function updateColor() {
  const color = colorPicker.value;
  previewImage.style.filter = `drop-shadow(0 0 15px ${color})`;
}

function updateName() {
  const name = nameInput.value.trim();
  petNameDisplay.textContent = `Name: ${name || "N/A"}`;
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
