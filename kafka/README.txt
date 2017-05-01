Basic Kafka tutorial -> https://kafka.apache.org/quickstart

There are two kafka files that run kafka - runKafka.sh and stopKafka.sh

Put both of these files in the directory where Kafka is located, and run:

./runKafka.sh 

To start kafka, and run:

./stopKafka.sh

To stop the kafka server


To start kafka manually through the kafka source file, go to the kafka directory and follow the steps:

*You may have to run these commands in two seperate terminals

1. Start Zookeeper server
> bin/zookeeper-server-start.sh config/zookeeper.properties

**To make the server run in the background: bin/zookeeper-server-start.sh config/zookeeper.properties &

2. Start Kafka server
> bin/kafka-server-start.sh config/server.properties

**To make the server run in the background: bin/kafka-server-start.sh config/server.properties &

3. You are ready to use kafka! You can now create topics and partition, and have kafka code that produces and consumers messages!

To create a kafka topic:
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor [INSERT REPLICATION FACTOR] --partitions [INSERT PARTITIONS] --topic [NAME OF TOPIC]

EXAMPLE:
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic example

**You need to create a topic for which of the streams
-> Like if we are doing 8 companies, we will need to create 8 topics, one topic for one company from a specific stream
