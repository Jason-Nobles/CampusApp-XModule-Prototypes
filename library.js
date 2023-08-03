const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
const { URL } = require('url');

//use openLibrary api to display/view book information from a valid isbn

//openlibrary API -> https://openlibrary.org/dev/docs/api/books
//const URL = 'https://openlibrary.org/isbn/{num}.json'
//9780321905758


function gen(url){
    return url
}



function getBookInfo(req){
    
    let xmJson = {
        "metadata": {
          "version": "2.0"
        },
        "contentStyle": "focal",
        "backToTopBackgroundColor": "#004684",
        "backToTopTextColor": "white",
        "content":[
            {
                "elementType": "divider",
                "borderColor": "transparent"
            },
            { //create isbn search bar with option to view book based on valid input
                "elementType": "form",
                "relativePath": "",
                "items": [
                    {
                        "elementType": "formInputText",
                        "label": "Search Books",
                        "name": "search_info",
                        "placeholder": "Please enter a valid Book Title or ISBN"
                    }],
                    "events": [{
                        "eventName": "change",
                        "action": "ajaxUpdate",
                        "targetId": "ncat_orgs",
                        "ajaxRelativePath": "",
                        "propagateArgs": true
                      },
                      {
                        "eventName": "submit",
                        "action": "ajaxUpdate",
                        "targetId": "ncat_orgs",
                        "ajaxRelativePath": "",
                        "propagateArgs": true
                      }
                    ]
            },
            {
                "id": "ncat_orgs",
                "elementType": "list",
                "imageStyle": "thumbnail",
                "descriptionFontFamily": "Rendered HTML, sans-serif",
                "descriptionTextColor": "black"
                
            },

            {
                "elementType": "divider",
                "borderColor": "transparent"
            },
            {//return to student dashboard home screen
                "elementType": "linkButton",
                "backgroundColor": "#fdb927",
                "title": "Return to Dashboard",
                "link": {
                    "module": {
                        "id": "student_dashboard",
                        "page": "index",
                        "targetNewWindow": true,
                    }
                }
            }
        ]
    }

    global.findString = null;

    //access isbn entered and store info for API call
    if('query' in req && req.query != null && 'search_info' in req.query){
        global.findString = req.query.search_info;


        //display and load view book option when searching isbn or title
        let hold = [];
        hold.push({
            "link": {
                "relativePath": "./bookinfo"
            },
            "image": {
                "url": "https://www.pngmart.com/files/22/Book-Logo-PNG-Photo.png"
            },
            "title": 'View Book(s)',
            "description": ''
        })
        
        if (global.findString == '') {
            
            xmJson.elementFields = {
                "hidden": false,
                "ajaxLoadingIndicator":"large",
                "ajaxLoadingMessage": "loading"
            };
        }
        else{
            xmJson.elementFields = {
                "hidden": false,
                "ajaxLoadingIndicator":"large", 
                "ajaxLoadingMessage": "loading",
                "items": hold
                
            }
        }
        
    }

    let containsLetter = /[a-zA-Z]/.test(findString)
    let string = null;
    let search_string = null;
    let url = null;
    global.title = false;
    global.isbn = false;

    if(findString!=null && containsLetter){
        string = global.findString.split(" ")
        search_string = string.join("+")
        url = `https://openlibrary.org/search.json?q=${search_string}`;

        global.title = true;
    }
    else if(!containsLetter && global.findString.length >= 10 && !(global.findString.length > 14)){
        url = `https://openlibrary.org/api/books?bibkeys=ISBN:${global.findString}&jscmd=details&format=json`;
        global.isbn = true;
        
    }

    console.log(global.isbn)
    console.log(search_string);
    console.log(global.findString)

    global.url = gen(url)

    return xmJson;
} 

module.exports.getBookInfo = getBookInfo;
