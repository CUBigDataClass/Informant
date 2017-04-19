
from kafka import KafkaProducer
from socketIO_client import SocketIO

#producer = KafkaProducer(bootstrap_servers='localhost:9092',value_serializer=lambda v json.dumps(v).encode('utf-8'))
producer = KafkaProducer(bootstrap_servers='localhost:9092',value_serializer=lambda v: json.dumps(v).encode('utf-8'))

class tweetHandler(object):
	def __init__(self):
     		socketIO = SocketIO('localhost', 4000)
     		socketIO.on('tweet', self.on_tweet)
     		socketIO.wait()

	def on_tweet(self,*args):
	     tweet = args[0]
	     print tweet
	     if tweet != None:
	     	producer.send('streamJS',tweet)
	        print "SENT"

tweetHandler()

#Run stream.js in one terminal : node stream.js
#
