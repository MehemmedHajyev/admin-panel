import React from "react";
import AboutUsImage from "../elements/Aboutusimage";
import Imagecolsection from "../elements/Imagecolsection";
import { Helmet } from 'react-helmet-async';
import Map from "../elements/Map";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About page!</title>
                <meta name='description' content='This is a about page la la la la' />
            </Helmet>
            <AboutUsImage />
            <Imagecolsection />
            <Map/>
        </div>
    );
};

export default About;
