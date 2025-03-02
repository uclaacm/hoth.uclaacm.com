import React, { useEffect } from 'react';
import '../../styles/Gallery.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Winner({ year, appName, description, category, image, link}) {
    const [currentImage, setCurrentImage] = React.useState(null);
    
    useEffect(() => {
        import(`../../images/gallery-winners/hoth-${year}/${image}.png`)
            .then((image) => {
                setCurrentImage(image.default);
            });
    }, [year, image]);
    
    return (
        <div className='winner-container'>
            <div className='winner-image'>
                <LazyLoadImage 
                    src={currentImage} 
                    alt={appName} 
                    effect="blur"
                    wrapperProps={{
                        style: {transitionDelay: '0.4s'},
                    }}
                    placeholderSrc={currentImage}
                />
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