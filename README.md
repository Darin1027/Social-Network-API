# Social Network API

## Table of Contents

1. [ Description. ](#description)
2. [ Installation. ](#installation)
3. [ Usage. ](#usage)
4. [ License. ](#license)
5. [ Tests. ](#tests)
6. [ Questions. ](#questions)
7. [ Screenshots. ](#screenshots)
8. [ Contributors. ](#contributors)
9. [ Resources. ](#resources)
10. [ Links. ](#links)

## Description

- User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

- Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation

- Clone the repository using:

```
git clone git@github.com:shd327/Social-Network-API.git
```

- Ensure you are in the current working directory
- Ensure all dependencies are installed as shown below installation instructions are below:

```
{
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^6.8.1"
  },
}

```

Run the below commands to install any missing dependencies

```
npm install express
```

```
npm install mongoose
```

Or, since the Package.Json is included you can run the below command to install all the dependencies

```
npm i
```

## Usage

- Ensure all depencies and above steps are fulfilled
- Navigate to the working directory and open a terminal and run the below command

- Navigate to the working directory in the terminal and run the below to start the application

```
npm start
```

## License

- [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```
MIT License

Copyright (c) 2022 Holiday-Wishlist-App

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
```

- https://opensource.org/licenses/MIT

## Tests

- N/A

## Screenshots

![Photo ex.1](./assets/Thought-1.png)

![Photo ex.2](./assets/Thought-2.png)

![Photo ex.3](./assets/Thought-3.png)

![Photo ex.4](./assets/Thought-4.png)

![Photo ex.5](./assets/Thought-5.png)

![Photo ex.6](./assets/Screenshot_20230110_071041.png)

![Photo ex.7](./assets/Screenshot_20230110_071051.png)

![Photo ex.8](./assets/Screenshot_20230110_071100.png)

![Photo ex.9](./assets/Screenshot_20230110_071111.png)

![Photo ex.10](./assets/Screenshot_20230110_071120.png)

## Contributors

- Darin Palombo [dplb1027@gmail.com]

## Questions

Want to see more of my work?

- [Github Link](https://github.com/Darin1027)
  <br/>

## Contact Me

dplb1027@gmail.com

## Links

- [Github Link](https://github.com/Darin1027/Social-Network-API)
- [Demo Video Link](https://watch.screencastify.com/v/OApxiLnvzcmznsARCZGs)

## Resources

- https://www.npmjs.com/package/mongoose
- https://www.tutorialspoint.com/mongodb/index.htm

* https://www.npmjs.com/package/dotenv
* https://www.npmjs.com/package/express
