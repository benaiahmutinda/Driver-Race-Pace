import fastf1

def get_race_data():
  race = fastf1.get_session(2021, 'Brazilian Grand Prix', 'R')
  race.load()