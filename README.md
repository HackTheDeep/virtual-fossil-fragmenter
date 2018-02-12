# Fraggle Rockers

American Museum of Natural History

Hack the Deep

February 9th-11th, 2018

Virtual Fossile Fragmenter Team

Sean McGuffee, Sophia van Valkenburg, Teodora Szasz, and Luis Ibanez

# How to Build / Run Tool

1. Clone this repo
2. Run a local server using the root of this project
   * [`http-server`](https://www.npmjs.com/package/http-server) is an easy-to-use local server
   * Install using npm: `$ npm install -g http-server`
   * On the command line, `cd` to the root of this project.
   * Run using `$ http-server . ` (optional argument `-p <port>` is port number. default is 8080.)
3. Open `localhost:8080` to view 3D model fragments
4. Make sure you have downloaded the [.stl model files](http://www.morphosource.org/Detail/ProjectDetail/Show/project_id/447) and placed them in a `models` directory in the project root

# Instructions for Use
* The models may take a few seconds to load since they have high polygon count (very detailed)
* `Automate Save Image` will autogenerate 5 fragments and provide a download link for each
* `Save Image` is a download link for the currently displayed fragment
* `Refresh Current Model` button to change the rotation and fragmentation of the current model
* A dropdown lists the models available for fragmentation


