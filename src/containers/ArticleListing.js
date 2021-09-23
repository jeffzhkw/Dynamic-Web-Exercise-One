import React from 'react';
//global import react
import ArticleCard from '../components/ArticleCard';
import Data from '../components/data.json';

function ArticleListing(){
    //regular js
    //const aVar = "some value"
    const listTitle = `This is a list of articles`;
    return(
        //<!--returning html(JSX) here-->
        <div className = "ArticleListingWrapper">
            <h1 className = "HeaderOneStyle">{listTitle}</h1>
            
            {Data.map((article, i)=>(
                <ArticleCard key = {i} article = {article}/>
            ))}
            
        </div>
    );
}

//exporting this function so that other files can access
export default ArticleListing;
