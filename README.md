# Campsite Finder Happy Camper

## Description
This website was created to help those who share as much love for camping and the great outdoors as we do. When planning a camping trip it can become a hassle to find other campgrounds within the area individually. Our site makes it easy for users to view and reserve websites in one. Not sure if the selected campsite is right for you? Just look to see what others have to say about it! This website also allows users to read reviews of campgrounds other users have visited. If you've visited a campground that you found through our website, you can even write a review of your own! If you wish to find a campsite within your area, our website has also contains a map that will pull all local campgrounds. Happy Camping!!

## Contributors
Bhuvaneswari630
Tmcomaniciu
LaneyS05
Timryan10

## Demo
Home Screen:
![Home Screen](/frontend/src/pics/home-screen.png)
Map:
![Map Screen](/frontend/src/pics/map-sceen.png)

### Technologies

bcryptjs
cloudinary
cookie-parser
cors
dotenv,
express
express-validator
jsonwebtoken
mongodb
mongoose
multer
@testing-library/jest-dom
@testing-library/react
@testing-library/user-event
bootstrap
leaflet
react
react-bootstrap
react-datepicker
react-dom
react-hook-form
react-icons
react-leaflet
react-query
react-router-dom
react-scripts
react-slick
web-vitals
### Technical Information

To get this application up and running please follow the steps below started:
    *fork the repo
    *git clone git hub link here
    *cd into repo and start app
At this point you should have th code for the application pulled up. From here, "cd" into the backend and install the following dependencies:
    *bcryptjs
    *cloudinary
    *cookie-parser
    *cors
    *dotenv
    *express
    *express-validator
    *jsonwebtoken
    *mongodb
    *mongoose
    *multer

With the backend set up, it's now time to get started on the front end. "Cd" into the frontend now and install these dependencies:
    *@testing-library/jest-dom
    *@testing-library/react
    *@testing-library/user-event
    *bootstrap
    *leaflet
    *react
    *react-bootstrap
    *react-datepicker
    *react-dom
    *react-hook-form
    *react-icons
    *react-leaflet
    *react-query
    *react-router-dom
    *react-scripts
    *react-slick
    *web-vitals

With all of the required dependencies installed, it is now time to start the app. To start the backend of the application, "cd" into the backend again and use the command "npm run dev". In a seperate terminal, "cd" into the front end and use "npm start".

### Issues

Since this was our first project working as a group, there was some trouble laying out the foundation for the backend of this project. Due to this, the page to display campsites and reviews currently does not work. Our final submission was completed on a different repo with a fixed backend. We also wish to add a section of the website in which users could reserve campgrounds for the amount of days they wish to attend but were unable to do so due to time constraints. 

## API Documentation

An api was used for this application to allow us to set up the map. When the user enters the page for the map, a request is made from the site to retrieve the location of the user. If allowed, the application will use the api key given by "foursquare" to retrieve campgrounds within the area. The api will return json data of each of the campgrounds within the area. Once the information is received, the application will parse through the json data and retrieve the coordinates for these campgrounds. The locations of these campgrounds are then displayed on the map for the user to see. 

## CHANGELOG.md

When committing to this project, we ask that you please log all commits into the "CHANGELOG.md" file. This can be done automattically by running the following command after a commmit has been made: 
    *git log --pretty="- %s" > CHANGELOG.md