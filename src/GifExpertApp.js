import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = ({ title }) => {

    const [categories, setCategories] = useState(["goku z"])

    return (
        <>
            <h1>{title}</h1>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category} 
                        />
                    ))

                }
            </ol>
        </>
    )
}

GifExpertApp.propTypes = {}
GifExpertApp.defaultProps = {
    title: 'GifExpertApp'
}

export default GifExpertApp