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

### Functionality
1. The ability to load an initial set of suggested media from a local data store (JSON file). Either rename the example file [**`\src\models\example-data.json`**](.\src\models\example-data.json) or create your own `data.json` file. 
    
    Each object in the array should be converted into a **JSX component** when displayed in your app. 
    
    For example, in the  __Bookcase React App__ each JSON object in the `books.json` file is a **component** called `<Book/>`.

    Ensure the list of items is displayed with the identifier `id="results"`, e.g.

    ```XML
    <div id="results">
        <MovieItem/>
        <TvShowItem/>
        ..
        ..
    </div>
    ```
    `<MovieItem/>` is an example of the component types you have created to display the results from the _[iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)_


1. The ability to add an **component** to a `<Basket/>` (*The stored items do not have to persist across sessions. When you refresh the browser the application can reset.*).
    - The application should contain one function called `addToBasket()` in `App.js` which allows **components** to be added and removed from the `<Basket/>`
    - Ensure you cannot add the same item more than once to your `<Basket/>`.

1. The ability to remove a book from a local list of items.
    - The application should contain one function called `removeFromList()` in `App.js` which allows **components** to be added and removed from the `<Basket/>`

1. Your app should keep a count of the number of items in your `<Basket/>` and display the count in an element with the id `basketcount` e.g. 
    
    ```HTML
    <div id="basketcount">3 items</div>
    ```
    *Consider using the `useEffect()` hook to update the title on every render*.

1. Ensure your application is broken down into components. Each component should be a logical representation of objects in your application. The name of the **component** will depend on the **type** of the returned component (e.g. MovieItem, Basket, Header, Search, MusicItem, ShortFilmItem). 

    **Expected App File Structure:**
    ```
    - public/
        |-- index.html
    - src/
        |-- components/
            |-- MovieItem.js*
            |-- PodcastItem.js*
            |-- <Other Items>*
            |-- Basket.js
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

### Navigation

5. Allow a user to view an about us page called `About.js` explaining the application functionality. The `About.js` should be created in the **pages** folder and `<Link/>` to the page should be available on every view of your app.

    Your finished app should contain three links with the following `id`s:

    ```XML
    <Link id="homelink"/>
    <Link id="basketlink"/>
    <Link id="aboutlink"/>
    ```

### Search 

6. The app will connect to a third-party API provided by iTunes _[iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)_.

1. Add a search form to the home page of the app.

1. The search the _[iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)_ for a specific term using a *keyword*,e.g.
    
    ```sh
    > curl https://itunes.apple.com/search?term=orange&limit=15    
    ```

    Will return top 15 results from the iTunes store containing the word `orange`.

    Your app should display the results of the search in the `<div id="results"/>` element. Your search method should be called `search()` and available in the `App.js` file.

    Your search should be available on each `'page'` of your app. The search text field should have the identifier `keywords`, e.g. `id="keywords".`. 

## Additional Functionality (Optional)

### Add Advanced Navigation

9. Add pagination (next and previous buttons). *This will require storing the book data and page number in state, then only showing so many results per page*
1. Add numbered pages and display the results of the search.

## Animation/Interactivity

11. Add some animation or transitions to the application, i.e.
    - Consider animating the selection and deselection of books.
    - An animated results count when the search returns more than one page of results. 
1. Add a dark mode to the app

## How to submit

Commit all created/generated files and folders to the repo and push to your remote repo for assessment.

## iTunes Search API

The [iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/) can be searched for iTunes and Apple music, videos, TV show and other media.

An example of the output from a search can be found in the **models** folder [example-data.json](./models/example-data.json).

Use the following link to find out more details about how to use the _[iTunes Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/)_.

## ⚠️API Warning Notes:
- To improve response times, minimize the number of search results the Search API returns by specifying an appropriate value for the limit parameter key.
- The Search API is limited to approximately **20 calls per minute** (subject to change).

**[See the iTunes API help guide for more information on expected types](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api)**

## Example Project

- [Example Bookcase App](https://example-bookcase.netlify.app)
- [Example Media Store](https://example-mediastore.netlify.app)