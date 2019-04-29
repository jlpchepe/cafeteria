# React Cafeteria and Hamburgers Menu
The technology set used to create this project is composed primarily by:
- TypeScript
- React
- Parcel
- Material UI

## Clone the repository
git clone https://github.com/jlpchepe/cafeteria

## Install dependencies
npm install

## Start application
npm run start

### Considerations
This project has a configuration file, in ./src/main/config.ts.
There are two configurable parameters:
1- "getPreferredApiMode" allow to select the running mode of the app: InMemory (using In Memory mocks) or Remote (using the REST API).
2- "baseApiEndpoint" specifies the REST API base URL the application uses.

In order to run the application using in memory mocks, you only need to specify "getPreferredApiMode" as ApiMode.InMemory. So the app can run standalone.

## Only generate distributable
npm run build