# ByuTestProject
Get Movies from an external API

----------------------------------------------------------------------------
Download Dependencies		 					                                         
----------------------------------------------------------------------------
1) After downloading all files and folders run "npm install" in your
command shall to download all npm packages.

----------------------------------------------------------------------------
Running the App		 					                                               
----------------------------------------------------------------------------
1) After downloading all packages. 
2) Navigate to the webservice folder in your command shell (e.g. GitBash)
3) Type node index.js to start up the server. 

4) Navigate to the webapp folder. 
5) Double-click index.html and open the file in your web browser
6) Search for a movie title or other keyword 
7) Click search or hit enter to get the movie results. 

----------------------------------------------------------------------------
Improvements to be made		 					                                       
----------------------------------------------------------------------------
1) Handle errors. Right now there is no testing for incorrect values entered. 
Would implement try catch to handle any invalid inputs. 

2) Page responsiveness. The webpage does not resize well and only looks good 
on desktop full screen. Would use bootstrap or other library to make the webpage 
more responsive to resizing. 

3) Build the search results in vue.js. Only the search page uses vue.js, the results page is 
rendered using ejs templates for dynamic rendering. I did my to try and learn vue.js, but learning a 
new framework took up the remaining time I had left on the project. 
The search results are not in view. However I can see the advantage of using vue.js or React 
with their data-binding to make the page more responsive and dynamic. 

4) Resize cards that don't have pictures. When I card does not have a picture it still takes up a lot of 
empty space. Given more time I would make it so cards that don't have pictures would take up less vertical
space. 






