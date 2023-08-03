

//display book information accessed from isbn/API request
function displayInfo(){

    //console.log(global.jsonData)
    let xmJson = {
        "metadata":{
            "version": "2.0"
        },
        "content":[]
    }

    console.log(global.isbn)
    console.log(console.error)

    

    //if ISBN is not found handle console error
    if(global.error == 'Error'){
        console.log("hello")
        xmJson.content.push ({
            "elementType": "divider",
            "borderColor": "transparent"
        },{
            "elementType":"html",
            "html":"ISBN Not Found!"
        },{
            "elementType": "divider",
            "borderColor": "transparent"
        },{
            "elementType": "linkButton",
            "backgroundColor": "#fdb927",
            "title": "Return to Library Search",
            "link": {
                "relativePath": "./library"
            }
        })
        return xmJson;
    }
    else if(global.isbn){    
        //student enters isbn, display book
        xmJson = {
            "metadata":{
                "version": "2.0"
            },
            "contentStyle": "focal",
            "backToTopBackgroundColor": "#004684",
            "backToTopTextColor": "white",
            "content": [
            {
                "elementType": "divider",
                "borderColor": "transparent"
            },
            {
                "elementType": "cardSet",
                "id": "styles_backgrounds",
                "marginTop": "xtight",
                "imageStyle": "thumbnail",
                "imageWidth":"50%",
                "imageHeight": "90%",
                "imageHorizontalPosition": "left",
                "imageMargin":"xtight",
                "borderColor": "#004684",
                "shadow": "medium",
                "descriptionTextColor": "black",
                "size": "xlarge",
                "items": [
                    {
                        "elementType": "contentCard",
                        "title": `${global.jsonData[`ISBN:${global.findString}`].details.title}`,
                        "description": `<br><b>Author: </b>${global.jsonData[`ISBN:${global.findString}`].details.publishers}<br><b>Publish Date:</b> ${global.jsonData[`ISBN:${global.findString}`].details.publish_date}<br><b>Edition: </b>${global.jsonData[`ISBN:${global.findString}`].details.edition_name}<br><b>Pages: </b> ${global.jsonData[`ISBN:${global.findString}`].details.number_of_pages} <br><b>ISBN-13: </b> ${global.jsonData[`ISBN:${global.findString}`].details.isbn_13}`,
                        "image": {
                            "url": `https://covers.openlibrary.org/b/isbn/${global.jsonData[`ISBN:${global.findString}`].details.isbn_13}-L.jpg`,
                            "alt": ""
                        },
                        "link":{
                            "external": `${global.jsonData[`ISBN:${global.findString}`].preview_url}`
                        }
                    }
                ]
            },
            {
                "elementType": "divider",
                "borderColor": "transparent"
            },
            {
                "elementType": "linkButton",
                "backgroundColor": "#fdb927",
                "title": "Return to Library Search",
                "link": {
                    "relativePath": "./library"
                }
            }]
        }
    }
    else if(global.title){//student enters a title, display list of books

        function getList() {
            let xmBookList = {
            "elementType": "list",
            "itemSize": "large",
            "id": "book_cards",
            "imageStyle": "thumbnail",
            "descriptionFontFamily": "Rendered HTML, sans-serif",
            "descriptionTextColor": "black",
            "items": []
          };

        
            for(let book of global.jsonData.docs)
            {
                if(book.length > 15){
                    if(book.title.includes(global.findString)){
                        xmBookList.items.push({
                            "link": {
                                "ajaxLoadingIndicator":"large",
            "ajaxLoadingMessage": "loading",
                                "external": `https://openlibrary.org${book.key}`
                            },
                            "title": book.title,
                            "image":{
                                "url": `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`,
                                "alt": "photo"
                            },
                            "description": `Author: ${book.author_name}<br> Pages: ${book.number_of_pages_median}`
                        });
                    }
                }
                else{
                    xmBookList.items.push({
                        "link": {
                            "external": `https://openlibrary.org${book.key}`
                        },
                        "title": book.title,
                        "image":{
                            "url": `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`,
                            "alt": "photo"
                        },
                        "description": `Author: ${book.author_name}<br> Pages: ${book.number_of_pages_median}`
                    });
                }
            }

      
          return xmBookList;
        }


        xmJson = {
            "metadata":{
                "version": "2.0"
            },
            "contentStyle": "focal",
            "backToTopBackgroundColor": "#004684",
            "backToTopTextColor": "white",
            "content": [
            {
                "elementType": "divider",
                "borderColor": "transparent"
            },
            {
                "elementType": "linkButton",
                "backgroundColor": "#fdb927",
                "title": "Return to Library Search",
                "link": {
                    "relativePath": "./library"
                }
            },
            {
                "elementType": "divider",
                "borderColor": "transparent"
            },
            getList(), //get list of similar book titles
            {
                "elementType": "divider",
                "borderColor": "transparent"
            }]
        }
    }
    

    return xmJson;
}

module.exports.displayInfo = displayInfo;