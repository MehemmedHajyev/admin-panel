import React , {useEffect} from "react";
import Image from "../../assets/img/image";
import {useNavigate} from "react-router-dom";
import { connect  } from "react-redux";
import { getProduct  , filterProducts} from "../../redux/actions";

const ResultList = ({ products , getProduct , filterProducts }) => {
    const navigate = useNavigate();


    useEffect(() => {
        getProduct()
    }, []);

    return (
        <div>
            {products.map(( { name , link  , heading , description , local_rating , global_rating , tags} )=>(
                  <div className="search-result-card similar-content-design">
                  <div className="search-result-header-wrapper">
                      <div className="result-first-part">
                          <div className="result-logo">
                              <img src={Image.Base} alt="logo" />
                              <h6>{name}</h6>
                          </div>
                          <p>{link}</p>
                      </div>
                      <div className="result-second-part">
                          <img src={Image.Alexa} alt="" />
                          <div className="local-rating">
                              <h1>{local_rating}</h1>
                              <p>Local rating</p>
                          </div>
                          <div className="global-rating">
                              <h1>{global_rating}</h1>
                              <p>Global rating</p>
                          </div>
                      </div>
                  </div>
                  <hr className="search-result-hr" />
                  <div className="search-result-body">
                      <h1>
                          <span onClick={() => navigate("ResultItem")}>Adobe</span>: 
                          {heading}
                      </h1>
                      <p>
                          <span onClick={() => navigate("ResultItem")}>Adobe</span> 
                          {description}
                      </p>
                      <div className="detail-result-tags">
                        {tags.map((tag)=>{
                            return <div  onClick={()=>{filterProducts(tag)}} > {tag} </div>
                        })}
                      </div>
                  </div>
              </div>
            ))}
          
        </div>
    );
};


const mapStateToProps = ({products}) =>({
    products
})

export default connect(mapStateToProps , { getProduct  , filterProducts})(ResultList)   ;
