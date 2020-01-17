const GET = (url, defaultPrefix = 'http://localhost:8080/api/') => {
    const absoluteUrl = `${defaultPrefix}${url}`;

    return fetch(absoluteUrl).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Unable to Get');
        }
    });
};


export { GET };