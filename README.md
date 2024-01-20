# General
This is an A/B testing implementation project

## Project details
Variation models and variation display logic are designed in such a flexible way,
so they are highly extendable. Content team should be able to create variations without
engineering support only using UI.

## Usage
1. Install dependencies: `npm install`
2. Build the app: `npm run build`
3. Start the app: `npm run start`

After these steps the app will start to run on http://localhost:1234

## A/B testing process
Each user is assigned with a unique ID on app load
and this ID is stored in the cookies for later use.
On page load, a variation is randomly selected from the list of variations
and its ID is stored on the cookies. And the template generator generates
the proper template for the variation content and displays it on the page.
All the page views and events tracked by the tracker.
#### _Example tracking data_
```
Page view
{
"userId":"ab4dba09-448c-48ac-81a4-8ec63d5489d5",
"articleId":"fb2864fb-17ab-4aa6-a7a4-2dc4f4c21a8e",
"variationId":"test"
}

Event
{
"userId":"ab4dba09-448c-48ac-81a4-8ec63d5489d5",
"articleId":"fb2864fb-17ab-4aa6-a7a4-2dc4f4c21a8e",
"variationId":"test",
"eventName":"sign-up-button-click"
}
```
By using the `userId` and `articleId` data in the tracker we can identify
unique visits to the page as well as unique events(button clicks)

## Assumptions
- In the current version of the app, it's assumed that each page could have
only one variation displayed to the user. Multiple variation displaying places
are not supported currently.

- Currently only one variation type(SIMPLE) is implemented. App allows to
implement new variation types without changing the core logic. Each variation
type has its own model and template generator.