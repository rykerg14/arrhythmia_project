# Frontend Documentation

This folder contains all the source code and documentation needed to run and develop the frontend of the WSU arrhythmia project.

## How to build and run

Navigate to this directory inside of your terminal and run

### `npm install`

This will install of the npm modules that are listed as dependencies inside the package-lock.json file. Depending on download speed, this should take about 2-3 minutes.

To run the frontend locally, run 

### `npm run`

After a few seconds, a tab will be automatically opened on your browser. If you are not automatically redirected, you can view the frontend at http://localhost:3000.

You will recieve errors when trying to query/display data if the backend is not also running locally on your machine. To properly run the frontend, see the documentation for the backend and make sure that the Django server is running in the background as well.

## How to Use

Once the web page has loaded, the dashboard will be present with a dropdown menu containing all avaliable data records that users can view. Select a patient number and click the submit button.

After a few seconds of loading, two graphs will appear containing the two distinct leads for the patient (names of graphs are hard coded to say MLII and V5, although actual data may be from different leads). These graphs display data in 1-minute intervals, and the whole 30 minutes can be traversed using the "Load Next" and "Load Previous" buttons located between the two graphs.

You can also jump to a specific time slice by using the two text fields above the charts, but will still only see data in 1-minute intervals.

The orange lines are annotations that are generated by Tyler Petty's machine learning model. The green data points are the actual annotations that were provided with the MIT arrhythmia data.

The "Current Patients" tab contains a small table with cursory information about each patient currently inside the database.

The "Upload new data" tab is where you can insert more patient records, with instructions on how to complete this on the page itself.

## Contents

public - Contains the root html page, pngs and icons for the project, and some default project settings.
src - Contains React components, js/css files. This is where a lot of the development happens.
.gitignore - source control file unique to Git. Files ignored are npm modules, error logs and Mac OS specific files.
Dockerfile - Contains instructions that containerizes the frontend src and runs it using Docker.
package-lock.json - A list of all npm dependencies 
package.json - A list of npm dependencies
yarn.lock - Auto-generated file used to build the program. Do not edit this file

## Other helpful resources

Apollo Documentation - https://www.apollographql.com/docs/
Apollo is an implementation of the GraphQL specification. Apollo is designed to work exclusively with React and is how the frontend queries data from the Django/Postgres backend. The endpoints are defined inside of index.js

React Documentation (Getting started) - https://reactjs.org/docs/getting-started.html
React is the javascript library that dynamically renders html elements for the frontend. All of the react components are located in src/components.

CanvasJS Stock Chart - https://canvasjs.com/docs/stockcharts/basics-of-creating-html5-stockchart/
CanavsJS is the library that is used to visualize the data. The specific chart used is a Stock chart, which includes a slider at the bottom of the chart for easy navigation and visialization of the data. The library is imported under chart.js, and chart.js is used inside of default display. 