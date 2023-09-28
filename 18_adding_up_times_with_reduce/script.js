const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

/*
const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [min, secs] = timeCode.split(':').map(parseFloat);
        return (min * 60) + secs;
    })
    .reduce((total, vidSeconds) => total + vidSeconds);
*/

const seconds = timeNodes.reduce((total, node) => {
    const [min, secs] = node.dataset.time.split(':');
    //console.log(min, secs);
    const minParse = parseFloat(min);
    const secsParse = parseFloat(secs);
    //console.log(minParse, secsParse);
    const vidSeconds = (minParse * 60) + secsParse;
    return total + vidSeconds;
}, 0);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);