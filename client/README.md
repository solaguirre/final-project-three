# Weffle - Game Code Raffle

Welcome to Weffle! Users may login or signup, search for game codes, view winners, host and bid on items. This webpage features React, Sequelize, APIs, Node and Express Web Server, as well as many other helpful tools. 

## User Story

As a raffle enthusiast I want to have a user friendly and visually appealing application that allows me to post and bid on items with purchased tickets. 

## Available Scripts

In the project directory, you can run:

```
        "start": Start the react development server
        "build": Builds a production react app
        "test": Runs lint, no other test yet
        "lint": Lints the client
        "fix": ESlint fixes the client
```

## Client Structure

The structure of the client application, as produced, is replicated below, with folders marked with ```-``` and files marked with ```*```. Below this, please find the detailed description of each file and what it is doing. 

```
- public
    * favicon.ico
    * index.html
    * manifest.json
    * robots.txt
- src
    - components
        * Navbar.js
        * NoteForm.js
    - hooks
        * auth.js
    - pages
        * Home.js
        * Login.js
        * Notes.js
        * Signup.js
    * App.css
    * App.js
    * index.js
* .eslintignore 
* .eslintrc.json
* .gitignore
* package.json
* README.md
```



## Deployment

Deploy the server. It deploys this!

## Contact
Marisol Aguirre
Github - https://github.com/solaguirre
Portfolio -
Email - soulaguirre@gmail.com
Lillian Paris
Github - https://github.com/lillianparis
Portfolio -
Email - lillian.paris529@gmail.com 
Rhiley Southam
Github - https://github.com/orhiley90 
Portfolio -
Email - orhiley90@yahoo.com 


## Built With

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

* [Create React App](https://create-react-app.dev/) - The CRA boilerplate that underpins this application.
* [React](https://reactjs.org/) - React
* [React Router Dom](https://www.npmjs.com/package/react-router-dom) - Our React Router w/DOM bindings.
* [Axios](https://www.npmjs.com/package/axios) -  Use for API calls. If I had my druthers, we would us fetch, but axios offers us way too nice a library for defaulting headers/response interceptors.
* [Use Persisted State](https://www.npmjs.com/package/use-persisted-state) - A hook for a local storage state. I'm too lazy to write this.

## Further Reading

* [React Router for Web](https://reactrouter.com/web/guides/quick-start) - The documentation for routing. Very important! Other cool things:
    * [Sidebar Example](https://reactrouter.com/web/example/sidebar)
    * [Guide](https://reactrouter.com/web/guides/primary-components)
* [useHooks useAuth](https://usehooks.com/useAuth/) - Primary source for how I wrote the useAuth for this App, based on the useAuth hook that was written here, and then used in the [React Router Authentication Redirect Example](https://reactrouter.com/web/example/auth-workflow)
* [Component Libaries](https://blog.bitsrc.io/13-top-react-component-libraries-for-2020-488cc810ca49) - Literally just the topic google result. But these are all good ideas. I personally prefer Material, but it's pretty complex. Semantic has been fun after Joseph gave it a whirl!

## License

This project is licensed under the MIT License.