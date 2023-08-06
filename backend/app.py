from flask import Flask

app = Flask(__name__)

@app.route("/")
def driver_race_data():
    return "Driver race data"
    
if __name__ == "__main__":
    app.run(debug=True)