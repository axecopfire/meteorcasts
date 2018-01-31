# meteorcasts

##Stephen Grider's Udemy course on React/Meteor

Here's a ref to [Stephen's code for this course](https://github.com/stephengrider/meteorcasts)

# For Initial install
---

Need to install chocolatey to install Meteor for Windows.
[Find that Here](https://chocolatey.org/install)

Need to install Meteor.js (With Chocolatey) just type `choco install meteor`

### Handy note
`meteor create --bare` to create an empty app
`meteor create --full` to create a scaffolded app

---
# Images Boilerplate
---

After that we run the command `meteor create images` (This creates the package.json and some other boilerplate)
    * On windows I had to be an admin

To start web server `cd images` then `meteor`

Then we deleted the __Client__ and __Server__ folders so we can start from scratch.

We need to install React so we use the Node Package Manager `npm install --save react`

We also need to install `npm install --save react-dom`

Add Bootstrap for styling `meteor add twbs:bootstrap@3.3.6`

Axios for an [Ajax request](https://github.com/mzabriskie/axios)
    `npm install --save axios`
    >Some people will get an error "If you notice problems related to these missing modules, consider running: `meteor npm install --save meteor-node-stubs` _do that if necessary_

## Employees Boilerplate


To install the npm package that is helpful for fake data generation
`npm install --save faker lodash`

To remove automatic publishing of server collections for client querying:
`meteor remove autopublish`

Required boilerplate for react-meteor-data
`npm install --save react-addons-pure-render-mixin`

Watch collections and subscriptions
`meteor add react-meteor-data`

Gotta Add that TWBS again
`meteor add twbs:bootstrap@3.3.6`

###### Notes
---
`<ImageDetail image={image} />` This is passing the image property to image detail (prop).


##### React Boilerplate for Main.js
---
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>Hello there!</div>
    );
};

// After Meteor loads in the browser, render my app to the DOM.
Meteor.startup(() => {
    // React render call
    ReactDOM.render(<App />, document.querySelector('.container'));
});

---
# SHORTEN MY LINK
---

`npm install --save react react-dom`
`meteor add twbs:bootstrap@3.3.6`
`meteor remove insecure`
`npm install --save valid-url`
`meteor remove autopublish`
`npm install --save react-addons-pure-render-mixin`
`meteor add react-meteor-data`
`npm install --save connect-route`

---
# Markbin
---

`meteor add react-meteor-data`
`npm install --save react react-dom react-addons-pure-render-mixin`
`meteor add twbs:bootstrap@3.3.6`
`meteor add accounts-ui accounts-password`
`meteor remove insecure`
`meteor remove autopublish`

#### Concatenated 
---
`meteor add react-meteor-data twbs:bootstrap@3.3.6 accounts-ui accounts-password`
`npm install --save react react-dom react-addons-pure-render-mixin`
`meteor remove insecure autopublish`