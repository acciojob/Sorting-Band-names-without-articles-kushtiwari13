//your code here

let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'Pink Floyd', 'The Beatles', 'Metallica'];

// Remove articles from band names
function removeArticles(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort band names in lexicographic order without articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Create list items and append them to the ul tag
const ul = document.getElementById('band');
bandNames.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});
