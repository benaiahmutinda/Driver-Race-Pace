from matplotlib import pyplot as plt


def plot_comparison(driver1, driver2):
  fig, ax = plt.subplots()
  ax.plot(driver1['LapNumber'], driver1['LapTime'], color='blue')
  ax.plot(driver2['LapNumber'], driver2['LapTime'], color='cyan')
  ax.set_title("LEC vs HAM")
  ax.set_xlabel("Lap Number")
  ax.set_ylabel("Lap Time")
  return plt.show()
