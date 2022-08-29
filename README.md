# WaifuHunt
**Disclaimer**
- The web logo, display image in the home page, login page,... is all designed and selected by me ^.^
- The web is created by using the **MERN stack** (MongoDB, ExpressJS, React 18, NodeJS).
- The project idea is comes from **a discord bot (Mudae)**, this discord bot is use to roll a character - everytime you type in the command ($w) it will return you a character (random). You will have 10 rolls and when you use all your 10 rolls, you will have to wait 1h for it to reset. 
- The css is done all by me without using any css lib like material-ui, bootstrap, tailwind,...
- Until now its been 1 month since i start developed the project (29/8/2022).
## Table of content
_1. Project purposes_</br>
_2. Project functions and technics_</br>
_3. Things to improve and bugs_</br>
_4. Future features_</br>

### 1. Project purposes
This is my first created project. The project is not only to training myself but also it has entertaining and informative purposes shown by these following features:
- As a user, you can:
  - Access to all the page the web has.
  - You can log in (also log out :D) to access the database that i provided.
  - Once you have logged in:
    - You can view your personal page, which includes: your avatar, background, profile name, achieved titles, sign, **Waifulist** and **Wishlist** and your uploaded posts.
    - The waifulist is the list of characters that you get from the **Roll Waifu** function - when you clicked in the **Roll Waifu** button, the web will take you to the getwaifu/:id route and you can have that character in your collections by clicking to + button. You can undo get that character by click the trash button.
    - The wishlist is the list of characters that you wish to have (you haven't able to get them by using **Roll Waifu** function), you can add a character to this list by clicking the heart button, which appears when you use Roll button and check that character info. You can undo add the characted in the list by click again the heart button.
    - You can upload a post, leave a comment, leave a like to other posts (to your post is also possible), edit your posts and also delete them.
    - You can see other users information.
    - You can follow (or unfollow) other users to see their posts on your main page.
- As an admin, you can:
  - Do all what a user can.
  - You can update the database:
    - CRUD a character.
    - CRUD posts
    - CRUD users information.

### 2. Project functions
Now i will go further into what the web has:
- **Home page (before logged in)**: 
  - I used animated scroll from react lib, rgb cards (rgb is used almost every part in my web :D), also a video (create by me too :>) for the hero section. 
  - Youtube link to demo the home page: https://youtu.be/p-A4p6TSlAQ.
- **About project page**: 
  - I create a carousel to make it looks more fancy. 
  - Youtube link to demo the about us, about project: https://youtu.be/rJ2DlC905KI.
- **Login page**: 
  - there are 3 different backgrounds and 2 different kind of buttons, it will random on reload. The login section has a transition effect when change from sign in to sign up. When you type incorrect password/username or something else, a modal will show up for 3s include error message. 
  - Youtube link to demo the login page: https://youtu.be/2q6L3ETOcIA.
- **User page**: 
  - About changing ava and background: currently you can't choose image from your local machine, i provided 3 different backgrounds/avatar for you to choose.
  - You can change your username by click the setting button and a modal will show up.
  - You can click into the title to see the condition of how to have that title (for now i only created 3 titles).
  - In the waifulist and wishlist there is a pagination using react-paginate. 
  - Youtube link to demo the user page: https://youtu.be/8hf4GGneAXc.
- **Waifu Database and Waifu Info**:
  - An RGB input box to find the character you're looking for. 
  - You can sort the categories, change the database list: tables/image list (has a dropdown when you hover).
  - When you use all of your rolls, the countdown will be display on all the page. Even if you close the tab or go somewhere else then comeback, the number of rolls you have left will be saved / the countdown still continue to count (this is done by using **local Storage**)
  - In the **waifu info**, i provide a link to where you can read the manga/the game that has the character. 
  - Youtube link to demo the waifuDB: https://youtu.be/I7mSlQXJDV4.
- **Posts page**:
  - In the all posts page:
    - You can select three type of display: newest posts, your posts, followed people posts.
    - If the post is yours, then you can select the edit button to edit/delete the post. If its not yours, then a follow/followed button will be display.
    - You can click in the name of the author to see their info.
    - You can click in the content part or the comment icon to go that post detail page to see the comments and also to comment.
    - Youtube link to demo the posts page: https://youtu.be/oyRb3UoMgF8.
- **Security and preservation**:
  - I used **jwt** to create token which helps the user do not have to login again everytime they enter the web.
  - For password i encoded them using argon2 library.
  - Before you logged in, you can only access the home page (before logged in), about us, about project, login page. If you try to access the page that requires authencation, you will be route back to the login page.
- **Loading**: i add a lot of gifs for loading when fetching data :D (the current database i have is around 1xxx character).

### 3. Things to improve and bugs
- **The folder structure and reuse component**: i do not structured the file correctly because i didn't plan the project clearly at first which leads to i have copy and paste a lot when use again those components (Ex: the posts, the navbar,...).
-  **The problems with the roll times and countdown**: this happens when you use all of your rolls (or use some of - Ex: 5/10) then you logged in using another account, the amount of rolls instead of 10 it will be 5. This happened because i used **local Storage** to store the value => _still haven't figure how to fix_.
-  **The problem with routing**: the problem is that if you know what the route url is, for example: i know the route to the get waifu page and i can type the correct url to access though this route is only accessible when you use the **Roll Waifu** button => _still not know how to fix_.
-  **Cannot handle too large data (around > 10^4)**: because my logic has complexity up to O(n^2) so when the data is large, the loading time is getting long => _still haven't figure how to fix_.
-  **_Still updating..._**

### 4. Future update features
- Add tags sorting
- Add comment section to waifu info so people can discuss more and sorting information easier.
- Add realtime chat and trading (hard).
- Add reply to comment, upload a post with more than 1 images, upload a post with video...
-  **_Still updating..._**

>**_Thank you for reading, in this readme file if there is any mistake in grammar or manner, i hope you can forgive. For further discussion, i'm looking forward to discuss directly with you. Again, thank you for reading my project!_**

