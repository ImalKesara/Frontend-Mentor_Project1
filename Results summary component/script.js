let summary = document.querySelector('.summary');
const request = new XMLHttpRequest();

function display(data) {

    const html = `
        <h4>Summary</h4>

        <div class="red">
                <div class="reaction">
                    <img src="${data[0].icon}" alt="">
                    <b> ${data[0].category}</b>
                </div>
                <div class="score">
                    <p><b>${data[0].score}</b> / 100</p>
                </div>
        </div>

        <div class="yellow">
                <div class="memory">
                    <img src="${data[1].icon}" alt="">
                    <b> ${data[1].category}</b>
                </div>
                <div class="score">
                    <p><b>${data[1].score}</b> / 100</p>
                </div>
        </div>

        <div class="green">
                <div class="verbal">
                    <img src="${data[2].icon}" alt="">
                    <b> ${data[2].category}</b>
                </div>
                <div class="score">
                    <p><b>${data[2].score}</b> / 100</p>
                </div>
        </div>

        <div class="blue">
                <div class="visual">
                    <img src="${data[3].icon}" alt="">
                    <b> ${data[3].category}</b>
                </div>
                <div class="score">
                    <p><b>${data[3].score}</b> / 100</p>
                </div>
        </div>

        <button >Continue</button>
    `;

    summary.innerHTML = html;
}




request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        display(JSON.parse(request.responseText));
    }
}

request.open('GET', 'data.json');
request.send();