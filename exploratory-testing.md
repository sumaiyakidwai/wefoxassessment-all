# Part 1: Exploratory testing

## Results
### Scenario 1: Create a hotel room booking

Create a hotel room booking by first searching for the hotel or opening it from suggestions, fill in the personal and traveler details, select mode of payment, check Terms and Conditions and confirm booking.

***Defects:***
 1. Application breaks and **524 timeout error** is shown when an invoice is generated for any payment method but changed to Pay Later and proceeded.
 2. Clicking on the suggested hotels under hotel details page shows **404 Not Found error**.
 3. Sometimes, Deposit Now and Total Price are not the same and have a decimal place difference in the invoice. For example, Total Price: **USD67.32** Deposit Now: **USD 6.73** but the amount required on confirm payment is total price always.
 4. One image for every hotel is broken.
 5. Printed invoice UI is all distorted.
 6. Clicking on the hotel tile in search results does nothing. Hotel details are only opened when the image against the hotel search result is clicked at.

***Suggested Improvements:***

 1. Search should only display hotels that have rooms available on the selected dates, or have a sold out sign if the rooms are not available on search page,
 2. In case of no rooms available, the hotel booking page should suggest the next available dates.
 3. Selected dates should also be displayed on hotel details page.
 4. Email field accepts invalid email IDs. The validation is only on an @ being present in the string, but as@as is not a valid email id. Validation should be improved.
 5. There should be a validation on Phone# field. It accepts any string as of now.
 6. Country dropdowns can be tampered from the DOM and the form submits whatever random string is added. Not sure what is being stored at the backend, because the country is not printed on invoice. Should have a validation.

### Scenario 2: Update an existing hotel room booking 

Login as the demo user, go to bookings page and find a way to update an existing booking. Did not find any update mechanism.

***Suggested Improvements:***

 1. User should be able to make a few modifications like adding another day of stay to an existing booking, or increasing the number of rooms if available.

### Scenario 3: Cancel an existing hotel room booking
Cancel an existing booking either as guest or demouser.

***Suggested Improvements:***

 1. The cancellation message should be shown on top of the screen. The top still shows Booking Confirmed message after Cancel Booking has been clicked and it seems like nothing happened but a message is present at the very end of the screen.

### Prioritization of use cases:
I would first test the use cases regarding booking confirmation and payment options available because there the web app has been integrated with third party services and the integration could have a security risk involved. Another risk involved is with several users trying to book the same room at the same time. The application would have to ensure not to double book a room if it is the last available and two users are trying to book simultaneously. Could not test this since only one user credentials were shared.

## Notes

The three key scenarios that I'd like to test are:

 1. Create a hotel room booking
 2. Update an existing room booking
 3. Cancel a room booking

At [phptravels](https://www.phptravels.net/), search for hotel for random dates and locations.
Click on the first result in search.
Click doesn't work on the whole tile.
Click on details button redirects to Agoda, for the same search parameters.
Clicked the image and hotel page opened but no rooms available error is shown. Similar flow happened for multiple dates and multiple locations.
Clicked on one of the suggested hotels on the error page and page redirected to 404 Not Found.

At [phptravels](https://www.phptravels.net/), select tab Hotels and open any suggested hotel at the bottom. Rooms available here.
One picture is broken for every hotel.
Select a room option and go to booking details page.
 Enter data in your personal information, check pay later and accept terms and conditions and make booking,
 Go back and enter erroneous data. 
 Email field only checks for @ to be present '23@as' got accepted.
 Phone number field takes letters too (text field).
 No validations on country dropdowns, can be set to a value not present in list from DOM.
 Confirm booking button is clickable but greyed out before terms and conditions are checked.
 Try confirming without payment mode selected.
 Select each payment method and proceed to check the integration.
 Deposit Now and Total Price not the same sometimes??? Total Price: USD67.32 Deposit Now:USD 6.73
 Try changing payment mode after receipt has been generated.
 App crashes when changed to Pay Later.
 Download invoice of booking. Invoice UI broken.

Login with existing user to check if update on booking is possible.
No option found to edit a booking.

Use wallet to confirm and pay for a booking with logged in user.

Clicked on cancel booking. Top of screen still shows booking confirmed. Message for cancellation shown at bottom.
