from flask import Flask, request
from json import *
from flask_cors import CORS, cross_origin
from flask_mail import Mail
from pymongo import MongoClient

import os
from slack import WebClient

app = Flask(__name__)
mail = Mail(app)
CORS(app)

slack_token = os.environ["SLACK_API_TOKEN"]
client = WebClient(token=slack_token)
mongoClient = MongoClient("insertMongo ID")

db = mongoClient.business


@app.route('/submit/', methods=['GET', 'POST'])
def submit():

    # This would be a good place to do something with the data you are
    # submitting from the front-end!
    # TODO: Configure Flask Mail with MailTrap

	data = request.json

	result = db.survey_response.insert_one(data)

	print('Added to Database at ' + result.inserted_id)

    msgToOwner = Message('Survey Response', sender='austin@mailtrap.io',
                  recipients=['austin@mailtrap.io'])
    msgToOwner.body = ("A Survey from " + data['firstName'] + " " + data['lastName'] + " was receieved. Email: " + data['email'] +
                " Number of Team Members They Have: " + data['teamMembers'] + " Favorite Source Control: " + data['sourceControl'])
    mail.send(msgToOwner)

    msgToClient = Message('Thank you!', sender='austin@mailtrap.io',
                  recipients=[data['email']])
    msgToClient.body = ("Thank you so much for your response! The following data was sent: \n A Survey from " +
                data['firstName'] + " " + data['lastName'] + " was receieved. \n Email: " + data['email'] + " \n Number of Team Members They Have: " + data['teamMembers'] + " \n Favorite Source Control: " + data['sourceControl'])
    mail.send(msgToClient)

    client.chat_postMessage(
        channel="C0XXXXXX",
        blocks=[
            {
                "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": data['firstName'] + data['lastName'] + " has just filled out your survey:"
                        }
            },
            {
                "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": "Name: " + data['firstName'] + data['lastName'] + "\n" + "Email: " + data['email'] + "\n" + "Team Members: " + data['teamMembers'] + "\n" + "Favorite Source Control: " + data['sourceControl']
                        }
            }
        ]
    )



    return "Survey Received!"
