import matplotlib.pyplot as plt

# Pie chart, where the slices will be ordered and plotted counter-clockwise:
labels = 'Yes', 'No', 'No opinion'
sizes = [28 , 71, 1]
colors = ['#ff9999','#66b3ff','#99ff99']


fig, ax1 = plt.subplots()

ax1.pie(sizes, labels=labels, colors=colors, autopct='%1.1f%%',
        shadow=False, startangle = 90)

ax1.axis('equal')  
plt.show()