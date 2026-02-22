function calculate(){
    const ia = parseFloat(document.getElementById('cur-a').value) || 0;
    const ib = parseFloat(document.getElementById('cur-b').value) || 0;
    const ic = parseFloat(document.getElementById('cur-c').value) || 0;

    // Formula: sqrt(a² + b² + c² - ab - bc - ca)
    const innerVal = (Math.pow(ia, 2) + Math.pow(ib, 2) + Math.pow(ic, 2)) 
                    - (ia * ib + ib * ic + ic * ia);
    
    // Guard against tiny floating point negatives
    const inVal = Math.sqrt(Math.max(0, innerVal));

    // Update UI
    const resEl = document.getElementById('res-in');
    const statusEl = document.getElementById('balance-status');
    
    resEl.innerText = inVal.toFixed(2);

    if (inVal === 0) {
        statusEl.innerText = "System is perfectly balanced.";
        statusEl.style.color = "green";
    } else {
        statusEl.innerText = "System is unbalanced.";
        statusEl.style.color = "orange";
    }
}