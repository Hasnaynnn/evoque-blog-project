import Head from 'next/head'
import React from 'react'

const CustomHead = ({ title, description, keyword }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keyword} />
        </Head>
    )
}

export default CustomHead