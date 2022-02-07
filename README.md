# <center>Easy Progress Bar on scroll for ```react```</center>

### Add an progress bar on the top of your page to indicate the position of the scroll page

## Install
```bash
npm i @nadfri/react-scroll-progress-bar
```

## Usage
```jsx
//Import ProgressBar component
import {ProgressBar} from '@nadfri/react-scroll-progress-bar';

export default function App() {
  return (
    <div style={{height: "200vh"}}>
      <ProgressBar color1="gray" color2="gold" position="fixed" height="4px"/>
      {/*or*/}
      <ProgressBar />
    </div>
  );
}
```

# Default Props
If you use ```<ProgressBar/>``` without props
- color of container will be `gray` (color1)
- color of bar will be `gold` (color2)        
- position of progress bar will be `fixed` (position)
- heigth of progress bar will be `4px` (height)

# Custom Props
- `color1`   | color of the container (ex:"gray", "#fff')
- `color2`   | color of the progress bar (ex: "red", "rgb(0,0,0)")
- `height`   | height of the progress bar (ex: "10px", "10%", "1vh")
- `position` | Position of the progress bar (ex: "absolute", "fixed", "sticky", "relative")

You can use all css values for this properties.
