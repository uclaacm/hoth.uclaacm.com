# Inputs: Github API credentials
# call the github API to get all the comments for a certain issue on the hoth github
# format the data into a json containing the data that we want
# inject the json into a json file

# Extra functionality:
# Check if the current json file is exactly the same json that we want insert
# If it is the same, then return some variable (false) to the github action, (saves build minutes)
# Else, if it's different, then inject and then return another variable (true) to the github action

import requests
import json

user_whitelist = ['jodymlin', 'khxia', 'jakobreinwald', 'christinatong01', 'jamieliu386', 'milesswu', 'TimothyGu', 'Timthetic']
issue_num = '168'

repo_issues = "https://api.github.com/repos/uclaacm/hoth.uclaacm.com/issues"

url = repo_issues + '/' + issue_num + '/' + 'comments'

issue = requests.get(url)

print("Request completed with status code: ", issue.status_code)

issue_json = issue.json()

valid_comments = []

for element in issue_json:
    if(element['user']['login'] in user_whitelist):
        comment = {'username': element['user']['login'], 'body': element['body'], 'created_at': element['created_at']}
        valid_comments.append(comment)

filename = 'src/data/json/issue' + issue_num + '_comments.json'

json_string = json.dumps(valid_comments)
with open(filename, 'w') as f:
    f.write(json_string)

print("Finished.")

