from flask import Blueprint, request, jsonify, request
from flask_cors import cross_origin
from ..models import User
from werkzeug.security import check_password_hash
from ..apiauthhelper import basic_auth_required, token_auth_required, basic_auth, token_auth
from flask_httpauth import HTTPBasicAuth, HTTPTokenAuth

api = Blueprint('api', __name__)


basic_auth = HTTPBasicAuth()
token_auth = HTTPTokenAuth()


@api.route('/api/signup', methods=["POST"])
def signUpAPI():
    data = request.json

    username = data['username']
    email = data['email']
    password = data['password']

    user = User(username, email, password)

    user.saveToDB()

    return {
        'status': 'ok',
        'message': 'User successfully created!'
    }


@api.route('/api/login', methods=["POST"])
@basic_auth.login_required
def getToken():
    user = basic_auth.current_user()
    return {
        'status': 'ok',
        'user': user.to_dict()
    }

