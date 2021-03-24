
function changeColor(color) {
  let borne = document.getElementById("testbox");
  let borne_arcade = document.getElementById("borne_arcade");
  switch (color) {
    case "bleu":
      console.log(color);
      borne.style.backgroundColor = "#0000ff";
      borne_arcade.style.backgroundImage = "url('../img/Bleu.png')";
      break;
    case "jaune":
      borne.style.backgroundColor = "#ffff00";
      borne_arcade.style.backgroundImage = "url('../img/Jaune.png')";
      console.log(color);
      break;
    case "rouge":
      borne.style.backgroundColor = "#ff0000"
      borne_arcade.style.backgroundImage = "url('../img/Rouge.png')";
      console.log(color);
      break;
    case "vert":
      borne.style.backgroundColor = "#00ff00"
      borne_arcade.style.backgroundImage = "url('../img/Vert.png')";
      console.log(color);
      break;

    default:
        borne.backgroudColor = black

      break;
  }
}

var loadHeader = function(event) {
    var output = document.getElementById('img_header');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      // URL.revokeObjectURL(output.src) // free memory
    }
    //console.log(output.src)
  };

var loadCarre = function(event) {
    var output = document.getElementById('img_carre');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      // URL.revokeObjectURL(output.src) // free memory
    }
   // console.log(output.src)
  };

