import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home(){

    return(
        <div>
            <div className="Header-text">
                <h1>Student Goals Made Easy</h1>
                <hr />
            </div>
    

            <article className="Paragraph">
                <header>
                <p>It is always hard to set up some goals, and even harder to follow up on them.</p>
                <p>Thanks to this app, you will be able to set goals, a deadline for each of them and be able to track your progress !</p>
                </header>
                <hr />
                
                
                <section>
                    <h3><u>First, add a new student</u></h3>
                    <p> Click on the <Link to= "/students">Students</Link> link at the top of the page, and on the button "Add a New Student".</p>
                    <p> You will be redirected to a form to create any new student.</p>
                    <p> If you no longer wish to have the student in your database, you can erase them and their associated goals by clicking the <em><u>"Delete "student's name" Card"</u></em> button.</p>
                </section>

                <section>
                    <h3><u>Then, add goals to that student</u></h3>
                    <p> Again, by clicking on the <Link to= "/students">Students</Link> link at the top of the page, you will see a display of all the exisiting students and how many active goals they have.</p>
                    <p> You can either access the student of your choice by clicking on their name</p>
                    <p> This will redirect you to this specific student's page, with a list of their goals. Once again, you can add or modify goals by clicking on the <em><u>"Add Goal</u></em> or <em><u>"Update Goal</u></em> buttons.</p>
                    
                </section>
                <aside><u><strong>Tip :</strong></u> Try to make your goal a <a href="https://youtu.be/i0QfCZjASX8">S.M.A.R.T</a> one !</aside>
            </article>
        </div>
        
    );
};

export default Home;