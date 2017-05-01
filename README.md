# Informant

### Team Members

    * Hunter Leise
    * Jose Canizares
    * Tyler Lugger
    * Michael Xiao
    * Vincent Mahathirash

### Informant Summary

A web presence dashboard visualizing popular sentiment on top companies.

Informant aggregates social media data and produces a measure on online company sentiment and reputation. In tracking the state in real-time, Informant is able to give a clear picture of 'vox populi' opinions, whether they be spikes or smooth waves. Informant is meant as a stock market assistant tool, but also as an on-going narrative, visually analyzing real-time data into an immediate and concise scroll story.

### Tools Used:
    * Twitter Streaming API
    * Kafka
    * Storm
    * Vader & TextBlob
    * D3
    * React

### Production URLs
www.cuinformant.com

### Running Informant Locally
    1. 'npm install' (in 'Informant' root directory) - Installs all necessary dependencies.
    2. 'npm install -g babel-cli' - Installs babel-node command globally on your computer
    3. 'npm run build' - Builds the project for deployment
    3. 'babel-node frontEnd.jsx' (in 'build' directory) - Render front-end statically with express
    4. 'node stream.js' (in 'build' directory) - Runs a Twitter stream
    5. 'bin/zookeeper-server-start.sh config/zookeeper.properties' (in kafka_2.10-0.10.2.0 when you download kafka)
    6. 'bin/kafka-server-start.sh config/server.properties' (in kafka_2.10-0.10.2.0)
    7. 'python streamProducer.py' (in kafka/companyProducers directory)
    8. 'python streamConsumer.py' (in kafka/companyConsumers directory)
    9. 'sparse run (in streamparse/tweetprocessing folder)

### To Run the Whole Setup
    1. node stream.js
    2. bin/zookeeper-server-start.sh config/zookeeper.properties (in kafka_2.10-0.10.2.0 when you download kafka)
    3. bin/kafka-server-start.sh config/server.properties (in kafka_2.10-0.10.2.0)
    4. python streamProducer.py
    5. python streamConsumer.py
    5. sparse run (in streamparse/tweetprocessing folder)
    6. babel-node frontEnd.jsx
