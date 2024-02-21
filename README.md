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


```
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

```


```
1.Backend Configuration

install node with these below commands

1.1 curl -s https://deb.nodesource.com/setup_18.x | sudo bash

1.2 sudo apt install nodejs -y

1.3 sudo apt install nodejs -y

1.4 node -v  (to check the version of node js)

1.5 npm install

1.6
cd /home/ubuntu/TravelMemory/backend/

nano .env

MONGO_URI='mongodb+srv://Akhil:Yonqt9NjVoj9hQCB@cluster0.9pd1ugv.mongodb.net/travelmemory'

PORT=3000

sudo node index.js  

```

Step3 - Setting up Reverse Proxy for the Frontend & Backend 

Reverse proxy configuration for Backend

sudo apt install nginx

sudo systemctl status nginx

sudo unlink /etc/nginx/sites-enabled/default

cd /etc/nginx/sites-available/

sudo nano server.conf

server { 
listen 80;
location / {
proxy_pass http://server_address;
}}



ln -s /etc/nginx/sites-available/custom_server.conf /etc/nginx/sites-enabled/server.conf

sudo service nginx configtest

sudo service nginx restart

Screenshots
![Screenshot (469)](https://github.com/Akhilbmsb/TravelMemory/assets/54345937/8cd2acc9-c7da-436b-9411-0846c49ba903)
![Screenshot (468)](https://github.com/Akhilbmsb/TravelMemory/assets/54345937/a0f72774-2b4e-44f1-b72c-7c782f38f45a)
![Screenshot (467)](https://github.com/Akhilbmsb/TravelMemory/assets/54345937/f6fa2c8b-d2cf-4af8-a71f-b8fea7e3e366)
![Screenshot (466)](https://github.com/Akhilbmsb/TravelMemory/assets/54345937/0486519c-8e55-4e9b-b272-c0f750e1e5ca)
![Screenshot (465)](https://github.com/Akhilbmsb/TravelMemory/assets/54345937/5ee1c822-e649-4a81-8ce2-9b2b9821dd2c)
![Screenshot (464)](https://github.com/Akhilbmsb/TravelMemory/assets/54345937/0b83af8c-89b5-4634-9fbe-80feb530b54d)
![Screenshot (463)](https://github.com/Akhilbmsb/TravelMemory/assets/54345937/1c37985e-642a-491f-b194-2aa4fb45991a)
![Screenshot (462)](https://github.com/Akhilbmsb/TravelMemory/assets/54345937/cbe3e0c1-6b94-4126-8aa3-f08cdbaaa461)
![Screenshot (461)](https://github.com/Akhilbmsb/TravelMemory/assets/54345937/38d59dc3-145b-47f7-8173-4fc4bba8984c)
![Screenshot (460)](https://github.com/Akhilbmsb/TravelMemory/assets/54345937/e59398be-37ca-4cd8-bfe6-12c14a1d4cf9)
![Screenshot (459)](https://github.com/Akhilbmsb/TravelMemory/assets/54345937/9f45ad3a-3de9-4a7a-aab8-d611e483b43d)
![Screenshot (458)](https://github.com/Akhilbmsb/TravelMemory/assets/54345937/5d2d2bbf-c832-4150-81c8-8446fd78c554)

Architecture Diagram

![image](https://github.com/Akhilbmsb/TravelMemory/assets/54345937/d45a17b7-ca25-46fa-b37a-435326350131)






    

