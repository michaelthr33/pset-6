let elements = []
var add = document.getElementById("add_button");
var row = document.getElementsByClassName("row");
let priority_button = document.getElementsByClassName("priority_button");
let complete_button = document.getElementsByClassName("complete_button");
let remove_button = document.getElementsByClassName("remove_button");
let list_item = document.getElementsByClassName("to_do")
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
          html_priority_button: null,
          html_text: null,
          html_remove_button: null
      }
      elements.push(to_do);
      let index = elements.indexOf(to_do);
      elements[index].htmlRow = document.createElement("tr");
      elements[index].htmlRow.setAttribute("class", "row");
      document.getElementById("table").append(elements[index].htmlRow);
      elements[index].htmlPriorityButton = document.createElement("td");
      elements[index].htmlPriorityButton.setAttribute("class", "priority_button");
      elements[index].htmlPriorityButton.innerHTML = "!";
      row[index].append(elements[index].htmlPriorityButton);
      elements[index].htmlText = document.createElement("td");
      elements[index].htmlText.innerHTML = elements[index].task;
      elements[index].htmlText.setAttribute("class", "to_do");
      row[index].append(elements[index].htmlText);
      elements[index].htmlCompleteButton = document.createElement("td");
      elements[index].htmlCompleteButton.innerHTML = "&#x2713;";
      elements[index].htmlCompleteButton.setAttribute("class", "complete_button");
      row[index].append(elements[index].htmlCompleteButton);
      elements[index].htmlRemoveButton = document.createElement("td");
      elements[index].htmlRemoveButton.setAttribute("class", "remove_button");
      elements[index].htmlRemoveButton.innerHTML = "X";
      row[index].append(elements[index].htmlRemoveButton);
    }
    document.getElementById("input_item").value = "";
};
const remove_item = function() {
  var removed = false;
  for (let i = 0; i < remove_button.length; i++) {
    remove_button[i].onclick = function() {
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
  for (let x = 0; x < complete_button.length; x++) {
    complete_button[x].onclick = function() {
       if (elements[x].complete == false) {
         finish = true;
         list_item[x].style.setProperty("text-decoration", "line-through");
         list_item[x].style.backgroundColor = "#baff66";
         complete_button[x].style.backgroundColor = "#baff66";
         elements[x].complete = true;
       }
       else if (elements[x].complete == true) {
         complete_button[x].style.backgroundColor = "white";
         list_item[x].style.setProperty("text-decoration", "none");
         list_item[x].style.backgroundColor = "white";
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

  
