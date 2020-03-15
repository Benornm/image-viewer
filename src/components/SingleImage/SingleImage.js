import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from "react-lazyload";
import './SingleImage.scss';


const SingleImage = ({img, openModal, index}) => {
    const {src, title} = img;

    return (
        <div className='single-image-container'>
            <div className='image-placeholder-container' onClick={(e) => openModal(e, index)}>
                <div className='image-height-placeholder'>
                    <LazyLoad offset={150}>
                        <img className='single-image' src={src} alt={title}/>
                    </LazyLoad>
                </div>
            </div>

            <div className='image-details'>
                {title}
            </div>
        </div>
    );
}

SingleImage.propTypes = {
    img: PropTypes.shape({
        src: PropTypes.string,
        title: PropTypes.string
    }),
    openModal: PropTypes.func,
    index: PropTypes.number,
};

export default SingleImage;
