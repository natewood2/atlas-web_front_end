function changeMode(size, weight, transform, background, color) {
    return () => {
      const tags = ["p", "a", "h1", "h2", "h3", "li", "span", "input", "div", "body"];
  
      tags.forEach(tag => {
        const elements = document.getElementsByTagName(tag);
        Array.from(elements).forEach(element => {
          element.style.color = color;
          element.style.backgroundColor = background;
          element.style.fontSize = size;
          element.style.fontWeight = weight;
          element.style.textTransform = transform;
        });
      });
    };
  }
  
  function main () {
    const veryspooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
  

    const paragraph = document.createElement("p");
    const veryspookyButton = document.createElement("button");
    const darkButton = document.createElement("button");
    const screamButton = document.createElement("button");
    paragraph.innerHTML = "Welcome Holberton!";
    veryspookyButton.innerHTML = "Spooky";
    darkButton.innerHTML = "Dark mode";
    screamButton.innerHTML = "Scream mode";
    document.body.appendChild(paragraph);
    document.body.appendChild(veryspookyButton);
    document.body.appendChild(darkButton);
    document.body.appendChild(screamButton);
    veryspookyButton.onclick = veryspooky;
    darkButton.onclick = darkMode;
    screamButton.onclick = screamMode;
  }
  
  
  main();
