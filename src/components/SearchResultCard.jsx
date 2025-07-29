import React from 'react'
import { Link } from 'react-router';

const SearchResultCard = ({data, onClick}) => {
  const {thumbnailImage, title, price} = data || {};
  const {sale} = price || {};
  return (
    <li className="border-bottom py-3">
        <Link to={`/product/${data.id}`} className="d-flex align-items-center searchLinks" onClick={onClick}>
          <div className="searchMedia">
              <img src={thumbnailImage} className="img-fluid" alt="product"/>
          </div>
          <div className="searchContent">
              <h3 className="mb-0">{title}</h3>
              <p className="mb-0">Rs. <span>{sale?.toFixed(2)}</span></p>
          </div>
        </Link>
    </li>
  )
}

export default SearchResultCard
