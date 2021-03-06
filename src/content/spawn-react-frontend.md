---
path: /spawn-react-frontend
title: "Spawn React Frontend  "
tag: frontend
date: 2020-07-16T17:38:13.670Z
part: frontend
postnumber: 33
framework: react
chapter: Setting up React Frontend
---

Usually to setup a React app you would use Create React App, unlike Vue it does not come with a CLI where you can configure lots of goodies with it. There are lots of boilerplates out in the wild that suit how their creators work and get things done.

For this course, we will use the [React Bleeding Edge Kit (TM)](https://github.com/AmoDinho/react-bleeding-edge-kit) however you are most welcome to set up the project however you like and try and plugin different parts of the course where possible.

However, the React Bleeding Edge Kit comes with the following:

\* [Apollo Client](https://www.apollographql.com/apollo-client) setup

\* [Reach Router](https://reach.tech/router/) and routing setup

\* Tailwind configured

Setting the above up can easily take 30mins.

So first thing we got to do is go to Github and use the kit as a templete:

![](/uploads/task_1.png)

After that we can now create the repo based on the template.

![](/uploads/task_2.png)

Then we can now clone the repo to our local machine.

```bash
$ git clone url-of-repo
```

Then cd into the repo :

```bash
$ cd lunar-tour-client
```

Install the node modules:

```bash
$ yarn install
```

Then we can start the app and go to local host to view the app

```bash
$ yarn start
```

Now we have our React frontend setup for us!

![](/uploads/task_3.png)

Lastly, create a folder `assets` in the `src` directory and copy all the images in this [Google Driver folder](https://drive.google.com/drive/folders/178c-yMzNPj013dpEwkcDAQHArxjTa1HZ?usp=sharing). These are all the icons and images we will need for the project.
