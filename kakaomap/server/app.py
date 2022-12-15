from flask import Flask
from db import traffic, parkinglot

app = Flask(__name__)


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


if __name__ == '__main__':
    app.run(debug=True)
