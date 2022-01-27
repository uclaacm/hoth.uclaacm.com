import requests
import os

ISSUE_NUMBER = os.environ['ISSUE_NUMBER']

if __name__ == "__main__":
	print('updating announcements...')
	print(f'From issue number: {ISSUE_NUMBER}')

