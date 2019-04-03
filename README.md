# Glitterhoof
*Display your Crusader Kings II Dynasty Chronicle with Style!*

## Premise
Ever finish an epic hundred-hour long campaign of CK2 and want a record of the trials and travails of your dynasty? You ask the game to export a copy of your family chronicle only to find it's a boring text file. What if you could make it a bit more fancy, and also get some stat crunching on the events that shaped your clan and history itself? Enter Glitterhoof: the app for giving that dusty old chronicle some much needed pizazz.

## Features
* No user accounts: no need to sign up, log in, sign out, etc.
* Users upload their chronicle file, which gets processed by the backend into a Chronicle object. These have a unique id attached, which is part of the URL for that chronicle; users can revisit and share their chronicles, but the app doesn't offer a mechanism for binding them to an account.
* Chronicles have a set of events, which are parsed from the uploaded file. If the backend can categorize the event, it should do so for stat gathering purposes.
* Event categories can be used for aggregation and charting: e.g. counting the number of battles across the entire campaign, and creating a pie chart of the victories versus the defeats.
* It would be nice to detect dynasty avatars, both so they can be linked to, but also analyzed, filtered, etc.

## User Experience
* Default app landing page has an overview of the app (e.g. the above Premise), a prominent form for creating a new Chronicle, and a list of the 5 most recently created Chronicles.
* A Chronicle would have a stickied header for the current year, a list of events for that year. Each event would have a stylized first letter, evocative of stained glass. (If possible, certain categories should likely include an image to denote what they represent.)

## Visual Design / Assets
* Using some sort of blackletter font to typeset the chronicle would be nice. Legibility is slightly more important than embellishment. UnifrakturCook seems to strike a nice balance. Optionally, use this font for ::first-line and years, but switch to a sans font for increased legibility for extended passages.
* Stained glass effect can be achieved using trianglify (a JS library) to generate a colorized triangular tessellation. Text in black layered on top of this would complete the effect.
* Event categories could be represented by an icon embedded in the event's stained glass. Flaticon seems to have numerous free/by icon packs which have a medieval style.

## App structure
* access:
    * frontend endpoint managed by React
    * /api/chronicles: index/show; json only.
    * ActionCable: ChronicleCable, for handling upload, post-upload processing, and sending status updates back to the frontend.

## Upload / Processing Messages
* Upload phase: "We've dispatched squires to carry copies of your manuscript to our scribes."; coupled with percentage completion.
* Processing:
    * Determining number of events.
    * Reticulating splines.

## Chronicle File Structure
CK2 exports the chronicle as a plaintext file with the following structure:
* The beginning of a near year is on a new line, denoted by hyphens:
    ```
    - 1072 -
    ```
* Each successive event chronicled during a year appears on a new line.
* The first chronicled event should describe for which dynasty the log is for:
    ```
    This is the Chronicle of House <dynasty-name>
    ```
* The first year listed should be the starting year.
* There should be a second new line between the last event of the previous year and the declaration of the new year.
* Nickname acquisition is denoted by:
    ```
    <character-name>, through deeds and character, came to be known as <character-name> <nickname>.
    ```
* War declaration seems to be handled by:
    ```
    <character-name> went to war against <target-name>
    ```
* Winning a war:
    ```
    <character-name> won the war against <target-name>
    ```
* Winning a battle:
    ```
    The army of <character-name>, commanded by <commander>, was victorious in the battle of <location> against the armies of the <target>.

    ```
* Losing a battle:
    ```
    The army of <character-name>, commanded by <commander>, was defeated in the battle of <location> against the armies of the <target>.
    ```
* Creating a title:
    ```
    <character-name> created the title of <title-name>
    ```
