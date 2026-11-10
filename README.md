# Project Overview

This is a CI/CD application that retrieves weather data for London using an open-source weather API. 
The UI allows users to view current weather conditions and explore weather information over time with the 
weather conditions. Matplotlib is used to create data visualisations and JavaScript to support the application's functionality and interactivity.
Git Actions is used to automate the software workflows within the repository so that the CSV file is automatically updated with the latest weather data and it is reflected in the UI of the application.
This demonstrates the use of CI/CD (continuous integration and continuous deployment) in applications/software as it helps to automate processes and improve the efficiency.

# Technologies Used

- **JavaScript** – Adds functionality and interactivity to the application.
- **Matplotlib** – Creates temperature vs time graphs to visualise weather data.
- **GitHub Actions** – Used for version control and managing the project.

# Graph Visualisation

This application uses Matplotlib to create a graph displaying temperature changes over time.

- **X-axis:** Time
- **Y-axis:** Temperature (°C)

# Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/kimlxnh/weather_dataOps
   ```
2. Navigate into the project folder:
   ```bash
   cd weather_dataOps
   ```
3. Install the required dependencies.
   ``` npm i```
5. Start the application

OR run the Docker image file 
**to be added**

# Future Features
Some potential improvements for the application include:

- **Weather forecasting:** Integrate an additional API to provide weather predictions for the next few days.
- **Additional locations:** Add interactive buttons allowing users to view weather information for surrounding areas.
