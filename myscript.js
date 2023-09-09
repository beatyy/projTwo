const api_url = "https://pokeapi.co/api/v2/berry-firmness/";

async function getapi(url) {
    const response = await fetch(url)

    var data = await response.json();
    console.log(data);

    if(response) {
        hideloder();
    }
    show(data.results);
}
getapi(api_url);

function hideloder() {
    document.getElementById('loading').style.display = 'none';
}

function show(data) {
    let tableH = ["Name", "url"]
    let table = document.getElementById("pokemon");
    generateTableHead(table, tableH)
    generateTable(table, data);
}

/*function displayBerries(moo) {
    let table = document.getElementById("berries");
    //let data = Object.keys(moo);
    let tableH = ["Berries", "url"];
    generateTableHead(table, tableH)
    generateSecondTable(table, moo);
}*/

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for(let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for(let element of data) {
        let row = table.insertRow();
        for(key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
           
            cell.appendChild(text)
        }
    }
}
/*
function generateSecondTable(table, data) {
    for(let element of data) {
        let row = table.insertRow();
        for(key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            if(key == 'url') {               
                text.addEventListener('click', function(){
                    getSecondApi(element[key]);
                })
            }
            cell.appendChild(text)
        }
    }

}

async function getSecondApi(url) {
    const response = await fetch(url)

    var data = await response.json();
    console.log(data);

    if(response) {
        hideloder();
    }
    displayBerries(data.results);
}*/

 