import React from 'react';
import "./Profile.css";

const ProfilePage = () => {
  const user = {
    name: 'John Doe', 
    bio: 'Passionate developer with a love for React.js',
    location: 'New York City',
    interests: ['React.js', 'JavaScript', 'Web Development', 'UI/UX Design'],
    socialMedia: {
      twitter: 'johndoe',
      github: 'johndoe',
      linkedin: 'johndoe',
    },
    
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <h1>{user.name}</h1>
        <p>{user.bio}</p>
        <input type="image" className="profileimage" img src = {'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg'} alt="photo" />


        <p>{user.location}</p>
      </div>
      <div className="profile-interests">
        <h2>Interests:</h2>
        <ul>
          {user.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
      <div className="profile-social">
        <h2>Social Media:</h2>
        <ul>
          <li>
            <a href={`https://twitter.com/${user.socialMedia.twitter}`} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href={`https://github.com/${user.socialMedia.github}`} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={`https://linkedin.com/in/${user.socialMedia.linkedin}`} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
