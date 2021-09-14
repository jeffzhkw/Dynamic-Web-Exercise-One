import React from 'react';
//global import react

function ArticleListing(){
    //regular js
    //const aVar = "some value"
    const listTitle = "`Articles"
    return(
        //<!--returning html here-->
        <div>
            <h1>{listTitle}</h1> 
        </div>
    );
}

//exporting this function so that other files can access
export default ArticleListing;
