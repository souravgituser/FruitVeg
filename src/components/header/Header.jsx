import { Link, useLocation } from "react-router";
import iconApp from "../../assets/app.png"
import iconSearch from "../../assets/search.png"
import iconCart from "../../assets/cart.png"
import logo from "../../assets/logo.png"
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contextAPI/CartContext";
import SearchResultCard from "../SearchResultCard";
import Products from "../../../public/data/product.json";

function Header() {
    const {cartCount} = useContext(CartContext)
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [search, setSearch] = useState("");
    // const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const location = useLocation();
    const handleSearch = ()=> {
        console.log("Search clicked");
        setIsSearchOpen(prev => !prev);
    }

    const handleSearchInput = (e) => {
        setSearch(e.target.value.toLowerCase());
        // setSearchQuery(e.target.value);
        const results = Products?.products?.filter(product=> product.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setSearchResults(results);
    }

    const handleCloseSearch = () => {
        setIsSearchOpen(false);
        setSearch("");
        setSearchResults([]);
    }

    useEffect(()=> {
      setIsSearchOpen(false);
        setSearch("");
        setSearchResults([]);
    }, [location]);

  return (
    <>
    <header className="sticky-top bg-light">
        <div className="container logo-wrap">
            <div className="row align-items-center">
                <div className="col-4">
                    <div className="appIcon">
                        <img src={iconApp} className="img-fluid" alt="App" />
                    </div>
                </div>
                <div className="col-4 text-center">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} className="img-fluid" />
                    </Link>
                </div>
                <div className="col-4">
                    <ul className="p-0 iconwrap mb-0">
                        <li>
                            <button type='button' className="bg-transparent border-0" onClick={handleSearch}>
                                <img src={iconSearch} />
                            </button>
                        </li>
                        <li className="position-relative">
                            <Link to="/cart">
                                <img src={iconCart}/>
                            </Link>
                            <div className="cartCount">{cartCount}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="bg-primary navWrap">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-md">
                            <div className="container-fluid">

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/about">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/productlisting">Product</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/juice">Juice</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contactus">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        {isSearchOpen &&
            <div className="searchMain">
                <div className="searchWrap">
                    <div className="container">
                        <div className="row">
                            <div className="inputWrap">
                                <div className="mb-3 position-relative">
                                    <input type="text" onChange={handleSearchInput} value={search} placeholder="Search" class="form-control" id="searchField"/>
                                    <div className="crossSearch" onClick={handleCloseSearch}><i class="fa fa-times-circle-o" aria-hidden="true"></i></div>
                                </div>
                            </div>
                            <div className="col-12">
                                <ul className="searchResult" style={{overflow: "auto", maxHeight: "400px"}}>
                                    {searchResults.length > 0 ? searchResults?.map(product=> (
                                        <SearchResultCard key={product.id} data={product} onClick={handleCloseSearch} />
                                    )) : (
                                        <li className="text-center">No results found</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    </header>
    </>
  )
}

export default Header
