const axios = require('axios');
var fs = require('fs')

const FILENAME = 'data/opencollective-budget.json'


axios.get('https://opencollective.com/openclimatefix.json')
    .then(response => {
        fs.readFile(FILENAME, function (err, data) {
            if (err) throw err;

            var output = JSON.parse(data)
            output.push({
                x: new Date(),
                y: response.data.balance / 100
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
