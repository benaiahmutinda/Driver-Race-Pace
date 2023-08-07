from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

sample_options = ["Option 1", "Option 2", "Option 3"]
CORS(app)

@app.route("/year-dropdown-options")
def driver_race_data():
    return jsonify(sample_options)
    
if __name__ == "__main__":
    app.run(debug=True)