import React from 'react'
import './styles.scss';

type Props = {
    children: React.ReactNode;
}

const SearchCard = ({children}: Props) => (
    <div className="search-container">    
        {children}        
    </div>
);

export default SearchCard;