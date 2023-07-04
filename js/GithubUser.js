export class GithubUser{
    static search(username){
        const endpoint = `https://api.github.com/users/${username}`

        return fetch(endpoint) //Utiliza o fetch para fazer a requisição
        .then(data => data.json()) // Utiliza o primeiro then para transforma a requisição retornada em string para JSON
        .then(({login, name, public_repos, followers}) => ({
            login,
            name,
            public_repos,
            followers
        })) //Utiliza o segundo then para desistruturar meu JSON para traser somente as informações que eu quero e utilizando a shorthand para retornar um objeto que preciso
    }
}