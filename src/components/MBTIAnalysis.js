import React, { useState } from 'react';
import '../styles/components/MBTIAnalysis.css';

const mbtiTypes = [
  'INTJ', 'INTP', 'ENTJ', 'ENTP',
  'INFJ', 'INFP', 'ENFJ', 'ENFP',
  'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
  'ISTP', 'ISFP', 'ESTP', 'ESFP'
];

const cognitiveFunction = {
  'INTJ': ['Ni', 'Te', 'Fi', 'Se'],
  'INTP': ['Ti', 'Ne', 'Si', 'Fe'],
  // ... 添加其他MBTI类型的认知功能排列
};

const functionDescriptions = {
  'Ni': 'Internal Intuition - Focuses on internal abstract patterns and insights.',
  'Ne': 'External Intuition - Explores external possibilities and connections.',
  'Si': 'Internal Sensing - Relies on internal sensory experiences and memories.',
  'Se': 'External Sensing - Engages with the immediate physical environment.',
  'Fi': 'Internal Feeling - Makes decisions based on internal values and emotions.',
  'Fe': 'External Feeling - Considers external harmony and others\' emotions.',
  'Ti': 'Internal Thinking - Analyzes and categorizes information internally.',
  'Te': 'External Thinking - Organizes and structures the external world logically.'
};

const MBTIAnalysis = () => {
  const [selectedType, setSelectedType] = useState('');

  return (
    <div className="mbti-analysis">
      <h2>MBTI Cognitive Functions Analysis</h2>
      <div className="type-selector">
        <label htmlFor="mbtiType">Select your MBTI type:</label>
        <select
          id="mbtiType"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">Choose your type</option>
          {mbtiTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      {selectedType && (
        <div className="function-analysis">
          <h3>{selectedType} Cognitive Functions</h3>
          <ul>
            {cognitiveFunction[selectedType].map((func, index) => (
              <li key={func}>
                <strong>{func}</strong> - {functionDescriptions[func]}
                <p>Position {index + 1}: {index === 0 ? 'Dominant' : index === 1 ? 'Auxiliary' : index === 2 ? 'Tertiary' : 'Inferior'}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MBTIAnalysis;