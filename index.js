length = Object.keys(data).length;

for (let i = 1; i < length + 1; i++) {
    document.getElementById('name'+i).innerHTML = data[i]['name']
    document.getElementById('image'+i).src = data[i]['image']
    document.getElementById('creator'+i).innerHTML = data[i]['creator'];
    document.getElementById('time'+i).innerHTML = data[i]['recorder'] + ' - ' + data[i]['time'];
    
}

function copy(ID) {
    navigator.clipboard.writeText(ID)
    document.getElementById('alertText').innerHTML = ('Copied ID: ' + ID);
    document.getElementById('alert').classList.remove('hide')
    console.log('ID Showing')
    setTimeout(show, 100)
    

}
function show() {
    document.getElementById('alert').classList.add('hide')
    console.log('ID Vanishing')
}