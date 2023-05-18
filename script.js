function calculate() {
    var food = parseFloat(document.getElementById('food').value);
    var total = parseFloat(document.getElementById('total').value);
    var tax = parseFloat(document.getElementById('tax').value);
    var tip = parseFloat(document.getElementById('tip').value);
  
    var r = 1 + tip / total + tax / total;
    var results = food * r;
    results = results.toFixed(2);
  
    document.getElementById("results").innerHTML = `<article class="message is-link"><div class="message-body">You should be paying <span class="has-text-weight-bold">${results}</span> dollars.</div></article>`;
  }
  