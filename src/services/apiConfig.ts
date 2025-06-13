const apiLaBonneURL = 'https://labonne.org/wp-json/wp/v2/posts'

const requestConfig: RequestInit = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
    },
}

export { apiLaBonneURL, requestConfig }
