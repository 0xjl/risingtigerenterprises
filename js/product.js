const input = document.querySelector('.search-input');
const table = document.querySelector('.product-table');
const tbody = document.querySelector('.tbody');

fetch('./data.json')
  .then((res) => res.json())
  .then((arr) => {
    arr.map((item) => {
      const tr = document.createElement('tr');
      const element = `
        <td>${item.NAME}</td>
        <td>${item.EXTRACT1}</td>
        <td>${item.EXTRACT2}</td>
    `;
      tr.innerHTML += element;
      tbody.appendChild(tr);
    });
  });

var TRange = null;

function findString(str) {
  if (window.find) {
    strFound = self.find(str);
  } else if (navigator.indexOf('Microsoft') != -1) {
    if (TRange == null || strFound == 0) {
      TRange = self.document.body.createTextRange();
      strFound = TRange.findText(str);
      if (strFound) TRange.select();
      TRange.style.background = 'yellow';
    }
  }
}

document.getElementById('f1').onsubmit = function () {
  findString(this.t1.value);
  return false;
};
