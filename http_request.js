const scrape = require('./scrape');

// function invoked here.
scrape("http://ionicabizau.net/", {
    title: ".header h1",
    description: ".header h2"
}, (err, data) => {
    console.log(err||data);
});