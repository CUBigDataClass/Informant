# Informant

### Team Members

    * Hunter Leise
    * Jose Canizares
    * Tyler Lugger
    * Michael Xiao
    * Vincent Mahathirash

### Informant Summary

A web presence barometer visualizing popular sentiment on top companies.

Informant aggregates social media data and produces a measure on online company sentiment and reputation. In tracking the state in real-time, Informant is able to give a clear picture of 'vox populi' opinions, whether they be spikes or smooth waves. Informant is meant as a stock market assistant tool, but also as an on-going narrative, visually analyzing real-time data into an immediate and concise scroll story.

### Tools Used:
    * Tweepy
    * GNIP
    * Kafka
    * Storm
    * Vader
    * D3
    * React

### Production URLs

> TODO once we have it attached to a URL

### Architecture

> TODO

### Task Cheatsheet

> TODO, will hold anything not directly stated in the below section
   
### Running Informant Locally
    1. 'npm install' (in 'Informant' root directory) - Installs all necessary dependencies.
    2. 'npm install -g babel-cli' - Installs babel-node command globally on your computer
    3. 'babel-node frontEnd.jsx' (in 'build' directory) - Render front-end statically with express
    4. 'node stream.js' (in 'build' directory) - Runs a Twitter stream
