This is my solution for the device detector challenge.

## Usecase
* A user clicks the button 'Scan' to scan his system.
 * When the broswer scan is finished a POST request will be sent the http://devicedetector.test/device-info
 with users public ip, device and OS information.
 * The user sees the results 
 

## Stack

- react 16.8.6
- axios 0.18.0
- public-ip 3.0.0
- react-device-detect 1.6.2

## Available Scripts

In the project directory, you can run:

### `npm install`
This command installs the dependencies of the app

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


