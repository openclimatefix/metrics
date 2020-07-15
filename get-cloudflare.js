const axios = require('axios');
const fs = require('fs')

const FILENAME = 'data/cloudflare-openclimatefixorg.json'


let d = new Date(); // Today!
d.setDate(d.getDate() - 1); // Yesterday!
const yesterday = d.toISOString().split('T')[0] // YYYY-MM-DD


axios.post('https://api.cloudflare.com/client/v4/graphql', {
    query: `
        query {
            viewer {
                zones(filter: {zoneTag: "${process.env.CLOUDFLARE_ZONE_TAG}"}) {
                    httpRequests1dGroups(limit: 10, filter: {date: "${yesterday}"}) {
                        sum {
                            pageViews
                        }
                    }
                }
            }
        }
    `
}, {
        headers: {
            'X-AUTH-EMAIL': process.env.CLOUDFLARE_EMAIL,
            'X-AUTH-KEY': process.env.CLOUDFLARE_API_KEY
        }
    })
    .then(response => {
        if (response.status !== 200) {throw `Bad response from CF API ${response.data}`}

        fs.readFile(FILENAME, function (err, data) {
            if (err) throw err;

            var output = JSON.parse(data)
            output.push({
                x: d,
                y: response.data.data.viewer.zones[0].httpRequests1dGroups[0].sum.pageViews
            })

            fs.writeFile(FILENAME, JSON.stringify(output), function (err) {
                if (err) throw err;

                console.log('Data was appended to file!');
            });
        })
    })
    .catch(error => {
        console.log(error);
    });
