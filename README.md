# *This project is deprecated*

## Poopee
|Zoom out|Zoom in|Card|Reviews|
|-|-|-|-|
|<img width="374" alt="Screen Shot 2022-03-05 at 9 31 50 PM" src="https://user-images.githubusercontent.com/8519876/156906837-52fd11e9-6b25-4955-a6b4-5e734f913139.png">|<img width="373" alt="Screen Shot 2022-03-05 at 9 33 34 PM" src="https://user-images.githubusercontent.com/8519876/156906722-47de53a8-39f2-41db-ae96-e600f32c06e3.png">|<img width="373" alt="Screen Shot 2022-03-05 at 9 31 09 PM" src="https://user-images.githubusercontent.com/8519876/156906721-eda5b5a9-ec13-43ff-92a4-bc94cf454713.png">|<img width="371" alt="Screen Shot 2022-03-05 at 9 39 43 PM" src="https://user-images.githubusercontent.com/8519876/156906878-86663735-eed8-4329-a9a0-803e66a2d16a.png">|

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
