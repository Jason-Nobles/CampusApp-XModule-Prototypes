
//dashboard for student quick links a& course, dining, transportation, & library access/convienence
function createPortal(payload){

    let xmJson = {
        "metadata": {
            "version": "2.0"
        },
        "contentBackgroundColor": "#EFEEEE",
        "bodyBackgroundColor": "#EFEEEE",
        "contentContainerWidth": "full",
        "contentStyle": "focal",
        "backToTopBackgroundColor": "#004684",
        "backToTopTextColor": "white",
        "content": [
            {// tool bar for quick link student resources
                "elementType": "toolbar",
                "id": "label_menu_button",
                "backgroundColor": "#004684",
                "textColor": "#FFFFFF",
                "left": [
                    {
                        "elementType": "toolbarMenu",
                        "showDisclosureIcon": true,
                        "accessoryIcon": "info",
                        "items": [
                            {
                                "title": "Navigation",
                                "selected":true
                            },
                            {
                                "title": "Event Calendar",
                                "link":{
                                    "external": "https://www.ncat.edu/campus-life/student-affairs/departments/student-center/university-event-center/calendar.php"
                                }
                            },
                            {
                                "title": "Student Employment",
                                "link":{
                                    "external": "https://www.ncat.edu/campus-life/student-affairs/departments/housing-and-residence-life/resident-resources/employment/index.php"
                                }
                            },
                            {
                                "title": "Resources",
                                "link":{
                                    "external": "https://www.ncat.edu/provost/student-resources.php"
                                }
                            }
                        ]
                    }
                ],
                "middle": [
                    {
                        "elementType": "toolbarLabel",
                        "label": "Menu"
                    }
                ],
                "right": [
                    {
                        "elementType": "toolbarButton",
                        "title": "Contact",
                        "icon": "phone",
                        "link":{
                            "external": "https://www.ncat.edu/contact-us/index.php"
                        }
                    }
                ]
            },
            {//display student profile information from sign-in (payload)
                "elementType": "nameTag",
                "nameTagStyle": "horizontal",
                "nameFontSize": "xlarge",
                "nameFontFamily": "Rendered HTML, sans-serif",
                "nameFontWeight": "medium",
                "name": `<b>Welcome, ${payload.name}`,
                "descriptionFontFamily": "Rendered HTML, sans-serif",
                "descriptionTextColor": "black",
                "description": `${payload.major} -  ${payload.classification}<br> ${payload.email}`,
                "image": {
                    "url": `${payload.photo}`
                    },
                "imageWidth": "xlarge",
                "imageHeight": "xlarge",
            },
            {
                "elementType": "cardSet",
                "heading": {},
                "imageStyle": "heroLarge",
                "shadow": "medium",
                "size": "xsmall",
                "textblockMargin": "xtight",
                "titleFontSize": "small",
                "items": [ //create pages for student access to dining, courses, transportation & library

                    {
                        "elementType": "contentCard",
                        "title": "Dining",
                        "description": "Meal Plan - Menu",
                        "link":{
                            "relativePath": "./dining"
                        },
                        "image": {
                            "url": "https://content-service.sodexomyway.com/media/Williams%20Web%20Pix_tcm146-104162.jpg?url=https://www.ncatdining.com/",
                            "alt": "headshot image"
                        }
                    },
                    {
                        "elementType": "contentCard",
                        "title": "Courses",
                        "description": "Enroll - Advisement",
                        "link": {
                            "relativePath": "./courses"
                        },
                        "image": {
                            "url": "https://ncat.edu2.com/images/edu2-info-session.jpg",
                            "alt": "headshot image"
                        }
                    },
                    {
                        "elementType": "contentCard",
                        "title": "Library Services",
                        "description": "Search - View Books",
                        "link": {
                            "module": {
                                "id": "studashboard_library",
                                "page": "index",
                                "targetNewWindow": true,
                                //"relativePath": './library'
                            }
                        },
                        "image": {
                            "url": "https://lh5.googleusercontent.com/p/AF1QipM7rBmurCLGwDWc21Gu3U77HuU9-QVv7U3XXJkX",
                            "alt": "library"
                        }
                    },
                    {
                        "elementType": "contentCard",
                        "title": "Shuttle Service",
                        "description": "Map - Shuttle Stops",
                        "link": {
                            "relativePath": "./transportation"
                        },
                        "image": {
                            "url": "https://pbs.twimg.com/media/E9e8ohfVkAMeUFA.jpg:large",
                            "alt": "transportation"
                        }
                    }
                ]
            },
            { //display campus news e
                "elementType": "cardSet",
                        "id": "carousel_images",
                        "shadow": "loose",
                        "size": "large",
                        "marginTop": "xtight",
                        "items": [{
                            "elementType": "carouselCard",
                            "heading": "News & Events",
                            "imageStyle": "fullbleedGradient",
                            "titleLineClamp": 3,
                            "descriptionLineClamp": 3,
                            "items": [
                                {
                                    "elementType": "carouselCardItem",
                                    "title": "Business N.C. Names CAES Dean Ahmedna to ‘Power List’",
                                    "description": `08/03/2023 in College of Agriculture and Environmental Sciences<br> Mohamed Ahmedna, dean of the College of Agriculture and Environmental Sciences (CAES) at North Carolina Agricultural and Technical State University, has been named to Business N.C. magazine’s Power List in the area of agriculture.`,
                                    "link":{
                                        "external": "https://www.ncat.edu/news/2023/08/ahmedna-business-nc-power-list.php"
                                    },
                                    "image": {
                                        "url": "https://www.ncat.edu/news/2021/09/university-farm-pavilion-2345-copy-31.jpg",
                                        "alt": "Power List"
                                    }
                                },
                                {
                                    "elementType": "carouselCardItem",
                                    "title": "USDA Awards $1.8M to N.C. A&T Agriculture, Nutrition, Consumer Sciences Projects",
                                    "description": `08/02/2023 in College of Agriculture and Environmental Sciences<br> North Carolina Agricultural and Technical State University’s College of Agriculture and Environmental Sciences (CAES) will receive nearly $2 million to test environmentally friendly growing techniques, improve educational training on food allergies, strengthen nutritional science programs and more – six projects in all – as part of a competitive grant program from the U.S. Department of Agriculture’s National Institute of Food and Agriculture.`,
                                    "link":{
                                        "external": "https://www.ncat.edu/news/2023/08/caes-usda-2-million.php"
                                    },
                                    "image": {
                                        "url": "https://www.ncat.edu/news/2023/08/reza-and-student2.jpeg",
                                        "alt": "USDA"
                                    }
                                },
                                {
                                    "elementType": "carouselCardItem",
                                    "title": "FOUR N.C. A&T JOURNALISM STUDENTS COMMIT TO THREE-YEAR MCCLATCHY HBCU INTERNSHIP PROGRAM",
                                    "description": `08/01/2023 in Journalism and Mass Communication<br> North Carolina Agricultural and Technical State University rising sophomore public relations majors Renee Douglas and Steven Matthews Jr., along with rising junior multimedia journalism majors Chrysta Nichols and Gabrielle Heyward, have been chosen to participate in the McClatchy Historically Black Colleges and Universities (HBCU) Internship.`,
                                    "link":{
                                        "external": "https://www.ncat.edu/news/2023/08/students-selected-mcclatchy-hbcu-internship.php"
                                    },
                                    "image": {
                                        "url": "https://www.ncat.edu/news/2023/08/crosby-hall-5308.jpg",
                                        "alt": "Triad"
                                    }
                                }
                            ]
                        }]
            }
        ]
    };
    

    return xmJson;
}

module.exports.createPortal = createPortal;