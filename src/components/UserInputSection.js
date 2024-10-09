import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/components/UserInputSection.css';

const mbtiTypes = [
  'INTJ', 'INTP', 'ENTJ', 'ENTP',
  'INFJ', 'INFP', 'ENFJ', 'ENFP',
  'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
  'ISTP', 'ISFP', 'ESTP', 'ESFP'
];

const UserInputSection = () => {
  const [userType, setUserType] = useState('');
  const [partnerType, setPartnerType] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/analysis?user=${userType}&partner=${partnerType}`);
  };

  return (
    <section className="user-input-section">
      <h2>Enter Your MBTI Types</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="userType">Your MBTI Type:</label>
          <select
            id="userType"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="">Select your type</option>
            {mbtiTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="partnerType">Your Partner's MBTI Type:</label>
          <select
            id="partnerType"
            value={partnerType}
            onChange={(e) => setPartnerType(e.target.value)}
            required
          >
            <option value="">Select partner's type</option>
            {mbtiTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="generate-button">Generate Analysis</button>
      </form>
    </section>
  );
};

export default UserInputSection;