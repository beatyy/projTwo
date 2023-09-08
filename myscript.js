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
    let tab =
    `<tr>
    <th>Name</th>
    <th>url</th>
   </tr>`

   for(let r in data) {
        const obj = data[r];
        tab += `<tr>
        <td>${obj.name} </td>
        <td><a href=\"${obj.url}\"</a>${obj.url}</td>        
    </tr>`
   }
    document.getElementById("pokemon").innerHTML = tab;
}