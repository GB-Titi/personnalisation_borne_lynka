
function changeColor(color) {
  let borne = document.getElementById("testbox");
  let borne_arcade = document.getElementById("borne_arcade");
  switch (color) {
    case "bleu":
      console.log(color);
      borne_arcade.style.backgroundImage = "url('../img/Bleu.png')";
      break;
    case "jaune":
      borne_arcade.style.backgroundImage = "url('../img/Jaune.png')";
      console.log(color);
      break;
    case "rouge":
      borne_arcade.style.backgroundImage = "url('../img/Rouge.png')";
      console.log(color);
      break;
    case "vert":
      borne_arcade.style.backgroundImage = "url('../img/Vert.png')";
      console.log(color);
      break;

    default:

      break;
  }
}

var loadHeader = function(event) {
    var output = document.getElementById('img_header');
    var borne_header = document.getElementById('borne_header');
    output.src = URL.createObjectURL(event.target.files[0]);
    borne_header.src = URL.createObjectURL(event.target.files[0]);
  };

var loadCarre = function(event) {
    var output = document.getElementById('img_carre');
    var borne_carre = document.getElementById('borne_carre');
    output.src = URL.createObjectURL(event.target.files[0]);
    borne_carre.src = URL.createObjectURL(event.target.files[0]);

  };

