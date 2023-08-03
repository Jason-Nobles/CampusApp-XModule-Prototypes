

//display list of courses with student course/advisement info

function buildCourses(payload){

    function getCurrentList() {  //get list of students courses

        let xmCourseList = {
        "elementType": "cardSet",
        "size": "xsmall",
        "borderless": true,
        "borderRadius": "none",
        "imageStyle": "hero",
        "imageHeight": "4.5rem",
        "imageBorderRadius": "tight",
        "textblockMargin": "xtight",
        "titleFontSize": "0.9375rem",
        "titleFontWeight": "normal",
        "titleTextColor": "#022761",
        "titleLineClamp": 2,
        "descriptionTextColor": "black",
        "heading": {
            "heading": `<b>Current Courses`,
            "headingLevel": 2,
            "headingTextColor": "#fdb927", //004684
            "description": `<b>${payload.semester}`,
            "descriptionTextColor": "black",
            "marginTop": "none",
            "marginBottom": "loose",
            "buttons": [
                {
                    "elementType": "linkButton",
                    "title": "Aggie Access",
                    "icon": "drilldown",
                    "iconPosition": "right",
                    "link": {
                      "external": "https://ssbprod-ncat.uncecs.edu/pls/NCATPROD/twbkwbis.P_WWWLogin"
                    },
                    "textColor": "theme:tertiary_text_color"
                }
            ]
        },
        "marginTop": "none",
        "marginBottom": "medium",
        "items": []
        }
        
        for(let i = 0; i < payload.courses.length; i++){
          for (let o of ncatCourses) {
            if (o != null && payload.courses[i].includes(o.id)) {
              let split = o.id.split(".")
              let sec = split[1]
              xmCourseList.items.push({
                "elementType": "contentCard",
                
                "link": {
                  "external": `${o.page}`
                },
                "image": {
                  "url": o.photo,
                  "alt": o.name
                },
                "title": `<b>${o.name}</b> ${sec}`,
                "description": `${o.location}<br> ${o.class_info}`
              });
            }
          }
        }
        
    
        return xmCourseList;
    }

    function getBb(){ //blackboard app based on user platform
      if(payload.platform == 'ios'){
        let link = "https://apps.apple.com/us/app/blackboard-learn/id950424861"
        return link
      }
      if(payload.platform == 'android'){
        let link = "https://play.google.com/store/apps/details?id=com.blackboard.android.bbstudent&hl=en_US&gl=US"
        return link
      }

      let link = "https://blackboard.ncat.edu/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_3_1"

      return link
    }

    
    let xmJson = {
        "metadata": {
          "version": "2.0"
        },
        "contentStyle": "focal",
        "backToTopBackgroundColor": "#004684",
        "backToTopTextColor": "white",
        "content": [
            {
                "elementType": "container",
                "wrapperStyle": "focal",
                "borderStyle": "none",
                "borderRadius": "xloose",
                "padding": "loose",
                "content":[getCurrentList()]
            },

            //Student Blackboard app
            {
              "elementType": "nameTag",
              "nameTagStyle": "horizontal",
              "imageBorderColor": "#fdb927",
              "imageBorderWidth": "1px",
              "nameFontSize": "large",
              "nameFontFamily": "Rendered HTML, sans-serif",
              "nameFontWeight": "medium",
              "name": `<b>Blackboard`,
              "descriptionFontFamily": "Rendered HTML, sans-serif",
              "descriptionTextColor": "black",
              "description": `View Homework & Grades`,
              "image": {
                  "url": "https://play-lh.googleusercontent.com/MInjRtQiNuVZwZzuJwUnruIZs4hkUtpG-38NPihOt7RcGv8mhkosJ5VVekEb3gcUFWc"
                  },
              "imageWidth": "xlarge",
              "imageHeight": "xlarge",
              "link": {
                "external": getBb()
              },
            },
            {
              "elementType": "divider",
              "borderColor": "transparent",
            },
            {
              "elementType": "divider",
              "borderColor": "transparent"
            },

            //Display Advisor information/contact
            {
              "elementType": "cardSet",
              "id": "styles_backgrounds",
              "marginTop": "xtight",
              "imageStyle": "hero",
              "size": "small",
              "items": [
                  {
                      "elementType": "contentCard",
                      "backgroundColor": "#022761",
                      "labelTextColor": "#FDB827",
                      "label": `${payload.advisor[0].name}`,
                      "titleTextColor": "#ffffff",
                      "title": `My Advisor - ${payload.advisor[0].program}`,
                      "descriptionTextColor": "white",
                      "description": `<b>Contact:</b> ${payload.advisor[0].email}`,
                      "link": {
                        "external": "https://mail.google.com/mail/u/0/#inbox?compose=new"
                      },
                      "image": {
                          "url": `${payload.advisor[0].image}`,
                          "alt": `${payload.advisor[0].name}`
                      }
                  }
              ]
          },
          { //return to dashboard home screen
              "elementType": "linkButton",
              "backgroundColor": "#fdb927",
              "title": "Return to Dashboard",
              "link": {
                  "relativePath": "./studashboard"
              }
          },
          {
            "elementType": "divider",
            "borderColor": "transparent",
          }
        ]
      };



    return xmJson;
}

//data of available courses (info)
let ncatCourses = [
  {
      "id": "math224.01",
      "name": "MATH 224",
      "description": `Probability & Statistics`,
      "location": "Marteena Hall TBA",
      "class_info": "MWF -> 3:00pm - 3:50pm",
      "page": "https://www.ncat.edu/cost/departments/mathematics/index.php",
      "photo": "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
  },
  {
      "id": "comp360.01",
      "name": "COMP 360",
      "description": "Programming Languages",
      "location": "Graham Hall 208",
      "class_info": "TR -> 11:00am - 12:15pm",
      "page": "https://www.ncat.edu/coe/departments/cs/index.php",
      "photo": "https://images.unsplash.com/photo-1580584126903-c17d41830450?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
  },
  {
    "id": "engl101",
    "name": "ENGL 101",
    "description": "Ideas and their Expressions II",
    "location": "Crosby Hall",
    "class_info": [{}],
    "page": "https://www.ncat.edu/cahss/departments/english/index.php",
    "photo": "https://img.diverseeducation.com/files/base/diverse/all/image/2021/06/edu.books-1835753_640-e1624031207799.png?auto=format%2Ccompress&fit=max&q=70&w=1200.png"
  },
  {
    "id": "mgmt110",
    "name": "MGMT 110",
    "description": "Business Enviornment",
    "location": "Crosby Hall",
    "class_info": [{}],
    "page": "https://www.ncat.edu/cobe/index.php",
    "photo": "https://www.anuntatech.com/blog/wp-content/uploads/2022/12/blog-banner-navigating-today-s-uncertain-business-environment-with-daas.jpg"
  },
  {
    "id": "comp285",
    "name": "COMP 285",
    "description": "Analysis of Algorithms",
    "location": "Martin Complex",
    "class_info": [{}],
    "page": "https://www.ncat.edu/coe/departments/cs/index.php",
    "photo": "https://img-c.udemycdn.com/course/480x270/220192_e0ab_2.jpg"
  },
  {
    "id": "math341",
    "name": "MATH 341",
    "description": "Discrete Mathematics",
    "location": "Marteena Hall",
    "class_info": [{}],
    "page": "https://www.ncat.edu/cost/departments/mathematics/index.php",
    "photo": "https://th-i.thgim.com/public/incoming/9ubnob/article65714750.ece/alternates/LANDSCAPE_1200/08EPBS_MATHS.jpg"
  },
  {
    "id": "chem107.04",
    "name": "CHEM 107",
    "description": "Chemistry",
    "location": "Academic Classroom 112",
    "class_info": "TR -> 8:00am - 9:15am",
    "page": "https://www.ncat.edu/cost/departments/chemistry/index.php",
    "photo": "https://study.com/cimages/course-image/ilts-science-chemistry-test_119059_large.jpg"
  },
  {
    "id": "ecen375.02",
    "name": "ECEN 375",
    "description": "Computer Architecture & Organization",
    "location": "Graham Hall 110",
    "class_info": "MWF -> 1:00pm - 1:50pm",
    "page": "https://www.ncat.edu/coe/departments/ece/index.php",
    "photo": "https://elearning.uok.ac.rw/pluginfile.php/82463/course/overviewfiles/Computer_Arch.d3c5a6a2.jpg"
  }
]

    
module.exports.buildCourses = buildCourses;