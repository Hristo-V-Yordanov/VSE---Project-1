from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from password import epassword

app = Flask(__name__)

# Configurations for Gmail SMTP
SMTP_SERVER = 'smtp.gmail.com'
SMTP_PORT = 587  # For starttls
SMTP_USERNAME = 'koalabuy.elsys@gmail.com'
SMTP_PASSWORD = epassword
SENDER_EMAIL = 'koalabuy.elsys@gmail.com'
SUBJECT = 'Thank you for your purchase'

@app.route('/send-email', methods=['POST'])
def send_email():
    email = request.form.get('email')
    if not email:
        return jsonify({"error": "Email is required"}), 400
    
    # Send email
    try:
        msg = MIMEMultipart()
        msg['From'] = SENDER_EMAIL
        msg['To'] = email
        msg['Subject'] = SUBJECT

        body = 'You have successfully bought an item from KoalaBuy!'
        msg.attach(MIMEText(body, 'plain'))

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USERNAME, SMTP_PASSWORD)
            server.sendmail(SENDER_EMAIL, email, msg.as_string())
        
        return jsonify({"message": "Email sent successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)