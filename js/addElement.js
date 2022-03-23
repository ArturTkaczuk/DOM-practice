const addForm = document.querySelector(".form--add");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const elementData = {
    elementName: addForm.children.elementName.value,
    elementText: addForm.children.elementText.value,
    elementAttribute: addForm.children.elementAttribute.value,
    elementAttributeValue: addForm.children.elementAttributeValue.value
  }
  const newElement = createNewElement(elementData)
  addElementToNode(newElement)
});

function createNewElement(elementData) {
  const element = document.createElement(elementData.elementName)
  element.innerText = elementData.elementText
  element.setAttribute(elementData.elementAttribute || "defaultAttributeName", elementData.elementAttributeValue || "defaultAttributeValue")
  return element
}

function addElementToNode(element) {
  const targetNode = document.querySelector(".nodes")
  targetNode.appendChild(element)
}