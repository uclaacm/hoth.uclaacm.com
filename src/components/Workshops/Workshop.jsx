import React, {useState} from 'react';
import '../../styles/Workshops.css';
import ReactPlayer from 'react-player/youtube';
import { Github, Youtube, Monitor } from '@geist-ui/icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function Workshop({ title, youtube, author, description, readme, slides}) {

    const [isPlayerVisible, setIsPlayerVisible] = useState(false);
    
    const README =  readme ?
                    <button className='workshop-button'>
                        <a className='workshop-link' href={readme} target='_blank' rel='noreferrer'>
                            <Github size={28} />
                        </a>
                    </button> : null;

    const SLIDES =  slides ? 
                    <button className='workshop-button'>
                        <a className='workshop-link' href={slides} target='_blank' rel='noreferrer'>
                            <Monitor size={28} />
                        </a>
                    </button> : null;
    return (
        <div className='workshop-container'>

            {/* Lazy loads thumbnail images
            video player is not actually loaded until a thumbnail is clicked */}
            <div className='video-container'>
                {!isPlayerVisible ? (
                    <>
                        <LazyLoadImage
                            className='video-thumbnail'
                            src={`https://img.youtube.com/vi/${youtube.split('/').pop()}/maxresdefault.jpg`}
                            alt={title}
                            effect='blur'
                            width='100%'
                            height='100%'
                            onClick={() => setIsPlayerVisible(true)}
                        />
                        <div 
                            className='video-overlay'
                            onClick={() => setIsPlayerVisible(true)}
                        >
                            <div className='play-button'>
                                <div className='play-button-triangle' />
                            </div>
                        </div>
                    </>
                ) : (
                    <ReactPlayer
                        className='workshop-video'
                        id={'id_' + title.replace(/ /g, '_')}
                        controls={true}
                        width='100%'
                        height='100%'
                        url={youtube}
                    />
                )}
            </div>

            <hgroup className='workshop-header'>
                <h3 className='workshop-title'>{title}</h3>
                <h4 className='workshop-author'>Taught by: {author}</h4>
            </hgroup>
            <div className='workshop-links'>
                <button className='workshop-button'>
                    <a className='workshop-link' href={youtube} target='_blank' rel='noreferrer'>
                        <Youtube size={28} />
                    </a>
                </button>
                {README}
                {SLIDES}
            </div>
            <p className='workshop-description'>{description}</p>
        </div>
    );
}