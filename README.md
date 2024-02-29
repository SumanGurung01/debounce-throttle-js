## Debouncing
Debouncing is a technique used to ensure that a function is not called repeatedly within a short period of time. 
When an event (such as typing in an input field) triggers the function, debounce waits for a specified amount of time before executing the function. 
If the event occurs again within that time period, the timer is reset. 
This helps to prevent performance issues caused by rapid or excessive function calls, particularly in scenarios like input field updates or scroll events.

## Throttle
Throttling is a technique used to limit the rate at which a function can be executed. 
It ensures that a function is called at most once within a specified time interval. 
When an event triggers the function, throttle allows the function to execute immediately. 
However, subsequent calls to the function during the throttle period are ignored until the time interval elapses. 
Throttling is commonly used in scenarios where rapid or frequent function calls could negatively impact performance, such as scroll event handling or API requests.
