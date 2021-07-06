[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version: 0.0.3](https://img.shields.io/badge/version-0.0.3-brightgreen)](https://img.shields.io/badge/version-0.0.3-brightgreen)
[![Platform: IOS and Android](https://img.shields.io/badge/platform-ios%2Fandroid-lightgrey)](https://img.shields.io/badge/platform-ios%2Fandroid-lightgrey)

# react-calendar-personalize-color
A simple ReactJS component that works for calendar.

### Demo

![Capturar](https://user-images.githubusercontent.com/71772535/124610027-87a8dd80-de46-11eb-89e8-bf9c5b7b76fc.PNG)


---------

### Getting Started
1. First, You need to install It, just like You would do with any NPM package:
```
npm i react-calendar-personalize-color
````

2.Then, You need to import the library component within your own component
``` javascript
import React from 'react'
import CalendarPersonalize from 'react-calendar-personalize-color'
````

3.You can now start using the calendar-personalize-color components!
``` javascript
export default function YourComponent(){

    const [checkDate, setCheckDate] = React.useState(null);

    React.useEffect(() => {
        console.log(checkDate); // "2021-06-22"
    }, [checkDate]);

    return(
        ...
        <CalendarPersonalize onCheckDay={setCheckDate} />
    );
}
```

### Props

Parameters | Default Value | Values | description
:--------- | :------: | :-------: | -------:
primaryColor | #000 | Colors[rgb, hex, string] | Main calendar color
inversePrimaryColor | #FFF | Colors[rgb, hex, string] | Reverse primary color of calendar, used in days.
secondaryColor | #f39c12 | Colors[rgb, hex, string] | Secondary calendar color, used to mark a day.
inverseSecondaryColor | #000 | Colors[rgb, hex, string] | Invert the secondary calendar color used to mark the day's text.
onCheckDay | null | function | Role responsible for setting a date
alertBlock | null | function | Role responsible for displaying any component on blocked dates
dates |  null | {"yyyy-MM-dd":value,} | Object responsible for defining the dates that will be valid in the calendar. E.g.: {"2021-06-22": true, "2021-06-23": false}