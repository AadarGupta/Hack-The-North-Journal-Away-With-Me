from flask import Flask, jsonify, request, flash, render_template
import json
from flask_marshmallow import Marshmallow
import sqlalchemy

from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
import sqlalchemy.orm
from cockroachdb.sqlalchemy import run_transaction


app = Flask(__name__)
app.config.from_pyfile('app.cfg')
db = SQLAlchemy(app)
sessionmaker = sqlalchemy.orm.sessionmaker(db.engine)


class JournalEntry(db.Model):
    __tablename__ = 'journal'
    id = db.Column('id', db.Integer, primary_key=True)
    email = db.Column(db.String)
    title = db.Column(db.String(60))
    text = db.Column(db.String)
    date = db.Column(db.DateTime)

    def __init__(self, email, title, text):
        self.email = email
        self.title = title
        self.text = text
        self.date = datetime.utcnow()

    def to_dict(self):
        return json.dumps({"id": self.id, "email": self.email, "title": self.title, "text": self.text, "date": str(self.date)})

class Account(db.Model):
    __tablename__ = 'account'
    email = db.Column(db.String, primary_key=True)
    firstname = db.Column(db.String)
    lastname = db.Column(db.String)
    password = db.Column(db.String)

    def __init__(self, email, firstName, lastName, password):
        self.email = email
        self.firstname = firstName
        self.lastname = lastName
        self.password = password

    def to_dict(self):
        return json.dumps({"email": self.email, "firstname": self.firstname, "lastname": self.lastname, "password": self.password})
        
@app.route('/')
def home():
   return render_template('index.html')

#for signup and getting all accounts
@app.route('/api/account', methods=['POST', 'GET'])
def account():
    if request.method == 'GET':
        values = []
        def callback(session):
            temp = session.query(Account).all()
            values.extend([obj.to_dict() for obj in temp])
        run_transaction(sessionmaker, callback)
        return {'values': values}
    else:
        def callback(session):
            entry = Account(request.get_json()['email'], request.get_json()['firstname'], request.get_json()['lastname'], request.get_json()['password'])
            session.add(entry)
        run_transaction(sessionmaker, callback)

        return str(request.get_json())

@app.route('/api/login') #must be a get request to login
def login():
    user = ""
    def callback(session):
        user = session.query(Account).filter(request.get_json()['email'] == Account.email and request.get_json()['password'] == Account.password)
    if user == "":
        return "User or password is incorrect"
    else:
        return user[0]

@app.route('/api/journal', methods=['GET', 'POST'])
def journal_entries():
    if request.method == 'GET':
        values = []
        def callback(session):
            temp = session.query(JournalEntry).all()
            values.extend([obj.to_dict() for obj in temp])
        run_transaction(sessionmaker, callback)
        return {"values": values}
    else:
        def callback(session):
            entry = JournalEntry(request.get_json()['email'], request.get_json()['title'], request.get_json()['text'])
            session.add(entry)
        run_transaction(sessionmaker, callback)

        return str(request.get_json())

if __name__ == '__main__':
    app.run()