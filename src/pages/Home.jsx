// 필요한 라이브러리를 설치해야 합니다.
// npm install gsap

import React, { useRef, useState, useEffect } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Videos from '../assets/Videos';
import { Modal } from 'antd';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert('이메일을 입력해주세요.');
      return;
    }

    try {
      await addDoc(collection(db, 'emails'), {
        email: email,
        createdAt: serverTimestamp(),
      });
      setEmail('');
      alert(
        '구독해주셔서 감사합니다! 곧 SL Protocol의 업데이트를 받아보실 수 있습니다.'
      );
    } catch (err) {
      console.error('문서 추가 중 오류 발생: ', err);
    }
  };

  useEffect(() => {
    const overlayElement = overlayRef.current;

    if (overlayElement) {
      gsap.timeline({
        scrollTrigger: {
          trigger: overlayElement,
          start: 'top top',
          end: '+=1000', // 스크롤 거리 조정
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
        {/* 비디오 및 오버레이 컨테이너 */}
        <div className="relative w-full h-screen md:p-8 p-4 md:pt-0 pt-0">
          {/* 비디오와 오버레이를 담은 컨테이너 */}
          <div className="relative w-full h-full">
            {/* 배경 비디오 */}
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

            {/* 반투명 오버레이 */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

            {/* 오버레이 콘텐츠 */}
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

              {/* 이메일 구독 폼 */}
              <form className="w-full max-w-md" onSubmit={handleSubmit}>
                <p className="text-lg md:text-2xl mb-4">업데이트를 구독하세요</p>
                <div className="flex items-center">
                  <input
                    className="appearance-none bg-transparent border border-white rounded-2xl w-full h-12 text-white px-4 leading-tight focus:outline-none text-sm md:text-base"
                    type="email"
                    placeholder="이메일을 입력하세요"
                    aria-label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className="flex-shrink-0 bg-white h-12 hover:bg-gray-200 text-black w-28 font-semibold rounded-2xl ml-2 text-sm md:text-base"
                    type="submit"
                  >
                    구독하기
                  </button>
                </div>
              </form>

              {/* 하단의 'Play Video' 버튼 */}
              <div className="pt-8">
                <button
                  onClick={showModal}
                  className="flex items-center text-base md:text-xl focus:outline-none"
                >
                  <FaPlayCircle className="mr-2" />
                  비디오 재생
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 스크롤 테스트를 위한 추가 섹션들 */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">섹션 1</h2>
          <p className="mb-4">
            이곳은 스크롤을 테스트하기 위한 첫 번째 섹션입니다.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </p>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">섹션 2</h2>
          <p className="mb-4">
            이곳은 스크롤을 테스트하기 위한 두 번째 섹션입니다.
          </p>
          <p>
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras
            ullamcorper bibendum bibendum.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">섹션 3</h2>
          <p className="mb-4">
            이곳은 스크롤을 테스트하기 위한 세 번째 섹션입니다.
          </p>
          <p>
            Donec ullamcorper, felis non sodales commodo, lectus velit ultrices
            ipsum, a tincidunt nisi elit quis sem.
          </p>
        </div>
      </div>

      {/* 비디오 모달 */}
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width="80%"
        centered
        bodyStyle={{ padding: 0 }}
      >
        <video
          className="w-full h-full"
          src={Videos.CRXVedio}
          controls
          autoPlay
        />
      </Modal>
    </div>
  );
}

export default Home;
