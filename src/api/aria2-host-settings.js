
const defaultSettings = {
    host: 'localhost',
    port: 6800,
    path: '/jsonrpc',
    secret: '',
    secure: false
}

export const setSettings = ({host, port, path, secret, secure}) => {
    if (localStorage) {
        localStorage.setItem('host', host);
        localStorage.setItem('port', port);
        localStorage.setItem('path', path);
        localStorage.setItem('secret', secret);
        localStorage.setItem('secure', secure);     
    }
}

export const getSettings = () => {
    if (localStorage) {
        let storedSettings = {
            host: localStorage.getItem('host'),
            port: parseInt(localStorage.getItem('port')),
            path: localStorage.getItem('path'),
            secret: localStorage.getItem('secret'),
            secure: localStorage.getItem('secure') === 'true',                     
        }

        if (storedSettings.host == null) {
            storedSettings = defaultSettings;
            setSettings(storedSettings);
        }

        return storedSettings;
    } else {
        return defaultSettings;
    }
}