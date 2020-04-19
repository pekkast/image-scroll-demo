# Image scroll experiment

You may see working app in [pekkast.github.io/image-scroll-demo](https://pekkast.github.io/image-scroll-demo)<br>
You can find code for two alternative implementations that are unfortunately not in sync by switching branches.<br>
The code chosen to demo & in current master is the one with [react-infinite-scroller](https://cassetterocks.github.io/react-infinite-scroller/),
which is super easy to use and works pretty well. Unfortunately with large data, the page will get extremely heavy.
Also routing to other page (photo details) and returning back is not possible without additional work. Hence, the selected photo is shown in modal<br>
Because of these shortcomings, the other implementation uses [react-window](https://react-window.now.sh/) and related loading and visualizing components
to keep the page light with rendering only visible content.
However, I did not manage to get the page render without flashing the content when new set of imagedata is loaded when scrolling.
The virtualization component seems to unmount when the data arrives.

## Additional  info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
