import React, {useState} from 'react'
import {imagesData} from "../../data/images";
import Modal from "../Modal/Modal";
import SingleImage from "../SingleImage/SingleImage";
import './ImageViewer.scss';

const ImageViewer = () => {

    const [currentIndex, setCurrentIndex] = useState(null);

    const [images, setImages] = useState(imagesData);

    const openModal = (e, index) => {
        setCurrentIndex(index)
    };

    const closeModal = (e) => {
        e && e.preventDefault();
        setCurrentIndex(null)
    };

    const findPrev = (e) => {
        e && e.preventDefault();
        setCurrentIndex(currentIndex - 1)
    };

    const findNext = (e) => {
        e && e.preventDefault();
        setCurrentIndex(currentIndex + 1)
    };

    const onTitleChange = (title) => {
        const newImages = images.map((image, i) => (
            currentIndex === i ? {...image, title} : image)
        );
        setImages(newImages)
    };

    const deleteImage = () => {
        const newImages = images.filter((image, i) => (
            currentIndex !== i
        ));
        if(currentIndex === newImages.length) {
            findPrev()
        }
        setImages(newImages)
    };

    const renderModal = (currentImage) => (
        <Modal
            closeModal={closeModal}
            findPrev={findPrev}
            findNext={findNext}
            prevExist={currentIndex > 0}
            nextExist={currentIndex + 1 < images.length}
            imgSrc={currentImage.src}
            title={currentImage.title}
            onTitleChange={onTitleChange}
            deleteImage={deleteImage}
        />
    );

    const renderEmptyGrid = () => (
        <div className='empty-grid'>
            You have no images
        </div>
    );

    const currentImage = images[currentIndex];

    return (
        <div className="gallery-container">
            <h1 className='gallery-title'>
                Image Viewer
                <span className='gallery-count'>
                    {` (${images ? images.length : 0})`}
                </span>
            </h1>
            {
                images.length ?
                    <div className="gallery-grid">
                        {
                            images.map((img, i) => (
                                <SingleImage
                                  key={`${img.title}_${i}`}
                                  img={img}
                                  openModal={openModal}
                                  index={i}
                                />
                            ))
                        }
                    </div> :
                    renderEmptyGrid()
            }
            {currentImage && renderModal(currentImage)}
        </div>
    );
}

export default ImageViewer;
