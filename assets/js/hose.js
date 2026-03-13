const productMap = {
  "Ống": {
    "Ống áp lực cao": {
      "Ống áp lực cao Cá sấu": {
        thumb: "../assets/img/crocodile spray hose.jpg",
        eng: "Crocodile Hose Spray",
        desc: `
        <b>I.D</b>: Đường kính trong<br>
        <b>O.D</b>: Đường kính ngoài<br>
        <b>Threaded crimped fitting</b>: Ren bấm đầu ống<br>
        <b>W.P</b>: Áp suất tối đa<br>
        <b>B.P</b>: Áp suất phá vỡ<br>
        <b>Weight</b>: Trọng lượng<br>
        `,
        table: `<table><thead><tr><th>I.D x O.D</th><th>Threaded crimped fitting</th><th>Color</th><th>Temperature</th><th>W.P</th><th>B.P</th><th>Length</th><th>Weight</th></tr></thead><tbody><tr><td>8.5 x 14.5 mm (5/16’’)</td><td>13.8mm</td><td>Yellow / Green</td><td>-20°C ~ 60°C</td><td>700 PSI (50 kg/cm²)</td><td>2000 PSI (150 kg/cm²)</td><td>5, 10, 15, 20, 30, 50, 100 m</td><td>13 kg/roll</td></tr><tr><td>10 x 16 mm (13/32’’)</td><td>21mm</td><td>Yellow</td><td>-20°C ~ 60°C</td><td>700 PSI (50 kg/cm²)</td><td>2000 PSI (150 kg/cm²)</td><td>50 m</td><td>16 kg/roll</td></tr><tr><td>13 x 20 mm (1/2’’)</td><td>21mm</td><td>Yellow</td><td>-20°C ~ 60°C</td><td>570 PSI (40 kg/cm²)</td><td>1900 PSI (130 kg/cm²)</td><td>50 m</td><td>25 kg/roll</td></tr></tbody></table>`,
      },
    },
  }
};

function updateSelect() {
  const typeSel = document.getElementById('type');
  const subtypeSel = document.getElementById('subtype');
  const productSel = document.getElementById('product');
  let resultSel = document.getElementById('result');
  const dimSel = document.getElementById('dimension');
  const descSel = document.getElementById('description');
  const thumbSel = document.getElementById('thumbnail');
  // Dynamically populate dropdown menu
  for (let x in productMap) {
    typeSel.options[typeSel.options.length] = new Option(x, x);
  }

  typeSel.onchange = function(){
    // Reset dropdown
    subtypeSel.length = 1;
    productSel.length = 1;    
    thumbSel.style.display = 'none';
    descSel.innerHTML = "";
    // dimSel.style.display = 'none';
    resultSel.innerHTML = "";
    // Dynamically populate dropdown menu
    for (let x in productMap[this.value]) {
      subtypeSel.options[subtypeSel.options.length] = new Option(x, x);
    }
  } 

  subtypeSel.onchange = function(){
    // Reset dropdown
    productSel.length = 1;
    thumbSel.style.display = 'none';
    descSel.innerHTML = "";
    // dimSel.style.display = 'none';
    resultSel.innerHTML = "";
    // Dynamically populate dropdown menu
    for (let x in productMap[typeSel.value][this.value]) {
      productSel.options[productSel.options.length] = new Option(x, x);
    }
  } 

  productSel.onchange = function(){
    const db = productMap[typeSel.value][subtypeSel.value][this.value];
    thumbSel.style.display = 'inline';
    thumbSel.src = db["thumb"];
    descSel.innerHTML = db["eng"]+"<br>"+db["desc"];
    // dimSel.style.display = 'inline';
    // dimSel.src = `../assets/img/${db["dim"]}`;
    resultSel.innerHTML = db["table"];
  }
}

// Initialize dropdown on load
window.onload = updateSelect;