document.addEventListener('DOMContentLoaded', function() {

    const inputs = document.querySelectorAll('.controls input');
    // 'querySelectorAll returns a 'NodeList', it´s not the same that an 'array', because 'NodeList'
    // don´t contains all the methods like (map, reduce, etc). 'NodeList' contain 'forEach' method
    // Two ways to convert into an array:
    // 1 - const inputsArray = Array.from(inputs);
    // 2 - const inputsArray = [...inputs]; ---> using the 'spread' operator

    function handleUpdate () {
        // 'dataset' it´s an object that contains all the attributes from that specific element
        const suffix = this.dataset.sizing || '';

        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

})