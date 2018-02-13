# Fraggle Rockers

American Museum of Natural History

Hack the Deep

February 9th-11th, 2018

Virtual Fossil Fragmenter Team

Sean McGuffee, Sophia van Valkenburg, Teodora Szasz, and Luis Ibanez

# Fragmenter UI Tool

## How to Build & Run
1. Clone this repo
2. Run a local server using the root of this project
   * [`http-server`](https://www.npmjs.com/package/http-server) is an easy-to-use local server
   * Install using npm: `$ npm install -g http-server`
   * On the command line, `cd` to the root of this project.
   * Run using `$ http-server . ` (optional argument `-p <port>` is port number. default is 8080.)
3. Open `localhost:8080` to view 3D model fragments
4. Make sure you have downloaded the [.stl model files](http://www.morphosource.org/Detail/ProjectDetail/Show/project_id/447) and placed them in a `models` directory in the project root

## Instructions for Use
* The models may take a few seconds to load since they have high polygon count (very detailed)
* `Automate Save Image` will autogenerate 5 fragments and provide a download link for each
* `Save Image` is a download link for the currently displayed fragment
* `Refresh Current Model` button to change the rotation and fragmentation of the current model
* A dropdown lists the models available for fragmentation

## Future Improvements
* Autogenerate more than 5 fragments. Possibly allow the user to specify how many fragments they want to generate, and specify for which models. Download zip file instead of individual images.
* Use a better fragmentation algorithm (currently it just uses clipping planes). [Voronoi Shattering?](https://www.joesfer.com/?p=60) Ideally it would fragment the fossils in a more "realistic" way, like breaking off at "weak" points.
* Ability to upload model (if we want them to be persistent across sessions, would need to use storage e.g. Amazon S3)
* Is a web application really the best format for the tool? Could a desktop application be better?
  * Web application advantages: Easy to use by multiple people, cross-platform portability, easy to maintain, less complicated setup
  * Desktop application advantages: More powerful & faster capabilities, don't have to deal with uploading or downloading models
* Look into VTK for solutions to this problem: https://www.vtk.org/modeling/
