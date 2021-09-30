# CodeBox

You’ve just created a brand new company, CodeBox! Way to go! You’ve decided that while you work on the beefy parts of your new web application, you will set up a landing page to collect information from visitors. You then hope to use this information to better inform your decision-making as you move forward in building your company.

Your task is to build this landing page, using whatever languages and frameworks you are most comfortable with. We encourage you to time box this project to **1 hour or less**, and submit whatever you have at the end. We’ve broken it up into two parts for you. You may choose to bounce around between the two if you’d like, or simply complete it one section at a time.

Before you get started, you may be wondering what information do we want to collect from the users on our landing page?

We want to collect:

* Their name
* Their email
* Their favorite source control tool: Github, Gitlab, BitBucket, TFS, or “Other.”
* How many people work on their team?

## 1. Start with the back-end API

First, build an API server that accepts a payload with customer information, as outlined above. Again, you may use whatever technology choice you’d like.

When the payload has been collected, the back-end needs to communicate the data to you. Your co-founders haven’t decided how they want to track the information yet, so your back-end should do any combination of the following:

1. Email it to you, the founder
2. Send it to your Slack workspace
3. Stash the information in a database

The API should also send an email to the customer, thanking them for their interest.

## 2. Work on the front-end

Once you have an API to send data to, you’ll want to turn your attention to a front-end to collect the user input. Your co-founders are heavily inspired by TypeForm, and love the approach of asking one question at a time. Design a user interface to ask the questions, construct a payload, and send it to your API server.

# Submission instructions

We are excited to see what you develop! Please send us your code as a Github repo or as a ZIP file to interview@testbox.com a day before your interview. We will look at it together in your upcoming technical interview. Thank you for your time, and we’re looking forward to speaking with you!
