const axios = require('axios');
var fs = require('fs')

const FILENAME = 'data/mailchimp-subscribers.json'


axios.get('https://us20.api.mailchimp.com/3.0/lists/d56fc32a31', {
        auth: {
            username: "ofc-metrics",
            password: process.env.MAILCHIMP_API_KEY
        },
    })
    .then(response => {
        fs.readFile(FILENAME, function (err, data) {
            if (err) throw err;

            var output = JSON.parse(data)
            output.push({
                x: new Date(),
                y: response.data.stats.member_count
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