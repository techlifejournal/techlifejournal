import React from 'react'
import ContentList from './ContentList'
import styled from 'styled-components'
function Index() {
    return (
        <section>
            <div className="mt-10 md:mt-24 text-center ">
                <h1 className="" > <UndrLine >choose an article</UndrLine></h1>
            </div>
            <ContentList />
        </section>
    )
}
export default Index

const UndrLine = styled.span`
background: linear-gradient(to left, #f69ec4, #f9dd94 100%);
background-position: 0 100%;
background-size: 100% 2px;
background-repeat: repeat-x;
`