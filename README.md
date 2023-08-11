# Phase 3 Project : Student Goals Made Easy

## How and why to use this application ?

In a classroom setting, or even at home, it is often parents or teachers who give their children/students goals to complete. Thanks to this app, children can themselves create specific goals, update them, and keep track of their deadlines in order to be accountable for their own accomplishments.

## Structure of this application

# **Sinatra API backend**
The backend is a database comprised of two models with a one-to-many relationship.
A student has_many goals, and goals belong_to a student.

[img](my-app-frontend/public/ERD.png)

I used Active Record to interact with the data in the database.
Thanks to both classes from my models (student.rb and goal.rb) inheriting from ActiveRecord::Base, I could use belongs_to and has_many Active Record associations. Using those maccros automatically gave me access to methods that I could then use in my application_controller. 

 # **React frontend** 
 
 The front-end of my app, (my-app-frontend) interacts with the database via the API. 
 Through CRUD actions, the user can 
  **Create a new student** : POST which adds a row in our students table in the database.
  **Read a list of students** : GET (including their associated goals that belong_to each student).
  **Create a new goal for a specific student** : POST that will be appended to the student in question.
  **Update any goal** : PATCH that goal, and update the student hash itself too.
  **Delete any goal** : DELETE a goal.
  **Delete any student** : DELETE which will also destroy any goal that belonged to that student, using the "dependent:" option

## Ressources

For this project, I kept the frontend very simple, only using a videolink to "https://youtu.be/i0QfCZjASX8" to introduce and explain the notion of S.M.A.R.T goals.
I used "https://ruby-doc.org/core-2.7.3" and "https://guides.rubyonrails.org" on Active Record migration to get a better understanding of Ruby and Active Record. 