function displayMine() {
    console.log('displayMine Function Called')
    const accessToken = localStorage.getItem('sessionToken');

    fetch(`http://localhost:3000/journal/mine`, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);

        let display = document.getElementById('logs');
        for (i = 0; i = display.childNodes.length; i++) {
            display.removeChild(display.firstChild)
        }

        if (data.length === 0) {
            let display = document.getElementById('logs');
            let header = document.createElement('h5');

            display.appendChild(header);
            header.textContent = "You haven't created any events yet!";
            header.setAttribute("class", "noPosts")
        } else {
            for(i =0; i < data.length; i++){
                let display = document.getElementById('logs');
                let card = document.createElement('div');
                let body = document.createElement('div');
                let header = document.createElement('h5');
                let subtitle = document.createElement('h6');
                let para = document.createElement('p');
                let editBtn = document.createElement('button');
                let deleteBtn = document.createElement('button');

                let current = data[i];
                let description = current.description;
                let title = current.title;
                let date = current.date;
                let location = current.location;

                header.textContent = title;
                subtitle.textContent = date;
                para.textContent = description;
                para.textContent = location;
                editBtn.textContent = "Edit Event";
                deleteBtn.textContent = "Delete";

                display.appendChild(card);
                card.appendChild(body);
                body.appendChild(header);
                body.appendChild(subtitle);
                body.appendChild(para);
                body.appendChild(editBtn);
                body.appendChild(deleteBtn);

                card.setAttribute('id', current.id);
                card.setAttribute('class', 'card');
                body.setAttribute('class', 'card-body');
                header.setAttribute('class', 'card-title');
                subtitle.setAttribute('class', 'card-subtitle mb-2 text-muted');
                para.setAttribute('class', 'card-text')

                editBtn.setAttribute('class', 'btn btn-dark editBtn');
                editBtn.setAttribute('type', 'button');
                editBtn.setAttribute('onclick', `editLog(${current.id})`);

                deleteBtn.setAttribute('class', 'btn btn-dark deleteBtn');
                deleteBtn.setAttribute('type', 'button');
                deleteBtn.setAttribute('onclick', `deleteLog(${current.id})`);
            }
        }
    })
    .catch(err => {
        console.error(err)
    })
}

function displayAll() {
    console.log('displayAll Function Called');

    fetch(`http://localhost:3000/log/`, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);

        let display = document.getElementById('logs');
        for (i = 0; i = display.childNodes.length; i++) {
            display.removeChild(display.firstChild)
        }

        if (data.length === 0) {
            let display = document.getElementById('logs');
            let header = document.createElement('h5');

            display.appendChild(header);
            header.textContent = "You haven't created any events yet!";
            header.setAttribute("class", "noPosts")
        } else {
            for(i =0; i < data.length; i++){
                let display = document.getElementById('logs');
                let card = document.createElement('div');
                let body = document.createElement('div');
                let header = document.createElement('h5');
                let subtitle = document.createElement('h6');
                let para = document.createElement('p');

                let current = data[i];
                let description = current.description;
                let title = current.title;
                let date = current.date;
                let location = current.location;
                
                header.textContent = title;
                subtitle.textContent = date;
                para.textContent = description;
                para.textContent = location;
                editBtn.textContent = "Edit Event";
                deleteBtn.textContent = "Delete";

                display.appendChild(card);
                card.appendChild(body);
                body.appendChild(header);
                body.appendChild(subtitle);
                body.appendChild(para);
                body.appendChild(editBtn);
                body.appendChild(deleteBtn);

                card.setAttribute('id', current.id);
                card.setAttribute('class', 'card');
                body.setAttribute('class', 'card-body');
                header.setAttribute('class', 'card-title');
                subtitle.setAttribute('class', 'card-subtitle mb-2 text-muted');
                para.setAttribute('class', 'card-text');

            }
        }
    })
    .catch(err => {
        console.error(err)
    })
}

function displayByTitle() {
    console.log('displayByTitle Function Called')

    let eventTitle = document.getElementById('searchBar').nodeValue;
    console.log(eventTitle);

    fetch(`http://localhost:3000/log/${eventTitle}`, {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);

        let display = document.getElementById('logs');
        for (i = 0; i = display.childNodes.length; i++) {
            display.removeChild(display.firstChild)
        }

        if (data.length === 0) {
            let display = document.getElementById('logs');
            let header = document.getElementById('h5');

            display.appendChild(header);
            header.textContent = "You haven't created any events yet!";
            header.setAttribute("class", "noPosts")
        } else {
            for(i =0; i < data.length; i++){
                let display = document.getElementById('logs');
                let card = document.createElement('div');
                let body = document.createElement('div');
                let header = document.createElement('h5')
                let subtitle = document.createElement('h6');
                let para = document.createElement('p');

                let current = data[i];
                let description = current.description;
                let title = current.title;
                let date = current.date;
                let location = current.location;

                header.textContent = title;
                subtitle.textContent = date;
                para.textContent = description;
                para.textContent = location;
                editBtn.textContent = "Edit Event";
                deleteBtn.textContent = "Delete";

                display.appendChild(card);
                card.appendChild(body);
                body.appendChild(header);
                body.appendChild(subtitle);
                body.appendChild(para);
                body.appendChild(editBtn);
                body.appendChild(deleteBtn);

                card.setAttribute('id', current.id);
                card.setAttribute('class', 'card');
                body.setAttribute('class', 'card-body');
                header.setAttribute('class', 'card-title');
                subtitle.setAttribute('class', 'card-subtitle mb-2 text-muted');
                para.setAttribute('class', 'card-text');

                }
        }
    })
    .catch(err => {
        console.error(err)
    })
}