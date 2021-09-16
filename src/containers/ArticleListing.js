import React from 'react';
//global import react
import ArticleCard from '../components/ArticleCard';
import Data from '../components/data.json';

function ArticleListing(){
    //regular js
    //const aVar = "some value"
    const listTitle = `This is a list of articles`;
    console.log(Data);
    return(
        //<!--returning html(JSX) here-->
        <div>
            <h1 className = "HeaderOne">{listTitle}</h1>
            {Data.map((article, key)=>(
                <ArticleCard article = {article} key={key}/>
            ))}
            
        </div>
    );
}

//exporting this function so that other files can access
export default ArticleListing;
