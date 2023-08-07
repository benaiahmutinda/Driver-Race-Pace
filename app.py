from flask import Flask, jsonify, request
from flask_cors import CORS
from backend.core.dropdown_options import get_year_dropdown_options, get_races_dropdown_options

app = Flask(__name__)

CORS(app)

@app.route("/year-dropdown-options")
def year_dropdown_options():
    year_options = get_year_dropdown_options()
    return jsonify(year_options)

@app.route("/race-dropdown-options")
def race_dropdown_options():
    season = request.args.get("season")  # Get the 'season' parameter from the query string
    if season is None:
        return jsonify({"error": "Missing 'season' parameter"}), 400

    race_options = get_races_dropdown_options(season)
    return jsonify(race_options)
    
if __name__ == "__main__":
    app.run(debug=True)