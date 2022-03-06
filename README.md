## *This project is deprecated*

## How to start
### Create a .env file in the root directory
```sh
touch .env
echo 'REACT_APP_GOOGLE_MAP_KEY=YOUR_API_KEY' >> .env
```
### `npm install`
Installs dependencies.

### `npm start`
Runs the app in the development mode.

### `npm run build`
Builds the app for production to the `build` folder.

## Notes
- This is the first React app I created for `Poopee` after rebranding from `RestroomFinder`.
- The project was spawned using `create-react-app`.
- The app used to fetch restroom data from the `RestroomFinder` server hosted on Heroku, which is no longer available.
- The app uses `react-google-maps` to render the map.
