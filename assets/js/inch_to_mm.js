const sizeChart = {
  "1/8″": {"DN": "DN 06", "mm": "9,6 mm",},
  "1/4″": {"DN": "DN 08", "mm": "13 mm",},
  "3/8″": {"DN": "DN 10", "mm": "17 mm",},
  "1/2″": {"DN": "DN 15", "mm": "21 mm",},
  "3/4″": {"DN": "DN 20", "mm": "27 mm",},
  "1″": {"DN": "DN 25", "mm": "34 mm",},
  "1 1/4″": {"DN": "DN 32", "mm": "42 mm",},
  "1 1/2″": {"DN": "DN 40", "mm": "49 mm",},
  "2″": {"DN": "DN 50", "mm": "60 mm",},
  "2 1/2″": {"DN": "DN 65", "mm": "73 mm",},
  "3″": {"DN": "DN 80", "mm": "89 mm",},
  "4″": {"DN": "DN 100", "mm": "114 mm",},
  "5″": {"DN": "DN 125", "mm": "141 mm",},
  "6″": {"DN": "DN 150", "mm": "168 mm",},
  "8″": {"DN": "DN 200", "mm": "219 mm",},
  "10″": {"DN": "DN 250", "mm": "273 mm",},
  "12″": {"DN": "DN 300", "mm": "324 mm",},
  "14″": {"DN": "DN 350", "mm": "356 mm",},
  "16″": {"DN": "DN 400", "mm": "406 mm",},
  "18″": {"DN": "DN 450", "mm": "457 mm",},
  "20″": {"DN": "DN 500", "mm": "508 mm",},
  "24″": {"DN": "DN 600", "mm": "558 mm",},
};

function updateSelect() {
  const sizeSel = document.getElementById('size');
  // Dynamically populate dropdown menu
  for (let x in sizeChart) {
    sizeSel.options[sizeSel.options.length] = new Option(x, x);
  }

  sizeSel.onchange = function(){
    const data = sizeChart[this.value];
    let result = document.getElementById('result');
    result.innerHTML = Object.entries(data).map(([key, value]) => `<p><strong>${key}</strong>: ${value}</p>`).join('');
  } 
}

// Initialize dropdown on load
window.onload = updateSelect;