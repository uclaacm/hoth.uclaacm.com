# Initial function:
# Inputs: Github API credentials (not using for now)
# call the github API to get all the comments for a certain issue on the hoth github
# format the data into a json containing the data that we want
# inject the json into a json file

import requests
import json
import sys
import os

# User whitelist and issue number we are looking for
user_whitelist = ['jodymlin', 'khxia', 'jakobreinwald', 'christinatong01', 'milesswu', 'EinarBalan', 'danielhzhou']
# HOTH repository issues accessed via Github API
repo_issues = "https://api.github.com/repos/uclaacm/hoth.uclaacm.com/issues"

issue_num = '469'

url = repo_issues + '/' + issue_num + '/' + 'comments'

# Get given issue
try:
    announcements = requests.get(url)
except requests.exceptions.RequestException as e:
    raise SystemExit(e)
print("Request completed with status code: ", announcements.status_code)

# Decode json to Python dictionary for parsing
try:
    announcements_json = announcements.json()
except requests.exceptions.JSONDecodeError as e:
    raise SystemExit(e)
valid_comments = []

# Keep track of every comment from valid usernames
for index, element in enumerate(announcements_json):
    if element['user']['login'] in user_whitelist:
        body = element['body']
        # If there is no partition, subject will contain the entire string
        subject, partition, comment = body.partition('(Subject)')
        comment = {'id': index, 'subject': subject.strip(), 'body': comment.strip(), 'timestamp': element['created_at']}
        valid_comments.append(comment)

# Insert all valid comment json objects into a file in reverse order
filename = 'src/data/announcements.json'
json_string = json.dumps(valid_comments[::-1], indent=4)
try:
    with open(filename, 'w') as f:
        f.write(json_string)
except EnvironmentError:
    print("Error opening/writing to file. ")

print("Finished.")