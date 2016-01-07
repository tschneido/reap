# REAP
## Local Setup (Mac Only)
### Homebrew

Homebrew is a package manager for your mac. Makes installations painless. "Homebrew installs the stuff you need that Apple didn’t." You'll need this to install node. To install homebrew, open up Terminal on your mac and paste in the following code:
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
To check if homebrew successfully installed. Type in `brew --version` or `brew -v`

For full reference, go [here](http://brew.sh/)

### Node.js

Node.js is a [runtime system](https://en.wikipedia.org/wiki/Runtime_system) layered on top of [V8](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)). Applications are written in Javascript. Our instance of elastic beanstalk on aws uses node 4.2, so that's the version we'll be installing. We'll install node 4.2 via homebrew. Open up terminal and type in:
```
brew install homebrew/versions/node4-lts
```
To check if this has been installed, type in node -v and you should get the version number.

Ideally you would just type in `brew install node`, but I believe it will install version 5.3. Potentially probablamtic if application library versions are compatible with version 5.3 but not 4.2. This would result in another armageddon.

### NPM

NPM = Node Package Manager. This should be included with the node installation. 

Every node application has a `package.json` file at its root. This contains all dependecies of the application. You will need to install these depdendencies locally by typing:
```
npm install
```
This will create a folder called node_modules with dependencies grouped in folders. 

Just an FYI `/node_modules` is contained in the `.gitignore` file (i.e what are the files that we want to ignore when pushing to a remote repository. Thousands of files are contained with the `/node_modules` folder and it would be terribly inefficient and prone to error to sync these files across multiple machines).

### Git
Version control system. We're using github to store the code. You can probably install git through `brew install git`, but I think it's easiest to use git via the github mac app, which will also install git for you in the process. Download it [here](https://desktop.github.com/).

####Thoughts on the github mac app
Recently updated and works well. Here are the over simplified steps to get up and running after finishing the installion:
1. Clone - hit that plus sign on the top left, select clone, and save the repo to your computer
2. Make code changes - open [your favorite text editor](https://www.sublimetext.com/) and go crazy
3. Click on the "No Uncommitted Changes" tab at the top
4. Commit - type in a description and click on "Commit to master". This commits locally. 
5. Create a Pull Request (PR) - tell a branch or your choice that you want to give them changes.

### AWS CLI (Optional)
### EB AWS CLI (Optional)
## AWS Setup (Skip if you don't care)
### CodeCommit
We're not using this but here for informational purposes.
### Elastic Beanstalk
## Getting REAP Up & Running
1. Go to the [github project](https://github.com/oaklandsystems/reap) and click on fork on the top right to your own account, then follow the steps in the section "Thoughts on the github mac app". 
2. Open up terminal and `cd` into the root of the location where you saved the forked version of reap. Type in `ls` to confirm and you should see a similar file structure:
```
bin/
public/
routes/
views/
app.js
package.json
readme.md
```
3. Once in the root, type in `npm install` (assuming you have npm installed based on the directions above)
4. To run the application after the install, type in `npm start` and visit your browser at `localhost:3000`
## Other
### Markdown
Markdown simplifies text markup. Anything ending in `.md` stands for markdown (e.g. this README). To learn about it, this is a [great tutorial](http://markdowntutorial.com/).