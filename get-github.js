const axios = require('axios');
var fs = require('fs')

const FILENAME_STARS = 'data/github-stars.json'
const FILENAME_REPOS = 'data/github-repos.json'
const ORG = 'openclimatefix'


async function getReposForPage(page) {
    const {
        status,
        data
    } = await axios.get(`https://api.github.com/orgs/${ORG}/repos?per_page=100&page=${page}`);
    if (status !== 200) {
        throw err;
    }

    return data;
}

async function getSumStargazersForAllRepos() {
    let i = 1;
    let allRepos = [];

    while (true) {
        const repos = await getReposForPage(i)
        allRepos = allRepos.concat(repos)

        if (repos.length !== 100) {
            break
        }
    }

    const totalStargazers = allRepos.reduce((acc, cur) => acc + cur.stargazers_count, 0)
    return totalStargazers;
}

function handleRepoCount() {
    axios.get(`https://api.github.com/orgs/${ORG}`)
        .then(response => {
            fs.readFile(FILENAME_REPOS, function (err, data) {
                if (err) throw err;

                var output = JSON.parse(data)
                output.push({
                    x: new Date(),
                    y: response.data.public_repos
                })

                fs.writeFile(FILENAME_REPOS, JSON.stringify(output), function (err) {
                    if (err) throw err;

                    console.log('Data was appended to file!');
                });
            })
        })
        .catch(error => {
            console.log(error);
        });
}

async function getGithubData() {
    handleRepoCount();

    const totalStars = await getSumStargazersForAllRepos();
    fs.readFile(FILENAME_STARS, function (err, data) {
        if (err) throw err;

        var output = JSON.parse(data)
        output.push({
            x: new Date(),
            y: totalStars
        })

        fs.writeFile(FILENAME_STARS, JSON.stringify(output), function (err) {
            if (err) throw err;

            console.log('Data was appended to file!');
        });
    })
}

getGithubData();