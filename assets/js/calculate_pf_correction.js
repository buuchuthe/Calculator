// Main Calculation Logic
function calculate() {
    const conn = document.getElementById('conn-type').value;
    const V = parseFloat(document.getElementById('sys-v').value);
    const F = parseFloat(document.getElementById('sys-f').value);
    const load = parseFloat(document.getElementById('load-val').value);
    const unit = document.getElementById('load-unit').value;
    const pf1 = parseFloat(document.getElementById('pf-now').value);
    const pf2 = parseFloat(document.getElementById('pf-aim').value);

    // 1. Convert Load to kW (Active Power P)
    let P = 0;
    switch(unit) {
      case 'w':
        P = load / 1000;
        break;
      case 'mw':
        P = load * 1000;
        break;
      case 'kva':
        // S * PF = P
        P = load * pf1;
        break;
      case 'mva':
        // S * PF = P
        P = load * pf1 * 1000;
        break;
      default: // kw
        P = load;
    }

    // 2. Calculate Required kVAr
    const phi1 = Math.acos(pf1);
    const phi2 = Math.acos(pf2);
    const kvarTotal = P * (Math.tan(phi1) - Math.tan(phi2));

    // 3. Calculate Current (I_cap)
    // Formula: I = Q / (sqrt(3) * V) for 3-phase
    let I_bank = 0;
    if (conn === '1p') {
        I_bank = (kvarTotal * 1000) / V;
    } else {
        I_bank = (kvarTotal * 1000) / (Math.sqrt(3) * V);
    }

    // 4. Calculate Capacitance per Phase (uF)
    let uF = 0;
    const kvarPerPhase = kvarTotal / (conn === '1p' ? 1 : 3);
    const varPerPhase = kvarPerPhase * 1000;

    if (conn === '3ps') {
        // Star: Voltage is V / sqrt(3)
        const vPhase = V / Math.sqrt(3);
        uF = varPerPhase / (2 * Math.PI * F * Math.pow(vPhase, 2));
    } else {
        // Delta or 1-Phase: Voltage is V
        uF = varPerPhase / (2 * Math.PI * F * Math.pow(V, 2));
    }

    // Display Results
    document.getElementById('res-kvar').innerText = kvarTotal.toFixed(2);
    document.getElementById('res-uf').innerText = (uF * 1000000).toFixed(2);
    document.getElementById('res-amp').innerText = I_bank.toFixed(2);
}