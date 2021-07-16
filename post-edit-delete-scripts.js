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

function editLog(postId) {
    console.log('editLog Function Called')
}

function deleteLog(postId) {
    console.log('deleteLog Function Called')
}