import { Link } from "react-router";
import Products from "../../../public/data/product.json"

function shopCategories () {
    const categoryMap = new Map();

    Products.products.forEach(product => {
    const category = product.category;
    if (category && !categoryMap.has(category.slug)) {
      categoryMap.set(category.slug, {
        name: category.name,
        catimage: category.catimage,
        description: category.description || "Fresh and organic vegetables sourced locally."
      });
    }
  });

  const uniqueCategories = Array.from(categoryMap.entries()).map(([slug, value]) => ({
    slug,
    name: value.name,
    description: value.description,
    catimage: value.catimage
  }));

  console.log(uniqueCategories);
    return (
        <section className="catediscount-sec">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="titleText">Shop By Categories</h2>
            <p className="mb-0">Looking for something specific? Dive into our categories and uncover the best we have to offer.</p>
          </div>
        </div>
            <div className="grid-box">
              {uniqueCategories?.map((category, index) => (
                <div className={`g-col-6 ${index === 1 ? 'bg-red' : 'bg-green'}`} key={category?.id}>
                  <div className="d-flex flex-wrap align-items-center">
                    <div className="col-xl-6 order-2 order-xl-1 text-white align-self-center">
                      <h3>{category?.name}</h3>
                      <p>{category?.description}</p>
                      <Link to={`/productlisting?category=${category?.slug}`} className="btn btn-warning rounded-pill">SHOP NOW</Link>
                    </div>
                    <div className="col-xl-6 order-1 order-xl-2">
                      <img src={category?.catimage} alt={category?.name} className="img-fluid"/>
                    </div>
                  </div>
                </div>
              ))}
            </div>
      </div>
    </section>
    )
}

export default shopCategories