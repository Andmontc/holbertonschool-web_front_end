function changeMode(size, weight, transform, background, color) {
  return _ => {
      document.body.style.fontSize = size + 'px'
      document.body.style.fontWeight = weight
      document.body.style.textTransform = transform
      document.body.style.backgroundColor = background
      document.body.style.color = color
  }
}

function main() {
  let spooky = changeMode("9", "bold", "uppercase", "pink", "green");
  let darkMode = changeMode("12", "bold", "capitalize", "black", "white");
  let screenMode = changeMode("12", "normal", "lowercase", "white", "black");

  let paragraph = document.createElement("p");
  paragraph.append("Welcome Holberton!");
  document.body.appendChild(paragraph);

  let buttonSpooky = document.createElement("button");
  buttonSpooky.append("Spooky");
  document.body.appendChild(buttonSpooky);
  buttonSpooky.addEventListener("click", spooky);

  let buttonDarkMode = document.createElement("button");
  buttonDarkMode.append("Dark mode");
  document.body.appendChild(buttonDarkMode);
  buttonDarkMode.addEventListener("click", darkMode);

  let buttonScreenMode = document.createElement("button");
  buttonScreenMode.append("Scream mode");
  document.body.appendChild(buttonScreenMode);
  buttonScreenMode.addEventListener("click", screenMode);
}

main()
