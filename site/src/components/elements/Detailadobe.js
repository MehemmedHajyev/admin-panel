import Image from "../../assets/img/image";
import "../../assets/css/main.css";
const DetailAdobe = () => {
    return (
        <div className="container">
            <div className="detailadobe similar-content-design">
                <div className="search-result-header-wrapper">
                    <div className="result-first-part">
                        <div className="result-logo">
                            <img src={Image.Base} alt="logo" />
                            <h6>Adobe</h6>
                        </div>
                        <p>https://www.adobe.com</p>
                    </div>
                    <div className="result-second-part">
                        <img src={Image.Alexa} alt="" />
                        <div className="local-rating">
                            <h1>3.5</h1>
                            <p>Local rating</p>
                        </div>
                        <div className="global-rating">
                            <h1>5.0</h1>
                            <p>Global rating</p>
                        </div>
                    </div>
                </div>
                <hr className="search-result-hr" />
                <div className="search-result-body">
                    <h1>
                        <span>Adobe</span>: Creative, marketing and document management ...
                    </h1>
                    <p>
                        <span>Adobe</span> is changing the world through digital experiences. We help our customers
                        create, deliver and optimize content and applications.
                    </p>
                    <div className="detail-result-tags">
                        <div>adobe</div>
                        <div>design</div>
                        <div>creative</div>
                        <div>designer</div>
                        <div>photoshop</div>
                        <div>illustrator</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DetailAdobe;
