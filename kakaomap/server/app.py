from flask import Flask
from db import traffic, parkinglot, daejeon
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    return 'Hello, World!'


@app.route('/daejeon')
def daejeon():
    data = traffic()
    return data


@app.route('/parkinglot')
def parking():
    data = parkinglot()
    return data


@app.route('/accident')
def all_accident():
    data = daejeon()
    return data


if __name__ == '__main__':
    app.run(debug=True)
