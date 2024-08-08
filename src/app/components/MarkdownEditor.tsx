'use client'
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const MarkdownEditor = () => {
  const [markdownText, setMarkdownText] = useState('');

  // Use the db variable here
  const markdownsRef = collection(db, 'markdowns');
  addDoc(markdownsRef, {
    text: markdownText,
  }).then(() => {
    console.log('Document added successfully');
  }).catch((error) => {
    console.error('Error adding document:', error);
  });

    return (
      <div className="container mx-auto p-4">
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>
    );
};

export default MarkdownEditor;
