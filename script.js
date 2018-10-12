let selectedRegion = document.getElementById('region-select');
let occurances = document.querySelectorAll('.city');
selectedRegion.addEventListener('change', () => {
    for (let i = 0; i < occurances.length; i++) {
        const option = document.querySelector('option[value="' + selectedRegion.value + '"]');
        occurances[i].innerHTML = option.innerHTML;
    }
});