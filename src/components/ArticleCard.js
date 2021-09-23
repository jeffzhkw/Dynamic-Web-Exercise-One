import React from "react";

function ArticleCard({article}){
    
    const newDate = new Date(article.publishedDate);
    const dateString = newDate.toDateString();
    // const dateString = `${newDate.getMonth()}/${newDate.getMonth()}/${newDate.getFullYear()}`


    return(
        <div className = "ArticleCardWrapper">
            <div className = "ArticleCardImage">
                <img src={article.image.url} alt = {article.image.alt} />
            </div>
            <div className = "ArticleCardText">
                <h2 className = "ArticleCardTitle">{article.title}</h2>
                <p className = "ArticleCardDate">{dateString}</p>
                <p className = "ArticleCardBlurb">{article.blurb}</p>
                <p className = "ArticleCardLink">
                    <a href = {`/article/${article.id}`}>Read more</a>
                </p>
            </div>
        </div>
    )
}

export default ArticleCard;