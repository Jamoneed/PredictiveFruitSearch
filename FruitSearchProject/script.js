const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
    return fruit.filter(fruitName =>
      fruitName.toLowerCase().includes(str.toLowerCase())
    );
  }
  
  function updateSuggestions() {
    const inputVal = input.value;
    const results = search(inputVal);
    showSuggestions(results);
  }
  
  function showSuggestions(results) {
    const listItems = results.map(result => '<li>' + result + '</li>').join('');
  
    suggestions.innerHTML = listItems;
  
    if (results.length > 0) {
      suggestions.style.display = 'block';
    } else {
      suggestions.style.display = 'none';
    }
  }
  
  function useSuggestion(e) {
    if (e.target.tagName === 'LI') {
      input.value = e.target.textContent;
      suggestions.style.display = 'none';
    }
  }
  
  input.addEventListener('input', updateSuggestions);
  suggestions.addEventListener('click', useSuggestion);
  

  