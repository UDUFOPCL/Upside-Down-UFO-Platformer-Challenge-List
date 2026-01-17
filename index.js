// Stores the length of the list from listData.js as a variable so code is easier to read and edit
length = Object.keys(data).length;

// Changes the info on the website to display the actual stuff
// This works by running a loop that cycles through all the data to display each piece of info
// This shouldn't need changed unless you want to add more things to dispaly for a level

for (let i = 1; i < length + 1; i++) {
    document.getElementById('name'+i).innerHTML = data[i]['name']
    document.getElementById('image'+i).src = data[i]['image']
    document.getElementById('creator'+i).innerHTML = data[i]['creator'];
    document.getElementById('time'+i).innerHTML = data[i]['recorder'] + ' - ' + data[i]['time'];
}

//Copies the level ID to your clipboard and shows the popup
function copy(ID) {
    navigator.clipboard.writeText(ID)
    document.getElementById('alertText').innerHTML = ('Copied ID: ' + ID);
    document.getElementById('alert').classList.remove('hide')
    console.log('ID Showing')
    setTimeout(show, 100)
}

//Hides the "ID Copied" popup
function show() {
    document.getElementById('alert').classList.add('hide')
    console.log('ID Vanishing')
}