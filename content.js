function getHeaderElements(headers) {
  const headerElements = [];
  for (const header of headers) {
    const elements = document.body.getElementsByTagName(header);
    if (elements.length) headerElements.push(...elements);
  }
  return headerElements;
}

function getRelevantHeaderElement(headerElements) {
  for (const element of headerElements) {
    const text = element.innerText;
    if (text && text.toLowerCase() === 'ingredients') return element;
  }
  return undefined;
}

const headerElements = getHeaderElements(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

const relevantHeaderElement = getRelevantHeaderElement(headerElements);

if (relevantHeaderElement) {
  relevantHeaderElement.scrollIntoView();
}
