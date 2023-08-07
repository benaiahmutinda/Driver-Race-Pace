from fastf1.ergast import Ergast

def get_year_dropdown_options():
    years = [year for year in range(2023, 1949, -1)]
    return years

def get_races_dropdown_options(season):
    ergast = Ergast()
    race_results = ergast.get_race_results(season=season, result_type='raw')
    races = []
    for race in race_results:
        races.append(race['raceName'])
    return races
    ...