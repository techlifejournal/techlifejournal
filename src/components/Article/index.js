import React from 'react'
import Article from './ArticlePage'
import Style from '../../../styles/Article.module.css'
function Index({ pageContent }) {
    return (
        <div className={`${Style.article} w-full items-center`}>
            <Article pageContent={pageContent} />
        </div>
    )
}

export default Index
