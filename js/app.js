let elements = []
var add = document.getElementById("add_button");
var row = document.getElementsByClassName("row");
let priority = document.getElementsByClassName("priority");
let finish = document.getElementsByClassName("finish");
let delete = document.getElementsByClassName("delete");
let item = document.getElementsByClassName("to_do")
let important;
window.onload = function() {
  document.getElementById("table").onmouseover = startup;
}
const create = function() {
  let input = document.getElementById("input_item").value;
  if (input === "") {
  }
  else {
      let to_do = {
        task: input,
          priority: false,
          complete: false,
          html_row: null,
          html_priority: null,
          html_text: null,
          html_delete: null
      }
      elements.push(to_do);
      let index = elements.indexOf(to_do);
      elements[index].htmlRow = document.createElement("tr");
      elements[index].htmlRow.setAttribute("class", "row");
      document.getElementById("table").append(elements[index].htmlRow);
      elements[index].htmlPriorityButton = document.createElement("td");
      elements[index].htmlPriorityButton.setAttribute("class", "priority");
      elements[index].htmlPriorityButton.innerHTML = "!";
      row[index].append(elements[index].htmlPriorityButton);
      elements[index].htmlText = document.createElement("td");
      elements[index].htmlText.innerHTML = elements[index].task;
      elements[index].htmlText.setAttribute("class", "to_do");
      row[index].append(elements[index].htmlText);
      elements[index].htmlCompleteButton = document.createElement("td");
      elements[index].htmlCompleteButton.innerHTML = "&#x2713;";
      elements[index].htmlCompleteButton.setAttribute("class", "finish");
      row[index].append(elements[index].htmlCompleteButton);
      elements[index].htmlRemoveButton = document.createElement("td");
      elements[index].htmlRemoveButton.setAttribute("class", "delete");
      elements[index].htmlRemoveButton.innerHTML = "X";
      row[index].append(elements[index].htmlRemoveButton);
    }
    document.getElementById("input_item").value = "";
};
const remove = function() {
  var removed = false;
  for (let i = 0; i < delete.length; i++) {
    delete[i].onclick = function() {
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
const finished = function() {
  var finish = false;
  for (let x = 0; x < finish.length; x++) {
    finish[x].onclick = function() {
       if (elements[x].complete == false) {
         finish = true;
         item[x].style.setProperty("text-decoration", "line-through");
         item[x].style.backgroundColor = "#baff66";
         finish[x].style.backgroundColor = "#baff66";
         elements[x].complete = true;
       }
       else if (elements[x].complete == true) {
         finish[x].style.backgroundColor = "white";
         item[x].style.setProperty("text-decoration", "none");
         item[x].style.backgroundColor = "white";
         elements[x].complete = false;
       }
     };
     if (finish) {
       break;
     }
  }
}
const prioritizeitem = function() {
  var prioritize = false;
for (let z = 0; z < priority.length; z++) {
    priority[z].onclick = function () {
      if (elements[z].priority == false) {
        important = row[z]
        prioritize = true;
        priority[z].style.backgroundColor = "yellow";
        row[0].before(important);
        elements[z].priority = true;
        const objectToMove = elements[z];
        elements.splice(z, 1);
        elements.unshift(objectToMove);
        prioritize = true;
      }
      else if (elements[z].priority) {
        important = row[z]
        priority[z].style.backgroundColor = "white";
        row[elements.length - 1].after(important);
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
  remove();
  finished();
  prioritizeitem();
}
add.onclick = create
document.getElementById("input_item").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.getElementById("add_button").click();
  }
});
