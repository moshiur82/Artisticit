from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
from bson import ObjectId  # এখনো রাখছি ID জেনারেটের জন্য, কিন্তু ব্যবহার করবো না
import os
from dotenv import load_dotenv
# Stripe এবং MongoDB import সরিয়ে দিলাম – এখন মক

load_dotenv()
app = Flask(__name__)
CORS(app)  # React থেকে API কল করার জন্য

# ইন-মেমরি ডাটাবেস (লিস্ট) – MongoDB-এর বদলে
projects = []  # প্রজেক্ট লিস্ট

# মক Stripe কী (ফেক, কোনো রিয়েল কী লাগবে না)
STRIPE_SECRET_KEY = os.getenv('STRIPE_SECRET_KEY', 'mock_key')

@app.route('/api/projects', methods=['POST'])
def create_project():
    data = request.json
    project = {
        'id': str(ObjectId()),  # ফেক ID জেনারেট
        'client_name': data['client_name'],
        'project_details': data['project_details'],
        'type': data.get('type', 'web_dev'),  # 'web_dev' বা 'logo'
        'payment_status': 'pending',
        'created_at': datetime.now()
    }
    projects.append(project)  # লিস্টে অ্যাড করো
    return jsonify({'id': project['id'], 'message': 'প্রজেক্ট তৈরি হয়েছে! ৭-১৫ দিনের মধ্যে কাজ ডেলিভারি পাবেন।'})

@app.route('/api/payment', methods=['POST'])
def process_payment():
    data = request.json
    try:
        # মক পেমেন্ট: সিম্পলি স্ট্যাটাস আপডেট করো, কোনো রিয়েল Stripe কল নেই
        for proj in projects:
            if proj['id'] == data['project_id']:
                proj['payment_status'] = 'paid'
                return jsonify({'client_secret': 'mock_secret', 'message': 'পেমেন্ট সাকসেস! কাজ শুরু হয়েছে।'})
        return jsonify({'error': 'প্রজেক্ট খুঁজে পাওয়া যায়নি'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400

# একটা সিম্পল GET রুট যোগ করলাম টেস্টের জন্য – সব প্রজেক্ট দেখার জন্য
@app.route('/api/projects', methods=['GET'])
def get_projects():
    return jsonify(projects)

if __name__ == '__main__':
    app.run(debug=True, port=5000)