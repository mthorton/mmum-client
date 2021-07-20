function postLog() {
    const accessToken = localStorage.getItem('sessionToken')
    let description = document.getElementById('description').value;
    let title = document.getElementById('title').value;
    let date = document.getElementById('date').value;
    let location = document.getElementById('location').value

    let newLog = {
        log: {
            description: description,
            title: title,
            date: date,
            location: location
        }
    }

    fetch(`http://localhost:3000/log/create`, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }),
        body: JSON.stringify(newLog)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            displayMine()
        })
        .catch(err => {
            console.error(err)
        })
}

function editLog(logId) {
    console.log(logId);

    const fetch_url = `http://localhost:3000/log/update/${logId}`;
    const accessToken = localStorage.getItem('sessionToken');

    let card = document.getElementById(logId);
    let input = document.createElement('input');

    if (card.childNodes.length < 2) {
        card.appendChild(input);
        input.setAttribute("type", "text");
        input.setAttribute("id", "updatedEntry");
        input.setAttribute("placeholder", "Edit your event entry");
    } else {
        let updated = document.getElementById('updatedEntry').value;
        let newEntry = {
            log: {
                entry: updated
            }
        }

        fetch(fetch_url, {
            method: "PUT",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }),
            body: JSON.stringify(newEntry)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                displayMine();
            })
            .catch(err => {
                console.error(err)
            })

            card.removeChild(card.lastChild)

    }
}

function deleteLog(logId) {
    console.log(logId)

    const fetch_url = `http://localhost:3000/log/delete/${logId}`;
    const accessToken = localStorage.getItem('SessionToken');

    fetch(fetch_url, {
        method: "DELETE",
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        })
    })
        .then(response => response => response.json())
        .then(data => {
            console.log(data);
            displayMine();
        })
        .catch(err => {
            console.error(err)
        })
}