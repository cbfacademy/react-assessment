# React Assessment

For your unit 4 assessment you will be building a Media Store App, that allows users to search the iTunes store for music, videos, TV shows and other media types.

This repository contains a basic React app. To install the basic packages needed to run the app, run the following command in your terminal:

```shell
> npm install
```

## High-Level Criteria

The finished app should include the following functionality:

- Users should have the ability to add and remove items from a basket. 
- The basket should display the number of items.
- The users should be able to search the iTunes Search API using a text search field.
- The app should have an About page explaining how to use the app and who designed it.

By the due date of this assessment you must have what is stated in the [criteria](#assessment-criteria) pushed to GitHub ready to be marked.

### Understanding Criteria

The tasks and homework throughout unit 4 explained how to build a __Bookcase React App__ to store books. The __Bookcase React App__ is an example of a __SPA (Single-Page App)__. The same functionality and concepts can be used in this assessment.

The main functionality of the __Bookcase React App__ was the ability to `add` and `remove` from a `<BookList/>` component and search a third party API. The __Bookcase React App__ also used the `BrowserRouter` module to create new pages.

## Assessment Criteria

Ensure your app has the following functionality:

### App File Structure:

```
- public/
    |-- index.html
- src/
    |-- components/
        |-- MovieItem.js*
        |-- PodcastItem.js*
        |-- <Other Items>*
        |-- Basket.js
        |-- MediaList.js
        |-- Header.js
        |-- Search.js
    |-- models/
        |-- data.json
    |-- pages/
        |-- About.js
    |-- styles/
        |-- App.css
    |-- App.js
    |-- index.js
```
### Components

Ensure your application is broken down into components. Each component should be a logical representation of objects displayed in your application.

### `App.js`
This is the main component of your application. The following functions will be defined in this file: 
- `addToBasket()`:
    Allows **components** to be added to the `<Basket/>`

- `removeFromBasket()`:
    Allows **components** to be removed from the `<Basket/>`

- `search()`:
    Searches the iTunes API for the keywords entered by the user

The `<App/>` **component** should be **rendered** in the `index.js` file.

The App, when started should load an initial set of suggested items from a local data store (JSON file). Either rename the example file [**`\src\models\example-data.json`**](.\src\models\example-data.json) or create your own `data.json` file. 

Each object in the items array should be converted into a **JSX component** when displayed in your app.

The name of the **component** will depend on the **type** of the returned **component** (e.g. `<MovieItem/>`, `<MusicItem/>`,`<ShortFilmItem/>`). Read the [iTunes Search API Documentation](#itunes-search-api) for a list of returned types.

### `Search.js`
Will return a form with the following identifier `id="searchAPI"` e.g., `<form id="searchAPI">`. The form should have at least one text field for keyword input e.g. `<input id="keywords"/>` and a button to submit the form.

The search should be available on each page/view of your app. The `form` when submitted will run your `search()` function. The `search()` function will return results of the [iTunes Search API](#itunes-search-api)

Your app should display the results of the search in an element with the identifier `id="results"` e.g. `<div id="results"/>`.

### `Basket.js`
Users should be able to navigate to their basket and view all saved items. When their basket is empty a message should be displayed:

```
"Sorry, no items in basket" 
```
Users should be able to add items returned in the results from the iTunes search API and items in the `data.json` to their baskets.

Users should be able to see a running total/tally of the costs of the items in their basket as well as the number of items. The total should be displayed in an element with the identifier `id="total"`.

```HTML
<div id="total">£59.99</div>
```

Your app should keep a count of the number of items in your `<Basket/>` and display the count in an element with the identifier `id=basketcount` e.g. 
    
```HTML
<div id="basketcount">3 items</div>
```
*Consider using the `useEffect()` hook to update the title on every render*.

### `Header.js`, `About.js`

Allow a user to view an about page called `About.js` explaining the application functionality. The `About.js` should be created in the **pages** folder. Each view/page of the app should have relevant links to enable navigation between the pages.

Your finished app should contain three links with the following `id`s:

```XML
<Link id="homelink" path="/"/>
<Link id="basketlink" path="basket"/>
<Link id="aboutlink" path="about"/>
```

## Additional Functionality (Optional)

### Advanced Navigation

Add pagination (next and previous buttons). *This will require storing the book data and page number in state, then only showing so many results per page*

Add numbered pages and display the results of the search.

### Animation/Interactivity

Add some animation or transitions to the application, i.e.
- Consider animating the selection and deselection of books.
- An animated results count when the search returns more than one page of results. 

## How to submit

Commit all created/generated files and folders to the repo and push to your remote repo for assessment.

## iTunes Search API

The [iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/) can be searched for iTunes and Apple music, videos, TV show and other media.

An example of the output from a search can be found in the **models** folder [example-data.json](./models/example-data.json).

The following example show a call to the API to search the _[iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)_ for the word `orange` using the `term` query with a `limit` of 15, e.g.
    
```sh
> curl https://itunes.apple.com/search?term=orange&limit=15    
```


Use the following link to find out more details about how to use the _[iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)_.

## ⚠️API Warnings:
- To improve response times, minimize the number of search results the Search API returns by specifying an appropriate value for the limit parameter key.
- The Search API is limited to approximately **20 calls per minute** (subject to change).

**[See the iTunes API help guide for more information on limits](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api)**

## Example Project

- [Example Bookcase App](https://example-bookcase.netlify.app)
- [Example Media Store](https://example-mediastore.netlify.app)