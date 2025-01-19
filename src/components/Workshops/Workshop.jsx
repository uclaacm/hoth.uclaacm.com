import React, {useState} from 'react';
import '../../styles/Workshops.css';
import ReactPlayer from 'react-player/youtube';
import { Github, Youtube, File } from '@geist-ui/icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function Workshop({ title, youtube, author, description, readme, slides}) {

    const [isPlayerVisible, setIsPlayerVisible] = useState(false);
    
    const README =  readme ?
                    <button className='workshop-button'>
                        <Github color='var(--hackAccent)' size={28} />
                        <a className='workshop-link' href={readme} target='_blank' rel='noreferrer'>&nbsp; Readme</a>
                    </button> : null;

    const SLIDES =  slides ? 
                    <button className='workshop-button'>
                        <File color='var(--hackAccent)' size={28} />
                        <a className='workshop-link' href={slides} target='_blank' rel='noreferrer'>&nbsp; Slides</a>
                    </button> : null;
    return (
        <div className='workshop-container'>

            {/* Lazy loads thumbnail images
            video player is not actually loaded until a thumbnail is clicked */}
            {!isPlayerVisible && (
                <LazyLoadImage
                    className='video-thumbnail'
                    src={`https://img.youtube.com/vi/${youtube.split('/').pop()}/0.jpg`}
                    alt={title}
                    effect='blur'
                    onClick={() => setIsPlayerVisible(true)}
                    style={{ cursor: 'pointer', width: '100%' }}
                />
            )}
            {isPlayerVisible && (
                <ReactPlayer
                    className='workshop-video'
                    id={'id_' + title.replace(/ /g, '_')}
                    controls={true}
                    width='100%'
                    url={youtube}
                />
            )}

            <hgroup className='workshop-header'>
                <h3 className='workshop-title'>{title}</h3>
                <h4 className='workshop-author'>Taught by: {author}</h4>
            </hgroup>
            <p className='workshop-description'>{description}</p>
            <div className='workshop-links'>
                <button className='workshop-button'>
                    <Youtube color='var(--hackAccent)' size={28} />
                    <a className='workshop-link' href={youtube} target='_blank' rel='noreferrer'>&nbsp; Video</a>
                </button>
                {README}
                {SLIDES}
            </div>
        </div>
    );
}