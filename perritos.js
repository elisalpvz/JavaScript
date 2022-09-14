window.addEventListener("DOMContentLoaded", () => {
  const dogBtn = document.querySelector(".dog-btn"),
    dogFigure = document.querySelector(".dog-figure"),
    dogCaption = document.querySelector(".dog-caption"),
    // los tipos de perritos
    adjectives = [
      "Beautiful",
      "Beloved",
      "Blissful",
      "Bold",
      "Brilliant",
      "Charming",
      "Cute",
      "Dazzling",
      "Fabulous",
      "Fantastic",
      "Fearless",
      "Friendly",
      "Funny",
      "Gentle",
      "Glorious",
      "Good",
      "Gorgeous",
      "Graceful",
      "Great",
      "Handsome",
      "Happy",
      "Kind",
      "Lively",
      "Lovable",
      "Lovely",
      "Magnificent",
      "Majestic",
      "Marvelous",
      "Perfect",
      "Playful",
      "Precious",
      "Radiant",
      "Remarkable",
      "Sensational",
      "Spectacular",
      "Splendid",
      "Stunning",
      "Superb",
      "Talented",
      "Vibrant",
      "Wonderful",
    ];

  dogBtn.addEventListener("click", getDog);

  getDog();

  function getDog() {
    fetch("https://random.dog/woof.json") // de aqui es de donde se cogen las imagenes y videos, intente hacerlo subiendo las imagenes a git y poniendo el enlace
      // pero no me funcionaba :(
      .then((res) => res.json())
      .then((data) => {
        const dogURL = data.url,
          prevContent = document.querySelector(".dog-media");

        if (prevContent) {
          //borrar contenido previo
          prevContent.remove();
        }

        if (dogURL.endsWith("mp4")) {
          //Create video element
          const dogVideo = document.createElement("video");

          //atributos video
          dogVideo.setAttribute("src", dogURL);
          dogVideo.setAttribute("autoplay", "");
          dogVideo.setAttribute("muted", "");
          dogVideo.setAttribute("loop", "");
          dogVideo.classList.add("dog-media");

          //monitor del video
          dogFigure.appendChild(dogVideo);
        } else {
          //Creamos una constante de elemento imagen
          const dogImage = document.createElement("img");

          //atributos de la imagen
          dogImage.setAttribute("src", dogURL);
          dogImage.classList.add("dog-media");

          //monitor de imagen
          dogFigure.appendChild(dogImage);
        }

        dogCaption.textContent = `A ${
          adjectives[Math.floor(Math.random() * adjectives.length)]
        } Doggo!`;
      })
      .catch((err) => (dogCaption.textContent = "Doggos Unavailable!"));
  }
});
