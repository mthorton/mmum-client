let APIURL = '';

switch (window.location.hostname) {
    
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000';    
    break;
    case 'meet-mum-client.herokuapp.com':
        APIURL = 'https://meet-mum.herokuapp.com'
}

export default APIURL;