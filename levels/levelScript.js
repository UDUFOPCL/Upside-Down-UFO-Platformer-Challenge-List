length = Object.keys(data[pos]['times']).length;
		
		document.getElementById('name').innerHTML = "#" + pos + " - " + data[pos]['name']
		document.getElementById('people').innerHTML = "by " + data[pos]['creator'] + ", verified by " + data[pos]['verifier']
		document.getElementById('description').innerHTML = '"' + data[pos]['description'] + '"'
		document.getElementById('video').src = data[pos]['video']
		
		buildTable()

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