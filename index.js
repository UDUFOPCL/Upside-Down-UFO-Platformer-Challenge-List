// Stores the length of the list from listData.js as a variable so code is easier to read and edit
length = Object.keys(data).length;

// Changes the info on the website to display the actual stuff
// This works by running a loop that cycles through all the data to display each piece of info
// This shouldn't need changed unless you want to add more things to dispaly for a level (I changed it lol)

// OLD CODE
/*
for (let i = 1; i < length + 1; i++) {
    document.getElementById('name'+i).innerHTML = data[i]['name']
    document.getElementById('image'+i).src = data[i]['image']
    document.getElementById('creator'+i).innerHTML = data[i]['creator'];
    document.getElementById('time'+i).innerHTML = data[i]['recorder'] + ' - ' + data[i]['time'];
}*/

buildList();

function buildList() {
    var list = document.getElementById('list')
    for (i = 1; i < length + 1; i++) {
        var level = `
            <div class="card">
                <div class="level">
    				<img loading="lazy" src="${data[i]['image']}" width="0px" alt= "picture">
	    			<h1>#${i} - <a href="./levels/${i}.html" target="_self"><b>${data[i]['name']}</b></a> <img title="${data[i]['badgeInfo']}" class="badge" src="${data[i]['badge']}"><br><span>${data[i]['creator']}</span></h1>
		    		<div><img onclick="copy(${data[i]['ID']})" title="Copy ID" class="copy" src="copyW.png" alt="copy"></div>
			    	<span>${data[i]['times'][1]['name']} - ${data[i]['times'][1]['time']}</span>
			    </div>
             </div>`
        list.innerHTML += level
    }
    setTimeout(loadPage, 1000)
}

/*
function loadPage() {
    document.getElementById('loading').classList.add('hide')
}
*/

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