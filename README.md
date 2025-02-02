There are lot of things or code written to make the code production ready app. Need optimization for this packages come.it means there is already somenthing written to make our app faster.

We install package through NPM which is package manager. NPM full form is not Node Package Manager. It is biggest package manager. Anu package you need in your application you need NPM. All the libraries, utils you need come from NPM. When you alredy done create react app it already have npm in in it.

<!-- Lec - 2 -->
But we will see how we create react application through NPM just to know what they had did in create react app sp that it is production ready code

# What is this package.json
-> It have all the configuration of hour NPM. It manages our packages.
-> Package is also know as dependencies. 
-> it have the data of the packages version.

# The most important package in out project is bundler
-> What is bundler
-> When you write code its not a production ready. We need to delect the comments and all and need to compress the code for production. so all these thibngs are done with the help of buildler. Buindler conpress things 

-> React or create-react-app itself use web pack bundler
-> web-pack, parcel, weat

> Dev dependency - used in deplopemt phase also
> Normal dependency - used in production also | npm install -D parcel

"^2.13.3" - ^ callled caret it auto update the version when its came.

package-lock.json -  keeps the record of every version which has been install

# Transitive Dependency
package depended on the another. dependencies has its own dependencies.

# In one project how many depencendy are there
- we use parcel package to optimize our code. 

# npx parcel index.html
- just by writing this commant it created a server for us and you can use localhost:1234 which auto created our server.

# NPM Vs NPX
- NPM just installed the packages but the NPX, it executes the packages.

# Ways to implement react into our application
- Via CDN
- Via NPM

- CDN is not a good way to make the application because 1. it does the api call then it will execute the code but when we have react in out application via NPM it onlys uses the React packages form here only - Time taking is very less
- If React version is upgraded then everytime we have to come to our project and keeps on changing the CDN links but via NPM it automatically upgraded the NPM version.

# Parcel Work
- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimizarion
- Minification
- Bundling
- Compress
- Consistent Hashing
- Differential Bundling - support older browser
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# npx parcel build index.html

- The dist folder is used to render the code to server.
- The dist folder is created when we run npx parcel index.html which takes very less time some miliseconds
- For making production build, command used - npx parcel build index.html which makes dist folder ready for production it takes a little more time then dev build

# dist and .parcel-cache folder
- Whether we have to put these folder in gitignore
- Yes, because these are automatically created while writing commant npx parcel index.html

# browserlist 
- browserlist.dev
- in node_models there is some packege known as browser list it contain browserlist - there in package.json, create an object named browserlist where define all the browsers on which you want that youe application should be hosted.


