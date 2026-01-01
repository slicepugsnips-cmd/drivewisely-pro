import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import ChapterCard from './ChapterCard';

export default function TrainingHub({ userProgress, onStartChapter }) {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const q = query(collection(db, "chapters"), orderBy("chapter_number", "asc"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setChapters(data);
      } catch (e) {
        console.error("Error fetching chapters: ", e);
      } finally {
        setLoading(false);
      }
    };
    fetchChapters();
  }, []);

  if (loading) return <div className="text-[#FF5F1F] text-center py-20 animate-pulse font-black italic">LOADING MISSION...</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-black italic uppercase text-white">
          TRAINING <span className="text-[#FF5F1F]">HUB</span>
        </h1>
        <p className="text-white/40 mt-2">CHOOSE YOUR MODULE. MASTER THE ROAD.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chapters.map((chapter) => {
          // Chapter 1 is always free. Others require is_premium.
          const isLocked = !userProgress.is_premium && chapter.chapter_number > 1;
          
          return (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              isLocked={isLocked}
              onClick={() => !isLocked && onStartChapter(chapter.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
