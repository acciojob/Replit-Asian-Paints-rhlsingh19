//your JS code here. If required.
function changeColor() {
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('color_id').value;
    
    const blockElement = document.getElementById(blockId);
    if (blockElement) {
        blockElement.style.backgroundColor = color;
    }
}

function resetColors() {
    const gridItems = document.getElementsByClassName('grid-item');
    for (const item of gridItems) {
        item.style.backgroundColor = 'transparent';
    }
}
