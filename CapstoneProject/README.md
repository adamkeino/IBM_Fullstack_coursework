# Folder for my IBM Full Stack Developer Professional Certificate Course Capstone Project

This is the folder for the final project. Here are the details:  
You are a new hire at the company. You are assigned the task of building a website that allows new and existing customers to look up different branches by state and look at customer reviews of the various branches.  
Customers should be able to create an account and add their review for any of the branches.  
The management hopes this will bring transparency to the system and also increase the trust customers have in the dealership.

After thorough research and brainstorming, the team developed use cases for anonymous, authorized, and admin users.

## Use cases for anonymous users:
- View the Contact Us page.
- View the About Us page.
- View the list of dealerships.
- Filter the list of dealerships by state:
- Select Show all or a specific state from the State dropdown on the dealership page.
- View all states if nothing is selected in the dropdown.
- View a table of dealerships for the selected state when the form is submitted.
- Click on a dealership to view the reviews for that dealership on the details page with each review displayed on a bootstrap card.
- Log in using their credentials.
## Use cases for authorized users:
In addition to the above, authorized users should be able to write a review for any dealership on the dealership’s page.  
In order to enable authorized users to write their reviews:

- A Review button should be provided against each dealer listed in the dealership table.
- Clicking on the Review button should take the user to the review page.
- Filling the form on the review page and submitting it should add the review.
- On submission, the user should be taken back to the dealership detail page with the submitted review featured at the top of the reviews list, sorted on time.
## Use cases for admin users:
- Log in to the admin site with a predefined username and password.
- Add new make, model, and other attributes.  
Your organization has assigned you as the Lead Full-Stack Software Developer on this project.  
Your job is to develop this portal as part of your Capstone project by following best practices for Full-Stack software development.

# Solution Architecture
The solution will consist of multiple technologies:  

1. The user interacts with the "Dealerships Website", a Django website, through a web browser.  

2. The Django application provides the following microservices for the end user:

    - get_cars/ - To get the list of cars from
    - get_dealers/ - To get the list of dealers
    - get_dealers/:state - To get dealers by state
    - dealer/:id - To get dealer by id
    - review/dealer/:id - To get reviews specific to a dealer
    - add_review/ - To post review about a dealer  

3. The Django application uses SQLite database to store the **Car Make** and the **Car Model** data.

4. The "Dealerships and Reviews Service" is an Express Mongo service running in a Docker container. It provides the following services::

- /fetchDealers - To fetch the dealers
- /fetchDealer/:id - To fetch the dealer by id
- fetchReviews - To fetch all the reviews
- fetchReview/dealer/:id - To fetch reviews for a dealer by id
- /insertReview - To insert a review  

5. "Dealerships Website" interacts with the "Dealership and Reviews Service" through the "Django Proxy Service" contained within the Django Application.  

6. The "Sentiment Analyzer Service" is deployed on IBM Cloud Code Engine, it provides the following service:

- /analyze/:text - To analyze the sentiment of the text passed. It returns positive, negative or neutral.  

7. The "Dealerships Website" consumes the "Sentiment Analyzer Service" to analyze the sentiments of the reviews through the Django Proxy contained within the Django application.