from textblob import TextBlob


testTweet1 = "IM GOING TO FUCKING KMS THIS @UBER DRIVER SO FUCKING TRASH"
text1 = TextBlob(testTweet1)

testTweet2 = "I WAS NEARLY MURDERED BY AN @Uber DRIVER AS SHE TRIED TO RUN A RED LIGHT AND THEN ABRUPTLY STOPPED DIAGONALLY IN THE MIDDLE OF THE ROAD"
text2 = TextBlob(testTweet2)


print("First tweet sentiment: ")
print(text1.sentiment)

print("\nSecond tweet sentiment: ")
print(text2.sentiment)

