![Static Badge](https://img.shields.io/badge/Wayne%20State%20University-AWS%20Cloud%20Club-yellow)
<br>
![ci](https://github.com/AWS-WSU/Nebula-Link/actions/workflows/ci.yml/badge.svg)
<br>
![Difficulty: Beginner](https://img.shields.io/static/v1?label=difficulty&message=beginner&color=blue)

# <img src="https://cdn-icons-png.flaticon.com/512/8966/8966747.png" width="48" height="52" alt="blue wave icon"/> Welcome to Nebula-Link! 
A cloud-based URL shortening service built by students, using JavaScript and AWS serverless architecture to provide hands-on experience with real-world cloud computing. 
<br>
<br>
If you have been assigned to work on this project, make sure you read the instructions below on how to quickly get started and that you check in with the lead developer(s) on your role.

# Quick Start Guide

## Install Node.js & npm

### Windows
1. Download Node.js installer from [nodejs.org](https://nodejs.org)
2. Run the installer (Next, Next, Finish)
3. Verify by opening Command Prompt or Windows Terminal:
```
node --version
npm --version
```

### Mac
1. Using Homebrew (recommended, [here's how to install Homebrew](https://docs.brew.sh/Installation) if you're interested but otherwise, use alternative steps below):
```bash
brew install node
```
2. Or download from [nodejs.org](https://nodejs.org)
3. Verify in your terminal of choice:
```bash
node --version
npm --version
```

## Project Setup
1. Clone and enter the repository:
```bash
git clone git@github.com:AWS-WSU/Nebula-Link.git
cd Nebula-Link
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

4. Open http://localhost:3000 in your browser of choice to view a [locally deployed ](https://stackoverflow.com/questions/33172791/what-does-the-term-locally-mean-exactly-when-used-in-software)version of the site

That's it! The page should be running locally on your machine. 


# Quick Development Guide
Be sure to have followed the issue template of the issue you're assigned to. But generally..

## When you've finished implementing your changes
Be sure to run...
```bash
npm test
```

If the tests fail, it will be your responsibility to figure out why they failed, and ensure _all_ test cases pass before we merge your pull request.
<br>

If you have any questions on the structure of the project, test cases, or anything regarding the project, forward them to your the lead architect. 