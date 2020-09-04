import datetime
import os
import flask

from flask_cors import CORS
from flask import Flask, Response, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from bson.json_util import dumps, RELAXED_JSON_OPTIONS
from dotenv import load_dotenv
from rnn import Model


# Initializing API
load_dotenv() # .env
app = Flask(__name__, instance_relative_config=True) # Flask
CORS(app)
app.config["MONGO_URI"] = os.environ.get('mongo_uri') # MongoDB
app.config["APPLICATION_ROOT"] = "/api" # Routing
mongo = PyMongo(app)
model = Model('../model/input.txt', '../model/latest') # RNN Model

# Main api endpoint, takes a POST request which requires three
# words for the model to start generating off of. It will return
# a JSON response with what it's generated.
# 
# Form Data:
#   keywords - String of three words separated by spaces
@app.route('/generate', methods=["POST"])
def generate():
    if request.method == "POST":
        # Request data
        keywords = request.form['keywords'].split(" ")

        # Verifying that three keywords have been submitted.
        if(len(keywords) != 3):
            return {
                'status': 'ERROR',
                'message': 'You must enter three keywords separated by a space.'
            }
        else:
            try:
                # Generating via Model
                output = model.generate(keywords)
                
                # Saving result to database
                post = {"keywords": keywords, "output": output, "created": datetime.datetime.utcnow()}
                post_id = mongo.db.data.insert_one(post).inserted_id

                return {
                    'status': 'OK',
                    'result': output,
                    'id': str(post_id)
                }
            except Exception as e:
                return {
                    'status': 'ERROR',
                    'message': str(e)
                }

@app.route('/getData', methods=["GET"])
def getData():
    if request.method == "GET":
        try:
            # Getting query args
            args = request.args
            
            # Validating that id arg exists
            if "id" in args:
                id = args["id"]
                # Getting data from database
                data = mongo.db.data.find_one({"_id": ObjectId(id)})
                formattedData = dumps(data, json_options=RELAXED_JSON_OPTIONS)
                return Response(formattedData, mimetype='application/json')
            else: 
                return {
                    'status': 'ERROR',
                    'message': 'Missing required id parameter.'
                }
        except Exception as e:
            print(str(e))
            return {
                'status': 'ERROR',
                'message': 'Server error occurred, try again later.'
            }

# Handles 404 Errors
@app.errorhandler(404)
def page_not_found(error):
    return 'This page does not exist.', 404

# Starting the server
if __name__ == "__main__":
	print('Initializing Flask API')
	app.run(debug=False, port=5000)