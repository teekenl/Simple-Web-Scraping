const scrapeIt = require("scrape-it");

// Fetch the articles on the page (list)
scrapeIt("http://ionicabizau.net", {
    listItem: ".article"
    , name: "articles"
    , data: {
        createdAt: {
            selector: ".date"
            , convert: x => new Date(x)
        }
        , title: "a.article-title"
        , tags: {
            selector: ".tags"
            , convert: x => x.split("|").map(c => c.trim()).slice(1)
        }
        , content: {
            selector: ".article-content"
            , how: "html"
        }
    }
}, (err, page) => {
    console.log(err || page);
});