const form_btn = document.querySelector("#form-btn");
const nameInput = document.querySelector("#name");
const addressInput = document.querySelector("#address");
const numberInput = document.querySelector("#number");
const popup = document.querySelector(".popup-wrapper");

nameInput.addEventListener("input", (event) => {
  const value = event.target.value;
  const sanitizedValue = value.replace(/\./g, "");
  event.target.value = sanitizedValue;
});

form_btn.addEventListener("click", async () => {
  const data = {
    name: nameInput.value,
    address: addressInput.value,
    number: numberInput.value,
  };

  fetch("http://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).finally(() => {
    popup.style.display = "block";
    document.body.style.overflow = "hidden";
  });
});

document.body.addEventListener("click", (event) => {
  if (event.target.className === "popup-wrapper") {
    popup.style.display = "none";
    document.body.style.overflow = "auto";

  }
});
