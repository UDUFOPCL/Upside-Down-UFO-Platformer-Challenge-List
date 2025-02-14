let data =
[
    {
        "name": "FATE OF THE STARS",
        "ID": 114176600,
        "creator": "ZiroTrans",
        "verifier": "Astatine16"
    },
    {
        "name": "BrambleIfItWasGood",
        "ID": 114998675,
        "creator": "ashfalcons44",
        "verifier": "ashfalcons44"
    },
    {
        "name": "Lament",
        "ID": 114988101,
        "creator": "tenkuyuhh",
        "verifier": "tenkuyuhh"
    },
    { 
        "name": "BlUDUFObath",
        "ID": 114965788,
        "creator": "rush",
        "verifier": "rush"
    },
    {
        "name": "Fever",
        "ID": 114963741,
        "creator": "tenkuyuhh",
        "verifier": "tenkuyuhh"
    },
    {
        "name": "Suffer",
        "ID": 111863467,
        "creator": "tenkuyuhh",
        "verifier": "tenkuyuhh"
    },
    {
        "name": "agony",
        "ID": 114960048,
        "creator": "tenkuyuhh",
        "verifier": "tenkuyuhh"
    },
    {
        "name": "mangoa",
        "ID": 114952534,
        "creator": "tenkuyuhh",
        "verifier": "tenkuyuhh"
    },
    {
        "name": "vsc but ufo",
        "ID": 114984854,
        "creator": "CoinvesselGD",
        "verifier": "tenkuyuhh"
    },
    {
        "name": "Mycat sigma boy chal",
        "ID": 114984412,
        "creator": "tenkuyuhh",
        "verifier": "tenkuyuhh"
    },
    {
        "name": "spam challenge 1",
        "ID": 114952847,
        "creator": "tenkuyuhh",
        "verifier": "tenkuyuhh"
    },
    {
        "name": "average udufopcl level",
        "ID": 114935113,
        "creator": "MyCat223",
        "verifier": "MyCat223"
    },
    {
        "name": "le funky ufo level",
        "ID": 114952921,
        "creator": "ItsNoobe",
        "verifier": "ItsNoobe"
    },
    {
        "name": "TOOMDUDUFOIGDPCLBM",
        "ID": 114955327,
        "creator": "Codex",
        "verifier": "Codex"
    }
]

document.getElementById("name1").innerHTML = data[0].name;
document.getElementById("creator1").innerHTML = data[0].creator;

document.getElementById("name2").innerHTML = data[1].name;
document.getElementById("creator2").innerHTML = data[1].creator;

document.getElementById("name3").innerHTML = data[2].name;
document.getElementById("creator3").innerHTML = data[2].creator;

document.getElementById("name4").innerHTML = data[3].name;
document.getElementById("creator4").innerHTML = data[3].creator;

document.getElementById("name5").innerHTML = data[4].name;
document.getElementById("creator5").innerHTML = data[4].creator;

document.getElementById("name6").innerHTML = data[5].name;
document.getElementById("creator6").innerHTML = data[5].creator;

document.getElementById("name7").innerHTML = data[6].name;
document.getElementById("creator7").innerHTML = data[6].creator;

document.getElementById("name8").innerHTML = data[7].name;
document.getElementById("creator8").innerHTML = data[7].creator;

document.getElementById("name9").innerHTML = data[8].name;
document.getElementById("creator9").innerHTML = data[8].creator;

document.getElementById("name10").innerHTML = data[9].name;
document.getElementById("creator10").innerHTML = data[9].creator;

document.getElementById("name11").innerHTML = data[10].name;
document.getElementById("creator11").innerHTML = data[10].creator;

document.getElementById("name12").innerHTML = data[11].name;
document.getElementById("creator12").innerHTML = data[11].creator;

document.getElementById("name13").innerHTML = data[12].name;
document.getElementById("creator13").innerHTML = data[12].creator;

document.getElementById("name14").innerHTML = data[13].name;
document.getElementById("creator14").innerHTML = data[13].creator;

function copy(ID) {
    navigator.clipboard.writeText(ID)
    alert("Copied ID: " + ID)
}
/*(data[0].)
let data = [];

async function loadData() {
    try {
        const response = await fetch('./listData.json');
        data = await response.json();
    } catch (error) {
        console.error('Error loading JSON:', error);
    }
}

loadData();*/