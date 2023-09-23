document.addEventListener('DOMContentLoaded', () => {
    const panels = document.querySelectorAll('.panel');

    function toggleOpen () {
        if (this.classList.contains('open')) {
            this.classList.remove('open');
        } else {
            panels.forEach(panel => panel.classList.remove('open'));
            this.classList.toggle('open');
        }
    }

    function toggleActive(event) {
        if (event.propertyName.includes('flex')) {
            this.classList.toggle('open-active');
        }
    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
});