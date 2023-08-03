
// request transit API (display passio GO integration)

function getMap(){

    let xmJson = 
    {
        "metadata":{
            "version": "2.0"
        },
        "contentStyle": "focal",
        "backToTopBackgroundColor": "#004684",
        "backToTopTextColor": "white",
        "content": [
        {
            "elementType": "iframe",
            "width": "100%",
            "height": "80%",
            "url": "https://passiogo.com/"
        },
        {
            "elementType": "html",
            "textColor": "#004684",
            "fontFamily": "Rendered HTML, sans-serif",
            "html": "<h2><b>NCAT Shuttle Service | Passio GO",
        },
        {
            "elementType": "linkButton",
            "backgroundColor": "#fdb927",
            "title": "Return to Dashboard",
            "link": {
                "relativePath": "./studashboard"
            }
        }]
    }

    return xmJson
}

module.exports.getMap = getMap;
