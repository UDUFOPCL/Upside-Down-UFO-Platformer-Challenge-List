length = Object.keys(data[pos]['times']).length;
		
document.getElementById('name').innerHTML = "#" + pos + " - " + data[pos]['name']
document.getElementById('people').innerHTML = "by " + data[pos]['creator'] + ", verified by " + data[pos]['verifier']
document.getElementById('description').innerHTML = '"' + data[pos]['description'] + '"'
document.getElementById('id').innerHTML = "ID: " + data[pos]['ID']
document.getElementById('video').src = data[pos]['video']

buildTags()
buildTable()

function buildTags() {
	var tags = document.getElementById('tags')
	if (data[pos]['tags'].includes('spam')) {
		tags.innerHTML += `
			<div title="A large portion of the level includes spam clicking" class="spam">
				<img src="./Icons/click.png">
				<span>Spam</span>
			</div>`
	}
	if (data[pos]['tags'].includes('memory')) {
		tags.innerHTML += `
			<div title="Completing the level requires learning and memorizing the correct path" class="memory">
				<img src="./Icons/brain.png">
				<span>Memory</span>
			</div>`
	}
	if (data[pos]['tags'].includes('precise')) {
		tags.innerHTML += `
			<div title="The level has tight timings with little room for error" class="precise">
				<img src="./Icons/target.png">
				<span>Precise</span>
			</div>`
	}
	if (data[pos]['tags'].includes('gimmick')) {
		tags.innerHTML += `
			<div title="The level revolves around a unique gameplay quirk" class="gimmick">
				<img src="./Icons/sparkles.png">
				<span>Gimmicky</span>
			</div>`
	}
	if (data[pos]['tags'].includes('anti')) {
		tags.innerHTML += `
			<div title="Don't flip your gravity to normal or you'll die" class="anti">
				<img src="./Icons/Anti-gravity.png">
				<span>Anti-Gravity</span>
			</div>`
	}
	if (data[pos]['tags'].includes('timed')) {
		tags.innerHTML += `
			<div title="There is a set time you must complete the level faster than" class="timed">
				<img src="./Icons/stopwatch.png">
				<span>Timed</span>
			</div>`
	}
	if (data[pos]['tags'].includes('needle')) {
		tags.innerHTML += `
			<div title="The level's gameplay involves hitbox abuse and sitting inside spikes" class="needle">
				<img src="./Icons/needle.png">
				<span>Needle</span>
			</div>`
	}
	if (data[pos]['tags'].includes('top1')) {
		tags.innerHTML += `
			<div title="The Level used to be top 1 on the list" class="top1">
				<img src="./Icons/demon.png">
				<span>Former Top 1</span>
			</div>`
	}
	if (data[pos]['tags'].includes('ass')) {
		tags.innerHTML += `
			<div title="lmfao" class="ass">
				<img src="./Icons/sad.png">
				<span>Ass</span>
			</div>`
	}
}

function buildTable() {
	var table = document.getElementById('myTable')
	for (var i = 1; i < length+1; i++) {
		if (i == length) {
			var row =
			`<tr>
				<td class="bottomPos">${i}.</td>
				<td>${data[pos]['times'][i]['name']}</td>
				<td class="bottomTime">${data[pos]['times'][i]['time']}</td>
				
			</tr>`
			//<td class="bottomRight"><a href=${data[pos]['times'][i]['video']} target="_blank"><u>${data[pos]['times'][i]['linkText']}</u></a></td>
		} else {
			var row =
			`<tr>
				<td class="timePosition">${i}.</td>
				<td>${data[pos]['times'][i]['name']}</td>
				<td class="timeNumber">${data[pos]['times'][i]['time']}</td>

			</tr>`
			//<td><a href=${data[pos]['times'][i]['video']} target="_blank"><u>${data[pos]['times'][i]['linkText']}</u></a></td>
		}
		table.innerHTML += row
	}
}