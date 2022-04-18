# Work-Day-Scheduler

In this planner, one can enter one's schedule into hour blocks denoted by dynamically updated JS and HTML based on the date, using moment.js. After saving one's schedule, even upon refreshing the page, the schedule will remain there.

Moreover, as an added help, the planner color-codes past times (grey), present time (red) and future time (green) for the user's benefit!

Technologies Used
HTML, CSS, JavaScript, Local Storage, Moment.js

Initial Usage
Upon accessing the application, the user is greeted with the curren day based on their location using Moment.js. The color-coded bars descriped above will indicate to the user what events have passed, are the most pressing, and/or are the most distant.

The user may type into the rows what s/he has planned for that time-block. Click the save button to the right-hand side will save this event to the browser's Local Storage based on the time it is in, allowing the user to close out the application, log back in, and still see the event in the same block. Typing a different event and re-saving will cause the event in the Local Storage to be re-written, reflecting the change.
