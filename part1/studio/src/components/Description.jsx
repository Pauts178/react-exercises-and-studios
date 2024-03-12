import React from 'react';
import styles from './Description.module.css';


function RecipeAuthor() {
    let authorLink = 'https://www.the-girl-who-ate-everything.com/chicken-and-black-bean-flautas/'
    let authorPhoto = 'https://www.the-girl-who-ate-everything.com/wp-content/uploads/2017/06/christy-denney.jpeg'
    let authorName = 'Christy Denney'
    
    return (
     <div className= {styles.recipeAuthorBlock}>
        <img src={authorPhoto} alt = 'Photo of food blogger, Christy Denny' className={styles.imageUpdates}/>
        <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>The Girl Who Ate Everything</a>
        </div>
     </div>
     );
    }

class RecipeDescription extends React.Component {
        render() {
            return (
                <div>
                    <div>
                        <h1>Chicken and Black Bean Flautas</h1>
                        <p>Chicken and Black Bean Flautas are 
                            an easy Mexican appetizer or main 
                            dish filled with chicken, salsa, 
                            black beans, and Pepper Jack cheese. 
                            Top it with a chipotle cream sauce 
                            and guacamole.</p>
                    </div>
                    <RecipeAuthor />
                </div>
            )
        }
    }

    export default RecipeDescription;