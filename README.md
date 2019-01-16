# The Story

A few blocks from the Solstice office is the [Blommer Chocolate Factory](http://www.blommer.com/).
When the wind direction is just right, the smell of molten chocolate is in the air! This application,
given your current location, will determine if you are downwind of the factory or not.

# Overview
This is a ReactJS application that could be served on the Internet but can also
be run in developer mode locally.
It is meant as a demo application to showcase some ReactJS techniques and practices.

# Dependencies
- nodejs
- downwind service running localhost:8000 (see [Solstice Downwind Service](https://github.com/SolsticeConsulting/solstice-downwindservice))

# TODOs
- break out more of the variables to env variables, etc.

# CONFIGURE AND RUN

configure:

You need to have a google maps api key. You set this on command line like this:
```export REACT_APP_GOOGLE_MAPS_KEY=abc123```

Install dependencies:
```npm install```

Run in development mode:
```npm start```

Build for production
```npm run build```
