// You need to install the necessary libraries.
// npm install gsap

import React, { useRef, useState, useEffect } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Videos from '../assets/Videos';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert('Please enter your email.');
      return;
    }

    try {
      await addDoc(collection(db, 'emails'), {
        email: email,
        createdAt: serverTimestamp(),
      });
      setEmail('');
      alert(
        'Thank you for subscribing! You will soon receive updates from SL Protocol.'
      );
    } catch (err) {
      console.error('Error adding document: ', err);
    }
  };

  useEffect(() => {
    const overlayElement = overlayRef.current;

    if (overlayElement) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: overlayElement,
            start: 'top top',
            end: '+=1000', // Adjusted scroll distance
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        })
        .to(overlayElement, { opacity: 1, duration: 0 })
        .to(
          overlayElement,
          {
            opacity: 0,
            ease: 'none',
          },
          '+=0.5'
        );
    }

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <div>
      <div className="relative w-full overflow-hidden">
        {/* Video and Overlay Container */}
        <div className="relative w-full h-[93vh] md:p-8 p-4 md:pt-0 pt-0">
          {/* Container holding the video and overlay */}
          <div className="relative w-full h-full">
            {/* Background Video */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              src={Videos.IntroVideo}
              autoPlay
              loop
              muted
              playsInline
              style={{ pointerEvents: 'none' }}
            />

            {/* Semi-transparent Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

            {/* Overlay Content */}
            <div
              ref={overlayRef}
              className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-4 md:p-8 space-y-8 text-white"
              style={{
                minHeight: '100%',
                position: 'sticky',
                top: 0,
              }}
            >
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-snug">
                Let's make a medical AI & save lives <br />
                Your data saves lives
              </h1>

              {/* Email Subscription Form */}
              <form className="w-full max-w-md" onSubmit={handleSubmit}>
                <p className="text-lg md:text-2xl mb-4">Subscribe for updates</p>
                <div className="flex items-center">
                  <input
                    className="appearance-none bg-transparent border border-white rounded-2xl w-full h-12 text-white px-4 leading-tight focus:outline-none text-sm md:text-base"
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className="flex-shrink-0 bg-white h-12 hover:bg-gray-200 text-black w-28 font-semibold rounded-2xl ml-2 text-sm md:text-base"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>

              {/* 'Play Video' Button */}
              <div className="pt-8">
                <a
                  href="https://drive.google.com/file/d/1FQozCroeIAvCReiDOJkTK6bgh76t4nJ5/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-base md:text-xl focus:outline-none"
                >
                  <FaPlayCircle className="mr-2" />
                  Play Video
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections for Scroll Testing */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Section 1</h2>
          <p className="mb-4">
            This is the first section to test scrolling.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </p>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Section 2</h2>
          <p className="mb-4">
            This is the second section to test scrolling.
          </p>
          <p>
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Section 3</h2>
          <p className="mb-4">
            This is the third section to test scrolling.
          </p>
          <p>
            Donec ullamcorper, felis non sodales commodo, lectus velit ultrices
            ipsum, a tincidunt nisi elit quis sem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
