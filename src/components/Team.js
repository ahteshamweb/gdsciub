import React from 'react';
import './Team.css';
import TeamCard from './TeamCard';

const Team = () => {
    return (
        <div className="team">
            <div className="team__title">
                <h1>Meet Our Team</h1>
                <p>Passionate students are driving the success of the program.</p>
            </div>
            <div className="teamCards">
                <TeamCard
                    name="Sharjeel Yunus"
                    clas="Computer Science"
                    img="https://firebasestorage.googleapis.com/v0/b/gdsciub.appspot.com/o/Team%2022%2Fsharjeel.jpg?alt=media&token=17dec942-9b6c-4400-9698-b5d7f299ef63"
                    role="Community Lead"
                    web="https://www.sharjeelyunus.me/"
                    github="https://github.com/sharjeelyunus"
                    linkedIn="https://www.linkedin.com/in/sharjeel-yunus/"
                />
                <TeamCard
                    name="Aadil Saeed"
                    clas="Computer Science"
                    img=""
                    role="Core Team Member"
                    web="/"
                    github="/"
                    linkedIn="/"
                />
                <TeamCard
                    name="Arbaz Sohail"
                    clas="Computer Science"
                    img=""
                    role="Core Team Member"
                    web="/"
                    github="/"
                    linkedIn="/"
                />
            </div>
            <div className="teamCards">
                <TeamCard
                    name="/"
                    clas="/"
                    img="/"
                    role="/"
                    web="/"
                    github="/"
                    linkedIn="/"
                />
                <TeamCard
                    name="/"
                    clas="/"
                    img=""
                    role="Core Team Member"
                    web="/"
                    github="/"
                    linkedIn="/"
                />
                <TeamCard
                    name="/"
                    clas="/"
                    img=""
                    role="Core Team Member"
                    web="/"
                    github="/"
                />
            </div>
            <div className="teamCards">
                <TeamCard
                    name="/"
                    clas="/"
                    img="/"
                    role="/"
                    web="/"
                    github="/"
                    linkedIn="/"
                />
                <TeamCard
                    name="/"
                    clas="/"
                    img=""
                    role="Core Team Member"
                    web="/"
                    github="/"
                    linkedIn="/"
                />
            </div>
        </div>
    )
}

export default Team;
