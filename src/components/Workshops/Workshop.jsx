import React from 'react';
import '../../styles/Workshops.css';
import ReactPlayer from 'react-player/youtube';
import { Github, Youtube, File } from '@geist-ui/icons';


export default function Workshop({ title, youtube, author, description, readme, slides}) {

    
    const README =  readme ?
                    <button className='workshop-button'>
                        <Github color='var(--hackAccent)' size={28} />
                        <a className='workshop-link' href={readme} target='_blank' rel='noreferrer'>Readme</a>
                    </button> : null;

    const SLIDES =  slides ? 
                    <button className='workshop-button'>
                        <File color='var(--hackAccent)' size={28} />
                        <a className='workshop-link' href={slides} target='_blank' rel='noreferrer'>Slides</a>
                    </button> : null;
    return (
        <div className='workshop-container'>
            <ReactPlayer 
                className='workshop-video'
                id={'id_' + title.replace(/ /g, '_')}
                controls={true}
                width='100%'
                url={youtube} />
            <hgroup className='workshop-header'>
                <h3 className='workshop-title'>{title}</h3>
                <h4 className='workshop-author'>Taught by: {author}</h4>
            </hgroup>
            <p className='workshop-description'>{description}</p>
            <div className='workshop-links'>
                <button className='workshop-button'>
                    <Youtube color='var(--hackAccent)' size={28} />
                    <a className='workshop-link' href={youtube} target='_blank' rel='noreferrer'>Video</a>
                </button>
                {README}
                {SLIDES}
            </div>
        </div>
    );
}