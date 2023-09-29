# Travel Memory

`.env` file to work with the backend:

```
MONGO_URI='ENTER_YOUR_URL'
PORT=3000
```

Data format to be added: 

```json
{
    "tripName": "Incredible India",
    "startDateOfJourney": "19-03-2022",
    "endDateOfJourney": "27-03-2022",
    "nameOfHotels":"Hotel Namaste, Backpackers Club",
    "placesVisited":"Delhi, Kolkata, Chennai, Mumbai",
    "totalCost": 800000,
    "tripType": "leisure",
    "experience": "Lorem Ipsum, Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum, ",
    "image": "https://t3.ftcdn.net/jpg/03/04/85/26/360_F_304852693_nSOn9KvUgafgvZ6wM0CNaULYUa7xXBkA.jpg",
    "shortDescription":"India is a wonderful country with rich culture and good people.",
    "featured": true
}
```

Procedure steps to deploy an application and establish a connection of Ec2 instance between frontend,backend servers
1.fork the TravelMemory project as your project
2.clone the project into 2 instances one as front end and other as backend

1.frontend Configuration
install node with these below commands
1.1 curl -s https://deb.nodesource.com/setup_18.x | sudo bash
1.2 sudo apt install nodejs -y
1.3 sudo apt install nodejs -y
1.4 node -v  (to check the version of node js)
1.5 npm install
1.6 run command ls from frontend folder and open package.json file to edit start script
    "start": "PORT=3000 react-scripts start"
1.7 this stage frontend is configured so run the following command to start the server
    sudo npm start --port 3000

