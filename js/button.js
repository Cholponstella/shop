
window.addEventListener('click',(event) => {
    // console.log('Click Window!')

    // console.log(event.target.dataset.action);

    if (event.target.dataset.action === 'button') {
        console.log(event.target);
    }
    
});