# Bird-Dog a Battle Buddy
A simple friend finder app build on Express.js.

## Description

Bird-Dog a Battle Buddy is a simple Express.js survey and friend finder application with a military theme.  A "database" of friends is stored in an array of objects including name, photo URL, and an array of survey responses (scores), and a best match is found based on a user's own survey scores.  This application utilizes a Node.js/Express.js server as a back end, which handles GET and POST requests from the browser.

## Architecture

![Architecture](https://github.com/awyand/friend-finder/blob/master/app/public/assets/images/architecture.png)

## Packages
This application uses the following NPM pakages:
* [mysql](https://www.npmjs.com/package/mysql)
* [express](https://www.npmjs.com/package/express)
* [body-parser](https://www.npmjs.com/package/body-parser)

## Initial Data
The initial friends.js data (which you can view by clicking on the "Battle Buddy Database (JSON)" button) was seeded with a few famous military figures.  Their "answers" to the survey are not random, but in fact are based on the following criteria:

1. Most people would characterize your physical stature as "intimidating".
* If the individual was large in stature, they scored higher for this statement.

2. A life in politics would be a good fit following an action-packed career.
* If the individual went into public office following their military career, they scored higher for this statement.  Similarly, if they declined calls for them to run for office or shied away from the public spotlight, they scored lower.

3. You are a southern guy or gal all the way.
* If the individual was born in the south, went to school in the south, or was primarily based in the south, they scored higher for this statement.

4. Cross-functional assignments are appealing to you.
* If the individual commanded multiple joint units/commands (i.e. organizations made up of members of the Army, Navy, Air Force, and Marine Corps), they scored higher for this statement.

5. You are interested in science and technology.
* If the individual held a S&T-type command or majored in an S&T field in college, they scored higher for this statement.

6. The Middle East would be an interesting place to visit.
* If the individual lived or served in the Middle East, they scored higher for this statement.

7. You'd rather be high in the sky than on land or at sea.
* If the individual was a member of the Air Force, they scored higher for this statement.

8. Hair is for hippies. Bic all the way.
* If the individual was known for their bald head or a firm adherence to military grooming standards, they scored higher for this statement.

9. Your speeches are rousing and oft-quoted.
* If the individual is known for their speeches and has many quotes attributed to them, they scored higher for this statement.

10. People call you "Mad Dog".
* If the individual goes by the nickname "Mad Dog" (i.e. they are General Mattis), they scored higher for this question.
