import flask
from flask import Flask, request

from rnn import Model

# Creating Flask app
app = Flask(__name__)
# Loading the model
model = Model('../model/input.txt', '../model/latest')

# Error handling
@app.errorhandler(404)
def page_not_found(error):
    return 'This page does not exist.', 404

# Main api endpoint, takes a POST request which requires three
# words for the model to start generating off of. It will return
# a JSON response with what it's generated.
# 
# Form Data:
#   keywords - String of three words separated by spaces
@app.route('/generate', methods=["POST"])
def generate():
    if flask.request.method == "POST":
        # Request data
        keywords = request.form['keywords'].split(" ")

        # Verifying that three keywords have been submitted.
        if(len(keywords) != 3):
            return {
                'status': 'ERROR',
                'message': 'You must enter three keywords separated by a space.'
            }

        # Detected three keywords, using the Model
        try:
            output = model.generate(keywords)
            return {
                'status': 'OK',
                'keywords': request.form['keywords'],
                'result': output
            }
        except Exception as e:
            print(str(e))
            return {
                'status': 'ERROR',
                'message': 'Those keywords are not in the dictionary, try again.'
            }



# Starting the server
if __name__ == "__main__":
	print('Loading API...')
	app.run(debug=False, port=5000)