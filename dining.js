
//student meal plan, menu, and virtual id info
function createDining(payload)
{
    //access & store students meal plan info 
    let aggie = payload.meal_plan[0].amount.toString();
    let swipes = payload.meal_plan[1].amount.toString();
    let dining = payload.meal_plan[2].amount.toString();
    
    let xmJson = {
        "metadata":{
            "version": "2.0"
    },
    "contentContainerWidth": "full",
    "contentStyle": "focal",
    "backToTopBackgroundColor": "#004684",
    "backToTopTextColor": "white",
    "content": [{
        "elementType": "container",
        "id": "content_container_width",
        "content": [{
          "elementType": "hero",
          "height": "fluid",
          "contentContainerWidth": "medium",
          "backgroundImage": {
            "url": "https://content-service.sodexomyway.com/media/Marketplace%20Web%20Pix_tcm146-104161.jpg?url=https://www.ncatdining.com/"
          },
          "content": [{
              "elementType": "heroImage",
              "image": [],
              "marginTop": "xloose",
              "marginBottom": "xxtight",
              "horizontalAlignment": "left",
              "imageSize": "155px"
            },
            {
              "elementType": "heroHeading",
              "heading": "",
              "textColor": "#ffffff",
              "fontSize": "2rem"
            },
            {
              "elementType": "heroSubheading",
              "subheading": "",
              "textColor": "#ffffff",
              "marginBottom": "2rem"
            }
          ]
        }]
      },
      {//display amounts from student meal plan information (link to add funds)
        "elementType": "collapsible",
        "title": "Dining - Accounts",
        "description": "",
        "image": {
            "url": "https://marvel-b1-cdn.bc0a.com/f00000000251830/www.ncat.edu/campus-life/campus-enterprises/icons-images/ncat-dining-icon.png",
            "alt": "Aggie Dining"
        },
        "imageWidth": "4rem",
        "imageHeight": "4rem",
        "content": [{
            "elementType": "portlet",
            "forceAjaxOnLoad": false,
            "borderRadius": "medium",
            "borderStyle": "none",
            "backgroundColor": "#FFFFFF",
            "padding": "medium",
            "marginTop": "none",
            "marginBottom": "medium",
            "heading": {
                "headingLevel": 3,
                "heading": `<b>Student Balances</b> <h3>(click to add funds)</h3>`,
                "headingFontWeight": "medium",
                "marginBottom": "xtight"
            },
            "content": [
                {
                    "elementType": "grid",
                    "gridStyle": "springboard",
                    "gridDensity": "medium",
                    "horizontalAlignment": "left",
                    "imageSize": "xxsmall",
                    "titleFontSize": "0.875rem",
                    "titleTextColor": "theme:primary_text_color",
                    "descriptionFontSize": "0.875rem",
                    "descriptionTextColor": "theme:primary_text_color",
                    "items": [
                        {
                            "title": "Aggie Dollars",
                            "description": `$${aggie}`,
                            "image": {
                                "url": "https://static.modolabs.com/xmodule/iconsets/stroke-shaded-black/90/creditcard.png"
                            },
                            "link": {
                                "external": "https://get.cbord.com/ncat/full/funds_home.php"
                            }
                        },
                        {
                            "title": "Dining Swipes",
                            "description": `${swipes}`,
                            "image": {
                                "url": "https://static.modolabs.com/xmodule/iconsets/stroke-shaded-black/90/dining.png"
                            },
                            "link": {
                                "external": "https://get.cbord.com/ncat/full/funds_home.php"
                            }
                        },
                        {
                            "title": "Dining Dollars",
                            "description": `$${dining}`,
                            "image": {
                                "url": "https://static.modolabs.com/documentation/themes/stroke-shaded-black/120/money.png"
                            },
                            "link": {
                                "external": "https://get.cbord.com/ncat/full/funds_home.php"
                            }
                        }
                    ]
                }]
            }]
        }, 
        {//access to student virtual ID externally
            "elementType": "collapsible",
            "title": "Dining - Scan Card",
            "description": "",
            "image": {
                "url": "https://marvel-b1-cdn.bc0a.com/f00000000251830/www.ncat.edu/campus-life/campus-enterprises/icons-images/ncat-one-card-icon.png",
                "alt": "Aggie Dining"
            },
            "imageWidth": "4rem",
            "imageHeight": "4rem",
            "content": [{
                "elementType": "portlet",
                "forceAjaxOnLoad": false,
                "borderRadius": "medium",
                "borderStyle": "none",
                "backgroundColor": "#FFFFFF",
                "padding": "medium",
                "marginTop": "none",
                "marginBottom": "medium",
                "heading": {
                    "headingLevel": 3,
                    "heading": `<b>Aggie OneCard</b> (click to open GET Mobile)`,
                    "headingFontWeight": "medium",
                    "marginBottom": "xtight"
                }, 
                "content": [
                    {
                        "elementType": "grid",
                        "gridStyle": "springboard",
                        "gridDensity": "medium",
                        "horizontalAlignment": "left",
                        "imageSize": "xxsmall",
                        "titleFontSize": "0.875rem",
                        "titleTextColor": "theme:primary_text_color",
                        "descriptionFontSize": "0.875rem",
                        "descriptionTextColor": "theme:primary_text_color",
                        "items": [
                            {
                                "title": `${payload.sub} - GET`,
                                "description": "",
                                "image": {
                                    "url": "https://static.modolabs.com/documentation/themes/stroke-shaded-black/120/persona.png"
                                },
                                "link": {
                                    "external": getMobileApp()
                                }
                            }
                        ]
                    }]
            }]
        },
        {//frame & display ncat dining menu for current day
            "elementType": "collapsible",
            "title": "Dining - Menu",
            "description": "",
            "image": {
                "url": "https://marvel-b1-cdn.bc0a.com/f00000000251830/www.ncat.edu/campus-life/campus-enterprises/icons-images/ncat-bookstore-icon.png",
                "alt": "Aggie Dining"
            },
            "imageWidth": "4rem",
            "imageHeight": "4rem",
            "content": [{
                "elementType": "portlet",
                "forceAjaxOnLoad": false,
                "borderRadius": "medium",
                "borderStyle": "none",
                "backgroundColor": "#FFFFFF",
                "padding": "medium",
                "marginTop": "none",
                "marginBottom": "medium",
                "content": [{
                    "elementType": "iframe",
                    "width": "90%",
                    "height": "65%",
                    "url": "https://menus.sodexomyway.com/BiteMenu/Menu?menuId=14847&locationId=94021001&whereami=http://ncatdining.sodexomyway.com/dining-near-me/williams-dining"
                }]
            }]
        },
        {
            "elementType": "divider",
            "borderColor": "transparent"
        },
        {//display & link banner for ncat delivery service 
            "elementType": "cardSet",
            "id": "imageStyle_fullbleedSolid",
            "marginTop": "medium",
            "items": [
            {
                    "elementType": "contentCard",
                    "size": "small",
                    "imageStyle": "fullbleedSolid",
                    "link": {
                        "external": getStarshipApp()
                    },
                    "image": {
                        "url": "https://www.ncat.edu/news/2021/10/starship_72_crop.jpg",
                        "alt": "Starship NCAT"
                    },
                    "label": "",
                    "title": "Explore Starship at NCAT!",
                    "description": "Download the app"
            }]
        },
        {
            "elementType": "divider",
            "borderColor": "transparent"
        },
        {
            "elementType": "linkButton",
            "backgroundColor": "#fdb927",
            "title": "Return to Dashboard",
            "link": {
                "relativePath": "./studashboard"
            }
        },
        {
            "elementType": "divider",
            "borderColor": "transparent"
        }]
    };
    
    
    function getMobileApp() { //get user device platform for accessing student virtual ID via GET app
        let link = null;

        if (payload.platform == 'android') {
            link = "https://play.google.com/store/apps/details?id=com.cbord.get"
            return link;
        }
    
        if (payload.platform == 'ios') {
            link = "https://apps.apple.com/us/app/get-mobile/id844091049"
            return link;
        }
    
        return "https://get.cbord.com/ncat/full/prelogin.php";
    }

    function getStarshipApp() {
        let link = null;

        if (payload.platform == 'android') {
            link = "https://play.google.com/store/apps/details?id=xyz.starship.deliveries&hl=en_US&gl=US"
            return link;
        }
    
        if (payload.platform == 'ios') {
            link = "https://apps.apple.com/us/app/starship-food-delivery/id1278308166"
            return link;
        }
    
        return "https://get.starshipdeliveries.com/u/aggies";
    }
    

    return xmJson
}
module.exports.createDining = createDining;