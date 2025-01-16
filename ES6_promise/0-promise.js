function getResponseFromAPI () {
    return new Promis (( resolve) => {
        setTimeout (() => {
            resolve();
        }, 10);
    });
}