import React from 'react'
import { useParams } from 'react-router-dom';
import './collection.styles.scss'
import CollectionPageWithProps from './collection_whichReseiveProps.component'

const CollectionPage = () => {
    const params = useParams();
    return (
    <div>
        <CollectionPageWithProps params = {params} />
    </div>
)}


export default CollectionPage;

