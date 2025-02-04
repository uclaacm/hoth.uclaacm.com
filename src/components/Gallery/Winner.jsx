import React from 'react';
import '../../styles/Gallery.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Winner({ year, appName, description, category, image, link}) {

    const [currentImage, setCurrentImage] = React.useState(null);
    
    import(`../../images/gallery-winners/hoth-${year}/${image}.png`).then((image) => {
        setCurrentImage(image.default);
    });
    
    return (
        <div className='winner-container'>
            <div className='winner-image'>
                <LazyLoadImage src={currentImage} alt={appName} />
            </div>
            <div className='winner-info'>
                <h2 className='winner-title'>{appName}</h2>
                <p className='winner-category'>{category}</p>
                <p className='winner-description'>{description}</p>
                <button className='winner-button'>
                    <a href={link} target='_blank' rel='noreferrer'>See Project</a>
                </button>
            </div>
        </div>
    );
}