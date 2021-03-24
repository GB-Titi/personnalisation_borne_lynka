
function changeColor(color) {
  let borne = document.getElementById("testbox");
  switch (color) {
    case "bleu":
      console.log(color);
      borne.style.backgroundColor = "#0000ff"
      break;
    case "jaune":
      borne.style.backgroundColor = "#ffff00"

      console.log(color);
      break;
    case "rouge":
      borne.style.backgroundColor = "#ff0000"

      console.log(color);
      break;
    case "vert":
      borne.style.backgroundColor = "#00ff00"

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

