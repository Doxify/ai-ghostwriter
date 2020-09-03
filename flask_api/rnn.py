import tensorflow as tf
from tensorflow.keras import layers
import numpy as np
import collections

class Model:
    def __init__(self, training_file, model_files):
        # Initializing Model
        self.model = None
        self.model_files = model_files
        self.training_file = training_file
        self.dictionary = []
        self.reverse_dictionary = []
        self.training_data = self.read_training_data(self.training_file)
        self.build_dataset(self.training_data)
        self.load_model()

    # Loading the Keras model from file
    def load_model(self):
        self.model = tf.keras.models.load_model(self.model_files)
        print("Successfully loaded model.")

    # Returns the model loaded to file
    def get_model(self):
        return self.model

    # Reads training data from file
    def read_training_data(self, fname):
        with open(fname, encoding="utf-8") as f: # use this for languages with a latin alphabet EVAN
        #with open(fname, encoding="utf16", errors='ignore') as f: # use this for russian, chinese, greek, thai, telugu & arabic EVAN
        #with open(fname, encoding="cp1361", errors='ignore') as f: #use this for korean EVAN DOESN'T WORK
        #with open(fname, encoding="iso8859_6", errors='ignore') as f: #use this for hebrew EVAN DOESN'T WORK
            content = f.readlines()
        content = [x.strip() for x in content]
        content = [word for i in range(len(content)) for word in content[i].split()]
        content = np.array(content)

        print('Successfully loaded training data from file.')
        return content

    # Builds a dictionary or dataset from the training data
    def build_dataset(self, words):
        count = collections.Counter(words).most_common()
        self.dictionary = dict()
        for word, _ in count:
            self.dictionary[word] = len(self.dictionary)
        self.reverse_dictionary = dict(zip(self.dictionary.values(), self.dictionary.keys()))
        print("Successfully built dictionary.")

    # Takes in three words and generates about 32 words.
    def generate(self, words):
        try:
            output = " ".join(words)
            for i in range(32): # How many words should be generated
                words_encoded = np.array([self.dictionary[word] for word in words])
                words_encoded = words_encoded.reshape(1, 3)
                pred_encoded = self.model.predict(words_encoded)
                pred_encoded = np.argmax(pred_encoded)
                pred_decoded = self.reverse_dictionary[pred_encoded]
                output = f"{output} {pred_decoded}"
                words = words[1:] + [pred_decoded]
            return output;
        except Exception as e:
            print(str(e))
        
