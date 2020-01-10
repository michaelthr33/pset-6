let elements = []

var add = document.getElementById("add_button");

var row = document.getElementsByClassName("row");

let importancebutton = document.getElementsByClassName("importancebutton");

let resolvedbutton = document.getElementsByClassName("resolvedbutton");

let deletebutton = document.getElementsByClassName("deletebutton");

let list = document.getElementsByClassName("to_do")



let element_prioritize;



window.onload = function() {

  document.getElementById("table").onmouseover = startup;

}



const create_item = function() {

  let input = document.getElementById("input_item").value;

  if (input === "") {



  }

  else {

      let to_do = {

          task: input,

          priority: false,

          complete: false,

          html_row: null,

          html_importancebutton: null,

          html_text: null,

          html_remove_button: null

      }



      elements.push(to_do);

      let index = elements.indexOf(to_do);



      elements[index].htmlRow = document.createElement("tr");

      elements[index].htmlRow.setAttribute("class", "row");

      document.getElementById("table").append(elements[index].htmlRow);



      elements[index].htmlPriorityButton = document.createElement("td");

      elements[index].htmlPriorityButton.setAttribute("class", "importancebutton");

      elements[index].htmlPriorityButton.innerHTML = "!";



      row[index].append(elements[index].htmlPriorityButton);



      elements[index].htmlText = document.createElement("td");

      elements[index].htmlText.innerHTML = elements[index].task;

      elements[index].htmlText.setAttribute("class", "to_do");



      row[index].append(elements[index].htmlText);



      elements[index].htmlCompleteButton = document.createElement("td");

      elements[index].htmlCompleteButton.innerHTML = "&#x2713;";

      elements[index].htmlCompleteButton.setAttribute("class", "resolvedbutton");



      row[index].append(elements[index].htmlCompleteButton);



      elements[index].htmlRemoveButton = document.createElement("td");

      elements[index].htmlRemoveButton.setAttribute("class", "deletebutton");

      elements[index].htmlRemoveButton.innerHTML = "X";



      row[index].append(elements[index].htmlRemoveButton);

    }

    document.getElementById("input_item").value = "";

};



const remove_item = function() {

  var removed = false;

  for (let i = 0; i < deletebutton.length; i++) {

    deletebutton[i].onclick = function() {

        removed = true;

        let remove_element = row[i];

        remove_element.remove();

        elements.splice(i, 1);

    };

    if (removed) {

        break;

    }

  }

}



const finish_item = function() {

  var finish = false;

  for (let x = 0; x < resolvedbutton.length; x++) {

    resolvedbutton[x].onclick = function() {

       if (elements[x].complete == false) {

         finish = true;

         list[x].style.setProperty("text-decoration", "line-through");

         list[x].style.backgroundColor = "#baff66";

         resolvedbutton[x].style.backgroundColor = "#baff66";

         elements[x].complete = true;

       }

       else if (elements[x].complete == true) {

         resolvedbutton[x].style.backgroundColor = "white";

         list[x].style.setProperty("text-decoration", "none");

         list[x].style.backgroundColor = "white";

         elements[x].complete = false;

       }

     };

     if (finish) {

       break;

     }

  }

}



const prioritize_item = function() {

  var prioritize = false;

  for (let z = 0; z < importancebutton.length; z++) {

    importancebutton[z].onclick = function () {

      if (elements[z].priority == false) {

        element_prioritize = row[z]

        prioritize = true;

        importancebutton[z].style.backgroundColor = "blue";

        row[0].before(element_prioritize);

        elements[z].priority = true;



        const objectToMove = elements[z];



        elements.splice(z, 1);

        elements.unshift(objectToMove);

        prioritize = true;

      }

      else if (elements[z].priority) {

        element_prioritize = row[z]

        importancebutton[z].style.backgroundColor = "white";

        row[elements.length - 1].after(element_prioritize);

        elements[z].priority = false;



        let element_move = elements[z];

        elements.splice(z, 1);

        elements.push(element_move);

        prioritize = true;

      }

    };

    if (prioritize) {

      break;

    }

  }

}



const startup = function() {

  remove_item();

  finish_item();

  prioritize_item();

}



add.onclick = create_item



document.getElementById("input_item").addEventListener("keyup", function(event) {

  if (event.keyCode === 13) {

    document.getElementById("add_button").click();

  }

});
