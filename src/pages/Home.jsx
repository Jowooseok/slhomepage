import React, { useRef, useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import Images from '../assets/Images';
import Videos from '../assets/Videos';
import { Modal } from 'antd';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';

function Home() {
  const videoRef = useRef(null);
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
        "Thank you for signing up! You'll start receiving updates from the SL Protocol soon."
      );
    } catch (err) {
      console.error('Error adding document: ', err);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: 'calc(100vh - 4rem)' }} // 상단바 높이를 제외한 화면 높이
    >
      {/* 여백을 위한 컨테이너 */}
      <div className="absolute inset-0 flex items-center justify-center md:p-8 p-4 md:pt-0 pt-0">
        {/* 비디오 및 오버레이 컨테이너 */}
        <div className="relative w-full h-full">
          {/* 배경 비디오 */}
          <video
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            src={Videos.CRXVedio}
            autoPlay
            loop
            muted
            playsInline
            style={{ pointerEvents: 'none' }}
          />

          {/* 반투명 오버레이 */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

          {/* 오버레이 콘텐츠 */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 p-4 space-y-8">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-snug">
              Let's make a medical AI & save lives <br />
              Your data saves lives
            </h1>

            {/* 이메일 구독 폼 */}
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

            {/* 하단의 'Play Video' 버튼 */}
            <div className=" pt-8">
              <button
                onClick={showModal}
                className="flex items-center text-white text-base md:text-xl focus:outline-none"
              >
                <FaPlayCircle className="mr-2 " />
                Play Video
              </button>
            </div>
          </div>
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
          ref={videoRef}
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
