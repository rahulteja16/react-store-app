# react-store-app


### Installing the project

clone or download the project and run following commands:
```
npm install
npm start 
```

### Project Brief:
1. The Application is built using React with Hooks.
2. It has been optimized to run fluently even on mobile.
3. css has been used for styling the application.

### Component Structuring: 

1. Shop is the root component/container which holds all other components and state is managed from this components using Hooks.
2. Header, Category List and Store Component's are held with in the Shop Component at same level in hierarchy.
3. Category List has a child component , Category Item - which hold each category.
4. Store Component has 2 child components - Store Filtes and Store List , one component is for filters and other is to display list of store.
5. Store List is indented with Store item component - which is the item level component of store.
6. UI has multiple components that just render the UI components and no logic is involved there.


## Use Cases:
1. Store that is open will display the message saying "Store is Open"
2. Closed store display the next opening time of the store.
3. All the stores are filtered according to store time, i.e closed stores are pushed to the bottom.
4. If all the stores are closed, then a message pops up saying, "All stores are colsed" and image of category changes to sleep image.
5. Every category can be filtered by tags.
6. Special care has been taken in terms of UI/UX to highlight the workflow of the application.

