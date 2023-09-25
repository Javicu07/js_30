document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
    console.log(checkboxes);

    let lastChecked;

    function handleCheck(e) {
        //console.log(e);
        // check if they had the shift key down and check that they are checking it
        let inBetween = false;
        if (e.shiftKey && this.checked) {
            // go ahead and do what we please
            // loop every single checkbox
            checkboxes.forEach(checkbox => {
                //console.log(checkbox);
                if (checkbox === this || checkbox === lastChecked) {
                    inBetween = !inBetween;
                    //console.log('Starting to check them in between');
                }

                if (inBetween) {
                    checkbox.checked = true;
                }
            });
        }

        lastChecked = this;
    }

    checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
});