const request = require('tinyreq');
const cheerio = require('cheerio'); // to filter the element in raw html code

/*
cheerioReq("http://ionicabizau.net/",(err, $) => {
    console.log($(".header h1").text());
});
*/

module.exports = function(url,data,cb) {
    // Create a request
    request(url,(err,body)=> {
        if (err) throw err;

        //Load everything into $ variable with key,value pairs.
        let $ = cheerio.load(body)
            ,pageData =  {}  // Create a empty array to store raw text
        ;

        // Filter the element from response data (raw html)
        Object.keys(data).forEach(k=>{
            pageData[k] = $(data[k]).text();
        });

        // Prompt error if the raw text is not loaded into array.
        if(pageData.length<0){
            cb("The url is invalid", null);
        } else{
            cb(null, pageData);
        }

    });
};
