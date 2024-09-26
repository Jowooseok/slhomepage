import React, { useRef, useState, useEffect } from 'react';
import { FaPlayCircle } from 'react-icons/fa'; // 재생 아이콘
import { gsap } from 'gsap'; // GSAP 애니메이션 라이브러리
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // ScrollTrigger 플러그인
import Videos from '../assets/Videos'; // 비디오 파일 경로
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; // Firebase Firestore 함수들
import { db } from '../firebaseConfig'; // Firebase 설정

// ScrollTrigger 플러그인을 GSAP에 등록
gsap.registerPlugin(ScrollTrigger);

function Home() {
  // 비디오 요소를 참조하기 위한 useRef
  const videoRef = useRef(null);
  // 오버레이 요소를 참조하기 위한 useRef
  const overlayRef = useRef(null);
  
  // 네 개의 요소에 대한 refs
  const headingRef = useRef(null); // "Let's make a medical AI & save lives" 텍스트
  const subheadingRef = useRef(null); // "Your data saves lives" 텍스트
  const formRef = useRef(null); // 구독 폼
  const buttonRef = useRef(null); // Play Video 버튼

  // 이메일 입력값을 관리하기 위한 상태
  const [email, setEmail] = useState('');

  // 이메일 구독 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 간단한 이메일 정규식
    if (!email || !emailRegex.test(email)) { // 이메일 입력값이 비어있거나 유효하지 않은 경우
      alert('Please enter a valid email.');
      return;
    }

    try {
      // Firestore의 'emails' 컬렉션에 새 문서 추가
      await addDoc(collection(db, 'emails'), {
        email: email,
        createdAt: serverTimestamp(), // 서버 타임스탬프 추가
      });
      setEmail(''); // 이메일 입력값 초기화
      alert(
        'Thank you for subscribing! You will soon receive updates from SL Protocol.'
      );
    } catch (err) {
      console.error('Error adding document: ', err);
      alert('There was an error subscribing. Please try again later.');
    }
  };

  // GSAP과 ScrollTrigger를 이용한 애니메이션 초기화
  useEffect(() => {
    const overlayElement = overlayRef.current; // 오버레이 요소 참조

    if (overlayElement) {
      gsap.timeline({
        scrollTrigger: {
          trigger: overlayElement, // 애니메이션의 트리거 요소
          start: 'top top', // 시작 지점
          end: '+=500', // 애니메이션이 진행될 스크롤 거리
          scrub: true, // 스크롤과 애니메이션 동기화
          pin: true, // 트리거 요소를 고정
          anticipatePin: 1,
          markers: { startColor: "green", endColor: "red" }, // 오버레이 마커 색상 설정
        },
      })
      .to(overlayElement, { opacity: 1, duration: 0 }) // 초기 투명도 설정
      .to(
        overlayElement,
        {
          opacity: 0, // 스크롤에 따라 투명도 감소
          ease: 'none',
        },
        '+=0.5' // 0.5초 후에 애니메이션 시작
      );
    }

    // 각 요소에 개별 ScrollTrigger 마커 및 애니메이션 설정
    if (headingRef.current) {
      ScrollTrigger.create({
        trigger: headingRef.current,
        start: 'top 80%',
        end: 'top 60%',
        markers: { startColor: "blue", endColor: "blue" }, // 동일한 색상으로 설정
        onEnter: () => console.log('헤딩 1이(가) 뷰포트에 진입했습니다.'),
        onLeave: () => console.log('헤딩 1이(가) 뷰포트에서 벗어났습니다.'),
        // 애니메이션 예시: 헤딩이 나타날 때 스크롤과 함께 이동
        onEnter: () => {
          gsap.fromTo(headingRef.current, 
            { opacity: 0, y: -50 }, 
            { opacity: 1, y: 0, duration: 1 }
          );
        },
      });
    }

    if (subheadingRef.current) {
      ScrollTrigger.create({
        trigger: subheadingRef.current,
        start: 'top 80%',
        end: 'top 60%',
        markers: { startColor: "cyan", endColor: "cyan" }, // 동일한 색상으로 설정
        onEnter: () => console.log('헤딩 2이(가) 뷰포트에 진입했습니다.'),
        onLeave: () => console.log('헤딩 2이(가) 뷰포트에서 벗어났습니다.'),
        // 애니메이션 예시: 서브헤딩이 나타날 때 페이드 인
        onEnter: () => {
          gsap.fromTo(subheadingRef.current, 
            { opacity: 0 }, 
            { opacity: 1, duration: 1 }
          );
        },
      });
    }

    if (formRef.current) {
      ScrollTrigger.create({
        trigger: formRef.current,
        start: 'top 80%',
        end: 'top 60%',
        markers: { startColor: "magenta", endColor: "magenta" }, // 동일한 색상으로 설정
        onEnter: () => console.log('구독 폼이(가) 뷰포트에 진입했습니다.'),
        onLeave: () => console.log('구독 폼이(가) 뷰포트에서 벗어났습니다.'),
        // 애니메이션 예시: 폼이 나타날 때 슬라이드 업
        onEnter: () => {
          gsap.fromTo(formRef.current, 
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0, duration: 1 }
          );
        },
      });
    }

    if (buttonRef.current) {
      ScrollTrigger.create({
        trigger: buttonRef.current,
        start: 'top 80%',
        end: 'top 60%',
        markers: { startColor: "orange", endColor: "orange" }, // 동일한 색상으로 설정
        onEnter: () => console.log('Play Video 버튼이(가) 뷰포트에 진입했습니다.'),
        onLeave: () => console.log('Play Video 버튼이(가) 뷰포트에서 벗어났습니다.'),
        // 애니메이션 예시: 버튼이 나타날 때 페이드 인과 확대
        onEnter: () => {
          gsap.fromTo(buttonRef.current, 
            { opacity: 0, scale: 0.8 }, 
            { opacity: 1, scale: 1, duration: 1 }
          );
        },
      });
    }

    // 컴포넌트 언마운트 시 모든 ScrollTrigger 인스턴스 제거
    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <div>
      <div className="relative w-full overflow-hidden">
        {/* 비디오와 오버레이를 담는 컨테이너 */}
        <div className="relative w-full h-[95vh] md:p-8 p-4 md:pt-0 pt-0">
          <div className="relative w-full h-full">
            {/* 배경 비디오 */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              src={Videos.IntroVideo} // 비디오 소스
              autoPlay // 자동 재생
              loop // 반복 재생
              muted // 음소거
              playsInline // 인라인 재생
              style={{ pointerEvents: 'none' }} // 사용자 상호작용 방지
            />

            {/* 반투명 검은색 오버레이 */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

            {/* 오버레이 콘텐츠 */}
            <div
              id="overlay" // 오버레이 요소에 id 추가
              ref={overlayRef}
              className="sticky top-0 flex flex-col items-center justify-center text-center z-10 p-4 md:p-8 space-y-8 text-white"
              style={{
                minHeight: '100%',
              }}
            >
              {/* 헤딩 1 */}
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-snug">
                <span ref={headingRef}>Let's make a medical AI & save lives</span> <br />
                <span ref={subheadingRef}>Your data saves lives</span>
              </h1>

              {/* 이메일 구독 폼 */}
              <form ref={formRef} className="w-full max-w-md" onSubmit={handleSubmit}>
                <p className="text-lg md:text-2xl mb-4">Subscribe for updates</p>
                <div className="flex items-center">
                  <input
                    className="appearance-none bg-transparent border border-white rounded-2xl w-full h-12 text-white px-4 leading-tight focus:outline-none text-sm md:text-base"
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email"
                    aria-required="true"
                    aria-invalid={!email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // 입력값 상태 업데이트
                  />
                  <button
                    className="flex-shrink-0 bg-white h-12 hover:bg-gray-200 text-black w-28 font-semibold rounded-2xl ml-2 text-sm md:text-base"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>

              {/* 'Play Video' 버튼 */}
              <div className="pt-8">
                <a
                  ref={buttonRef} // 버튼 요소에 ref 할당
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

      {/* 스크롤 테스트를 위한 추가 섹션들 */}
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
