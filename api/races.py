from fastf1 import plotting
from matplotlib import pyplot as plt
from ..core.races import get_race_data


plotting.setup_mpl()

race = get_race_data()

ham = race.laps.pick_driver('HAM')
ver = race.laps.pick_driver('VER')