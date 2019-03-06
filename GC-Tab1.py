import matplotlib.pyplot as plt

# Pie chart, where the slices will be ordered and plotted counter-clockwise:
labels = 'Yes', 'No', 'No opinion'
sizes = [28 , 71, 1]

fig1, ax1 = plt.subplots()
ax1.pie(sizes, labels=labels, autopct='%1.1f%%',
        shadow=False, startangle=90)

# Equal aspect ratio ensures that pie is drawn as a circle.
ax1.axis('equal') 

plt.show()