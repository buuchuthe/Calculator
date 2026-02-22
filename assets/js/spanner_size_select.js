const spannerMetricMap = {
    'M1.6': {din: 3.2, iso: 3.2},
    'M2': {din: 4, iso: 4},
    'M2.5': {din: 5, iso: 5},
    'M3': {din: 5.5, iso: 5.5},
    'M3.5': {din: 6, iso: 6},
    'M4': {din: 7, iso: 7},
    'M5': {din: 8, iso: 8},
    'M6': {din: 10, iso: 10},
    'M7': {din: 11, iso: '-'},
    'M8': {din: 13, iso: 13},
    'M10': {din: 17, iso: 16},
    'M12': {din: 19, iso: 18},
    'M14': {din: 22, iso: 21},
    'M16': {din: 24, iso: 24},
    'M18': {din: 27, iso: 27},
    'M20': {din: 30, iso: 30},
    'M22': {din: 32, iso: 34},
    'M24': {din: 36, iso: 36},
    'M27': {din: 41, iso: 41},
    'M30': {din: 46, iso: 46},
    'M33': {din: 50, iso: 50},
    'M36': {din: 55, iso: 55},
    'M39': {din: 60, iso: 60},
    'M42': {din: 65, iso: 65},
    'M45': {din: 70, iso: 70},
    'M48': {din: 75, iso: 75},
    'M52': {din: 80, iso: 80},
    'M56': {din: 85, iso: 85},
    'M60': {din: 90, iso: 90},
    'M64': {din: 95, iso: 95},
    'M68': {din: 100, iso: '-'},
    'M72': {din: 105, iso: '-'},
    'M76': {din: 110, iso: '-'},
    'M80': {din: 115, iso: '-'},
    'M90': {din: 130, iso: '-'},
    'M100': {din: 145, iso: '-'},
    'M110': {din: 155, iso: '-'},
    'M125': {din: 180, iso: '-'},
    'M140': {din: 200, iso: '-'},
    'M160': {din: 230, iso: '-'}
};

const spannerImperialMap = {
    '1/4': {asme: 0.438, bs: 0.445},
    '5/16': {asme: 0.500, bs: 0.525},
    '3/8': {asme: 0.562, bs: 0.600},
    '7/16': {asme: 0.625, bs: 0.710},
    '1/2': {asme: 0.750, bs: 0.820},
    '9/16': {asme: 0.812, bs: 0.920},
    '5/8': {asme: 0.938, bs: 1.010},
    '3/4': {asme: 1.125, bs: 1.200},
    '7/8': {asme: 1.312, bs: 1.300},
    '1': {asme: 1.500, bs: 1.480},
    '1.1/8': {asme: 1.688, bs: 1.670},
    '1.1/4': {asme: 1.875, bs: 1.860},
    '1.3/8': {asme: 2.062, bs: 2.050},
    '1.1/2': {asme: 2.250, bs: 2.220},
    '1.3/4': {asme: 2.625, bs: 2.580},
    '2': {asme: 3.000, bs: 2.760},
    '2.1/4': {asme: 3.375, bs: '-'},
    '2.1/2': {asme: 3.750, bs: '-'},
    '2.3/4': {asme: 4.125, bs: '-'},
    '3': {asme: 4.500, bs: '-'}
}

function updateSelect() {
  const threadMetricSel = document.getElementById('metric-thread-size');
  const threadImperialSel = document.getElementById('imperial-thread-size');
  // Dynamically populate dropdown menu
  for (let x in spannerMetricMap) {
    threadMetricSel.options[threadMetricSel.options.length] = new Option(x, x);
  }
  for (let x in spannerImperialMap) {
    threadImperialSel.options[threadImperialSel.options.length] = new Option(x, x);
  }

  threadMetricSel.onchange = function(){
    const data = spannerMetricMap[this.value];

    const dinEl = document.getElementById('din-af');
    const isoEl = document.getElementById('iso-af');

    dinEl.innerText = data.din + " mm";
    isoEl.innerText = data.iso + " mm";
    
  } 

  threadImperialSel.onchange = function(){
    const data = spannerImperialMap[this.value];

    const asmeEl = document.getElementById('asme-af');
    const bsEl = document.getElementById('bs-af');

    asmeEl.innerText = data.asme + " inch";
    bsEl.innerText = data.bs + " inch";
  }
}

/**
 * Toggles the info tooltip visibility
 */
function toggleInfo() {
  const info = document.getElementById('info-content');
  info.style.display = info.style.display === 'none' ? 'block' : 'none';
}

// Initialize dropdown on load
window.onload = updateSelect;