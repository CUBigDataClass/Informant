Basic Kafka tutorial -> https://kafka.apache.org/quickstart

To start kafka through the kafka source file, go to the kafka directory and follow the steps:

*You may have to run these commands in two seperate terminals

1. Start Zookeeper server
> bin/zookeeper-server-start.sh config/zookeeper,properties

2. Start Kafka server
> bin/kafka-server-start.sh config/server.properties

3. You are ready to use kafka! You can now create topics and partition, and have kafka code that produces and consumers messages!

To create a kafka topic:
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor [INSERT REPLICATION FACTOR] --partitions [INSERT PARTITIONS] --topic [NAME OF TOPIC]
