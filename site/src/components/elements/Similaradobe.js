import React from "react";
import DetailAdobe from "./Detailadobe";

const SimilarAdobe = () => {
    return (
        <div className="similar-content-style mt-5">
            <h5 className="similar">Similar Content</h5>
            <div className="side-by-side-search-content d-flex mt-2">
                <DetailAdobe />
                <DetailAdobe />
                <DetailAdobe />
            </div>
        </div>
    );
};

export default SimilarAdobe;
