# 05-matrix-planner

## Description

This website is a simple day planner application that allows users to schedule their daily tasks and events by the hours between 6AM and 10PM.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

- [Live Github link](https://shaynefw.github.io/05-matrix-planner/)
- [Github repo](https://github.com/shaynefw/05-matrix-planner)

## Usage

1. To add an event, click on the input field of the desired time slot and type in the event details.
2. To save the event, click on the save button next to the input field.
3. To edit or delete an event, double-click on the save button of the corresponding time slot.
4. The color of the textbox field will change based on the current time and the hour of the event.
5. A gray textbox means containing entries was scheduled in the past. A red textbox means containing entries were scheduled within the current hour. A green textbox means containing entries are scheduled in the future.

![webscreenshot](./assets/images/Your%20Day%20Planner%20(1).png)

## Credits

[Bootstrap](https://getbootstrap.com/), [jquery](https://jquery.com/),[Dayjs](https://day.js.org/), Prof, Classmates, Instructors.

## License

MIT License

Copyright (c) 2023 Shayne Whayne

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

This site features a calendar display of the current day, month, and year at the top of the page, and a list of hours from 6AM to 5PM. Each hour has an input box and a save button next to it.

The user can enter text in the input box and click the save button to save their task or event for that hour. The text will be saved in the local storage so that it can be retrieved even after the page is refreshed.

The input box for each hour is color coded based on the time of the task or event. Tasks or events entered for hours in the past are given a "past" class, tasks or events entered for the current hour are given a "present" class, and tasks or events entered for hours in the future are given a "future" class.

The user can also double click the save button to reset the input box to normal, remove the text, and remove it from local storage.

The website uses JavaScript and jQuery to handle the logic and interactivity of the day planner application. The time is updated every second using the setInterval function, and the date is displayed using the dayjs library. The website also uses Bootstrap CSS framework to style the layout and elements.

## How to Contribute

N/A

## Tests

N/A