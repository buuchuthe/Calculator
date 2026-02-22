const unitMultipliers = {
    mv: 1e-3, v: 1, kv: 1e3,
    mohm: 1e-3, ohm: 1, kohm: 1e3, mohm_upper: 1e6, // Using 'mohm_upper' for MΩ
    w: 1, kw: 1e3, mw: 1e6, hp: 745.7,
    va: 1, kva: 1e3, mva: 1e6,
    var: 1, kvar: 1e3, mvar: 1e6
};

const config = {
    dc: ["Voltage / Power", "Voltage / Resistance", "Power / Resistance"],
    ac: ["Voltage / Power", "Voltage / Impedance", "Voltage / Resistance", "Power / Impedance", "Power / Resistance"]
};

const unitsConfig = {
    voltage: ["mV", "V", "kV"],
    resistance: ["mohm", "ohm", "kohm", "Mohm"],
    impedance: ["mohm", "ohm", "kohm", "Mohm"],
    powerDc: ["W", "kW", "MW", "HP"],
    powerAc: ["W", "kW", "MW", "HP", "VA", "kVA", "MVA", "var", "kvar", "Mvar"]
};

const systemRadios = document.querySelectorAll('input[name="system"]');
const paramSelector = document.getElementById('param-selector');
const pfContainer = document.getElementById('pf-container');
const inputFields = document.getElementById('input-fields');
const calcBtn = document.getElementById('calc-btn');
const output = document.getElementById('current-output');

// --- Initialization ---
function init() {
    updateDropdown('dc');
}

// --- Event Listeners ---
systemRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        const isAC = e.target.value !== 'dc';
        pfContainer.style.display = isAC ? 'block' : 'none';
        updateDropdown(isAC ? 'ac' : 'dc');
    });
});

paramSelector.addEventListener('change', updateInputs);

function updateDropdown(type) {
    paramSelector.innerHTML = config[type].map(opt => `<option value="${opt}">${opt}</option>`).join('');
    updateInputs();
}

function updateInputs() {
    const system = document.querySelector('input[name="system"]:checked').value;
    const labels = paramSelector.value.split(' / ');

    inputFields.innerHTML = labels.map(label => {
        const key = label.toLowerCase();
        let options = [];
        let baseUnit = "";

        // 1. Define options and identify the Base Unit for each type
        if (key === 'voltage') {
            options = unitsConfig.voltage;
            baseUnit = "v";
        } else if (key === 'resistance' || key === 'impedance') {
            options = unitsConfig.resistance;
            baseUnit = "ohm";
        } else if (key === 'power') {
            options = (system === 'dc') ? unitsConfig.powerDc : unitsConfig.powerAc;
            // Default to 'W' for power, but could be 'VA' for AC Apparent Power
            baseUnit = "w"; 
        }

        return `
            <div class="input-row">
                <label style="min-width: 80px;">${label}:</label>
                <input type="number" class="calc-val" data-type="${key}" step="any" placeholder="0">
                <select class="calc-unit" data-for="${key}">
                    ${options.map(u => {
                        const val = u === 'Mohm' ? 'mohm_upper' : u.toLowerCase();
                        // 2. Check if this is the base unit to set it as default
                        const isSelected = val === baseUnit ? 'selected' : '';
                        return `<option value="${val}" ${isSelected}>${u}</option>`;
                    }).join('')}
                </select>
            </div>
        `;
    }).join('');
    
    output.textContent = "--";
}

function getCosPhi() {
    const type = document.getElementById('pf-type').value;
    const val = parseFloat(document.getElementById('pf-value').value);
    if (isNaN(val)) return 1;

    switch (type) {
        case 'cos': return val;
        case 'sin': return Math.cos(Math.asin(val));
        case 'tan': return Math.cos(Math.atan(val));
        case 'rad': return Math.cos(val);
        case 'deg': return Math.cos(val * (Math.PI / 180));
        default: return 1;
    }
}

function formatResult(amps) {
    const absVal = Math.abs(amps);
    const units = [
        { u: "MA", f: 1e6 }, { u: "kA", f: 1e3 }, { u: "A", f: 1 },
        { u: "mA", f: 1e-3 }, { u: "uA", f: 1e-6 }
    ];
    const best = units.find(u => absVal >= u.f) || units[units.length - 1];
    return `${(amps / best.f).toFixed(3).replace(/\.?0+$/, "")} ${best.u}`;
}

calcBtn.addEventListener('click', () => {
    const system = document.querySelector('input[name="system"]:checked').value;
    const isAC = system !== 'dc';
    const vals = {};
    
    // 1. Get the dynamic inputs (Voltage, Power, etc.)
    const inputs = document.querySelectorAll('.calc-val');
    let allFilled = true;

    inputs.forEach(input => {
        const type = input.dataset.type;
        const unit = document.querySelector(`.calc-unit[data-for="${type}"]`).value;
        const val = parseFloat(input.value);
        
        if (isNaN(val)) allFilled = false;
        
        vals[type] = val * unitMultipliers[unit];
        vals[`${type}_unit`] = unit;
    });

    // 2. Only check Phase Factor if we are in AC mode
    if (isAC) {
        const pfVal = parseFloat(document.getElementById('pf-value').value);
        if (isNaN(pfVal)) allFilled = false;
    }

    if (!allFilled) {
        return alert("Please fill all visible fields with valid numbers.");
    }

    // --- Calculation Logic remains the same ---
    let I = 0;
    const { voltage: V, power: P, resistance: R, impedance: Z, power_unit: pUnit } = vals;
    const cosPhi = isAC ? getCosPhi() : 1; // Force cosPhi to 1 for DC
    let phaseMultiplier = (system === 'ac3') ? Math.sqrt(3) : 1;

    if (V && P) {
        if (!isAC) {
            I = P / V;
        } else {
            if (['w', 'kw', 'mw', 'hp'].includes(pUnit)) I = P / (V * phaseMultiplier * cosPhi);
            else if (['va', 'kva', 'mva'].includes(pUnit)) I = P / (V * phaseMultiplier);
            else {
                const sinPhi = Math.sqrt(1 - Math.pow(cosPhi, 2)) || 1;
                I = P / (V * phaseMultiplier * sinPhi);
            }
        }
    } 
    else if (V && (R || Z)) I = V / (R || Z);
    else if (P && R) I = Math.sqrt(P / R);

    output.textContent = formatResult(I);
});

// Start the app
init();