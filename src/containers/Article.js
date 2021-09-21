import React, {useEffect, useState} from 'react';
import ArticleListing from './ArticleListing';
import {useParams} from "react-router-dom"
import Data from '../components/data.json';

function Article(){
    
    const [article, setArticle] = useState({});

    let { id } = useParams();

    useEffect(()=>{
        const dataToSet = Data.find((item) => item.id === id);
        setArticle(dataToSet);
        console.log(dataToSet);
    }, [id]);

    return(
        <main>
            <section className = "ArticleHeader">
                <div className = "ArticleHeaderText">
                    <h1 className = "HeaderOne">{article.title}</h1>
                    <p className = "ArticleHeaderDate">{article.publishedDate}</p>
                    <p className = "ArticleHeaderBlurb">{article.blurb}</p>
                </div>
            </section>
            <section className = "ArticleText">
                {article.articleText &&
                    article.articleText.map((text, i)=>{
                        return <p key={i}>{text.data}</p>;
                    })
                }
                <p>Text</p>
                <h2>Header Two</h2>
                <h3>Header Three</h3>
            </section>
            <section>
                
            </section>
        </main>
        
       
    );
}

export default Article;