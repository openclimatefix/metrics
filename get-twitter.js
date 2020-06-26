const axios = require('axios');
var fs = require('fs')

const USERNAMES = ['openclimatefix', 'jack_kelly']

function fetchFollowersForUsername(username, bearerToken) {
    const FILENAME = `data/twitter-followers-${username}.json`

    axios.get(`https://api.twitter.com/1.1/users/show.json?screen_name=${username}`, {
            headers: {
                Authorization: `Bearer ${bearerToken}`
            }
        })
        .then(response => {
            console.log(response.data.followers_count)
            fs.readFile(FILENAME, function (err, data) {
                if (err) throw err;

                var output = JSON.parse(data)
                output.push({
                    x: new Date(),
                    y: response.data.followers_count
                })

                fs.writeFile(FILENAME, JSON.stringify(output), function (err) {
                    if (err) throw err;

                    console.log(`Data was appended to file for user ${username}!`);
                });
            })
        })
        .catch(error => {
            console.log(error);
        });
}

axios.post('https://api.twitter.com/oauth2/token', null, {
        auth: {
            username: process.env.TWITTER_API_KEY,
            password: process.env.TWITTER_API_SECRET
        },
        params: {
            'grant_type': 'client_credentials',
        }
    })
    .then(response => {
        const access_token = response.data.access_token;

        for (username of USERNAMES) {
            fetchFollowersForUsername(username, access_token)
        }
    })
    .catch(error => {
        console.log(error);
    });
