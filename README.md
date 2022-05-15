# UniStudi - Your best buddy

## Tech-Stack
### Backend
Python
Flask
MariaDB

### Frontend
Angular
Capacitor


## Hardware
### Backend
Raspberry Pi

### Frontend
Android/ios/Web Application


## Build Dependencies
### Backend
- $ sudo apt install mariadb-server
- $ sudo apt install python3 python3-pip
- $ pip3 install mysql-connector
- $ pip3 install flask
- $ pip3 install flask_cors

### Frontend
- Install Android Studio and its dependencies
- Ensure a working Angular setup
- Then run the following commands from Frontend/uni-studi/ directory
- $ npm install
- $ ng build --prod
- $ npx cap sync
- $ npx cap copy
- $ npx cap add android
- $ npx cap open android


## Build Instructions(Setup)
### Backend
No build as such(Python interpreter with required dependencies)
Create a user and a database with required tables and content in it.
Provide the details in Backend/.config file

### Frontend
Capacitor for generating Android files
Build on Android Studio
Install on Emulator or a physical device


## Execution
### Backend
Run Backend/main.py on a server(e.g. RPi)

### Frontend
Install unistudi.apk on android phone
(or)
Run a web application


Use following login details(temporary):
- user: moses
- password: testpass

