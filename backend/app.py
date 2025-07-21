from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
from bot import  chat
import json


app = Flask(__name__)
CORS(app)


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.newdb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(100), nullable=False, unique=False)
    monthlyIncome = db.Column(db.Integer, nullable=False)
    monthlyExpense = db.Column(db.Integer, nullable=False)
    investmentHorizon = db.Column(db.Integer, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    financialGoal = db.Column(db.String(200), nullable=False)
    riskAppetite = db.Column(db.String(50), nullable=False, default='Medium')
    

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "monthlyIncome": self.monthlyIncome,
            "monthlyExpense": self.monthlyExpense,
            "investmentHorizon": self.investmentHorizon,
            "financialGoal": self.financialGoal,
            "riskAppetite": self.riskAppetite
        }
        
    def set_password(self, password_plain):
        self.password = generate_password_hash(password_plain)
        
    def check_password(self, password_plain):
        return check_password_hash(self.password, password_plain)
        
with app.app_context():
    db.create_all()
    
    
@app.route('/create', methods=['POST'])
def create_user():
    print("Received request to create user")
    data = request.get_json()
    print(f"Request data: {data}")
    name = data.get('name')
    email = data.get('email')
    income = int(data.get('monthlyIncome'))
    expense = int(data.get('monthlyExpenses'))
    horizon = int(data.get('investmentHorizon'))
    password = data.get('password')
    goal = data.get('financialGoal')
    risk = data.get('riskAppetite')
    

    if not all([name, email, income, horizon, password, goal, risk, expense]):
        print("Missing fields in the request")
        return jsonify({'error': 'All fields are required'}), 400

    if User.query.filter((User.email == email)).first():
        return jsonify({'error': 'User already exists'}), 409

    user = User(
        name=name,
        email=email,
        monthlyIncome=income,
        investmentHorizon=horizon,
        financialGoal=goal,
        monthlyExpense=expense,
        riskAppetite=risk
        
    )
    user.set_password(password)

    db.session.add(user)
    db.session.commit()

    return jsonify({'message': 'User created'}), 201

@app.route('/user/<email>', methods=['POST'])
def get_user(email):
    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({'error': 'User not found'}), 404
    return jsonify(user.to_dict()), 200


    
    
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({'error': 'User not found'}), 404    
    if not user.check_password(password):
        return jsonify({'error': 'Invalid password'}), 401
    
    return jsonify(user.to_dict()), 200

    
@app.route('/chat', methods=['POST'])
def bot():
    data = request.get_json()
    userData = json.dumps(data.get('userData'))
    marketJson = json.dumps(data.get('marketData'))
    chat_response = chat(userData, marketJson, data.get('input'))

    return jsonify({"message" : chat_response.content}), 200
