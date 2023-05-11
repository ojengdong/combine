import React from 'react'
import { useEffect , useState } from 'react';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';
import './GesifanJunche.css'
import videoTim from './당신이 마주할 대전, 당신에게 대전이란.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import GesifanSlide from './GesifanSlide';
import Mainpage from '../Mainpage';
import check1 from './images/로그인 아이콘-05.png'
import check2 from './images/로그인 아이콘-06.png'




const GesifanJunche = () => {

  
  // localStorage.clear()
  // -------------------------------------------
  // const [isGesifanBoxOn, setIsGesifanBoxOn] = useState(false);
  // const [isGesifangongjiOn, setIsGesifangongjiOn] = useState(false);
  // const [isGesifanpageOn, setIsGesifanpageOn] = useState(false);
  // const [isGeshfanModalOn, setIsGeshfanModalOn] = useState(false);

  // const handleButtonClick = () => {
  //   setIsGesifanBoxOn(true);
  //   setIsGesifangongjiOn(false);
  //   setIsGesifanpageOn(true);
  //   setIsGeshfanModalOn(false);
  // }
  // --------------------------------------------

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [postsPerPage] = useState(10); // 페이지당 보여줄 게시물 수
  const [totalPosts, setTotalPosts] = useState(100); // 총 게시물 수 (예시로 100개 설정)
  const [agree, setAgree] = useState(false);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // --------------------------------------------
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);

  const navigate4 = useNavigate()

  const gohome = () => {
    navigate4('/gohome')
  }

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts'));
    if (savedPosts) {
      setPosts(savedPosts);
    }
  }, []);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const date = new Date();

    const post = {
      title: title,
      content: content,
      date: date.toLocaleString(),
      comments: []
    };

    const savedPosts = JSON.parse(localStorage.getItem('posts'));
    if (savedPosts) {
      savedPosts.push(post);
      localStorage.setItem('posts', JSON.stringify(savedPosts));
      setPosts(savedPosts);
    } else {
      localStorage.setItem('posts', JSON.stringify([post]));
      setPosts([post]);
     
    }

    setTitle('');
    setContent('');
  }


 
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // 오늘 날짜
  const GesifanToday = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });



  return (
    
    <div>
      <div className='Daejeon-video-box'>
        <video autoPlay>
        <source src={videoTim} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='goto-mainpage'>
        <Link to="/Mainpage">
          <p>메인페이지로 이동</p>
        </Link>
      </div>
      <div className='scrollAction'>
          <p className='scrollText'>Scroll</p>
          <div className='scrollBox'>
            <div className='scrollBall'></div>
          </div>
        </div>
      
      <div>
        <div className='GesifanJunche-text-line'>
          <div className='GesifanJunche-text-cricle'></div>
        </div>
        <div className='GesifanJunche-text'>
          <div className="GesifanJunche-text-inner">
            <h2>소통으로 미래를 선도하는 대전</h2>
          </div>
            <p>사이버 문화, 열린공간</p>
        </div>
      </div>
      
      
      
      <div className='about-freeboard'>
        <div className='about-freeboard-left'>
          <h3>자유게시판</h3>
        </div>
        <div className='about-freeboard-right lg-only'>
          <p>자유게시판은 자유롭게 의견을 게시 할 수 있는 <span className='freeboard-hightright'>열린공간</span> 열린공간이며,</p>
          <p>자율과 책임이 공존하는 사이버문화 정착을 위하여 <span className='freeboard-hightright'>실명</span> 으로 운영되고 있습니다</p>
          <p>게시된 의견에 대하여는  <span className='freeboard-hightright'>원칙적으로 답변하지 않습니다.</span></p>
          <p>시정관련 건의사항 또는 <span className='freeboard-hightright'>답변을 원하시는 사항은 국민신문고 코너를 이용</span>하시기 바랍니다.</p>
          <div className='about-freeboard-button'>
            <button>국민신문고 코너 바로가기</button>
          </div>
        </div>
        
        <div className='about-freeboard-right md-only'>
          <p>자유게시판은 자유롭게 의견을 게시 할 수 있는 <span className='freeboard-hightright'>열린공간</span> 열린공간이며,</p>
          <p>자율과 책임이 공존하는 사이버문화 정착을 위하여 <span className='freeboard-hightright'>실명</span> 으로 운영되고 있습니다</p>
          <p>게시된 의견에 대하여는  <span className='freeboard-hightright'>원칙적으로 답변하지 않습니다.</span></p>
          <p>시정관련 건의사항 또는 <span className='freeboard-hightright'>답변을 원하시는 사항은 국민신문고 코너를 이용</span>하시기 바랍니다.</p>
          <div className='about-freeboard-button'>
            <button>국민신문고 코너 바로가기</button>
          </div>
        </div>

        <div className='about-freeboard-right sm-only'>
          <p>자유게시판은 자유롭게 의견을 게시 할 수 있는 <span className='freeboard-hightright'>열린공간</span> 열린공간이며,</p>
          <p>자율과 책임이 공존하는 사이버문화 정착을 위하여 <span className='freeboard-hightright'>실명</span> 으로 운영되고 있습니다</p>
          <p>게시된 의견에 대하여는  <span className='freeboard-hightright'>원칙적으로 답변하지 않습니다.</span></p>
          <p>시정관련 건의사항 또는 <span className='freeboard-hightright'>답변을 원하시는 사항은 국민신문고 코너를 이용</span>하시기 바랍니다.</p>
          <div className='about-freeboard-button'>
            <button>국민신문고 코너 바로가기</button>
          </div>
        </div>
       
      </div>


      <div className="freeboard-main-wrapper">
        <div className="freeboard-main-line">
          <div className="freeboard-main-circle"></div>
        </div>
        <div className='freeboard-main-top'>
          <h3>인기게시글</h3>
          <p>시민들이 주목한 게시글을 확인해보세요</p>
        </div>


        <div className="freeboard-main-top-sub">
          <div className='freeborad-today'>
            <span className='today-border'>Today</span>
            <span>{GesifanToday}</span>
          </div>
          <button className='freeboard-main-all-text' onClick={() => {


            document.querySelector('.gesifan-box').classList.add('on')
            document.querySelector('.Gesifangongji').classList.remove('on')
            document.querySelector('.Gesifanpage').classList.add('on')
            document.querySelector('.Geshfan-modal').classList.remove('on')

          }}> 전체글 보러가기 &nbsp; &nbsp;   <FontAwesomeIcon icon={faChevronRight} /></button>
        </div>

        <div className='gesifan-box11'>

          <GesifanSlide></GesifanSlide>

        </div>

        <div className="freeborad-main-line-box">
          <div className='freeborad-main-line-circle'></div>
          <div className='freeborad-main-line1'></div>
          <div className='freeborad-main-line2'></div>
          <div className='freeborad-main-line3'></div>
          <div className='freeborad-main-line4'></div>
        </div>

        <div className="freeboard-focus">
          <div className="freeboard-focus-inner-box">
            <div className='freeboard-detail-btn'>
              <button className='menu-three menu-three1 ' onClick={() => {
                document.querySelector('.gesifan-box').classList.add('on')
                document.querySelector('.Gesifangongji').classList.add('on')
                document.querySelector('.Gesifanpage').classList.remove('on')
                document.querySelector('.Geshfan-modal').classList.remove('on')
              }}>공지사항</button>
              <button className='menu-three menu-three2' onClick={() => {
                document.querySelector('.gesifan-box').classList.remove('on')
                document.querySelector('.Gesifangongji').classList.remove('on')
                document.querySelector('.Gesifanpage').classList.remove('on')
                document.querySelector('.Geshfan-modal').classList.remove('on')
              }}>게시글작성하기</button>
              <button className='menu-three menu-three3' onClick={() => {
                document.querySelector('.gesifan-box').classList.add('on')
                document.querySelector('.Gesifangongji').classList.remove('on')
                document.querySelector('.Gesifanpage').classList.add('on')
                document.querySelector('.Geshfan-modal').classList.remove('on')
              }}>전체게시글</button>
            </div>


            <div className='gesifan-box' >
              <div className="gesifan-box-top">
                <h3>양식에 따라 게시글을 작성해주세요!</h3>
                <p>*은 필수항목 입니다</p>
              </div>
              <form onSubmit={handleSubmit}>
                  <div className='gesifan-box-wrapper'>
                    <div className='gesifan-box-list-1'>
                      <span>게시글선택 <span style={{color:'red'}}>*</span></span>
                      <div className='mySelect-box'>
                        <select id="mySelect" onChange={handleSelectChange}>
                          <option value="칭찬합니다">칭찬합니다</option>
                          <option value="제안합니다">제안합니다</option>
                          <option value="알립니다">알립니다</option>
                          <option value="신고합니다">신고합니다</option>
                          <option value="개선해주세요">개선해주세요</option>
                        </select>
                      </div>
                    </div>

                    <div className='gesifan-box-list-2'>
                      <span><label htmlFor="title">제목 <span style={{color:'red'}}>*</span></label></span>
                     <input type="text" id="title" value={title} onChange={handleTitleChange} required />
                    </div>
        
                    <div className='gesifan-box-list-3'>
                      <span> <label htmlFor="content">내용 <span style={{color:'red'}}>*</span></label></span>
                      <textarea id="content" value={content} onChange={handleContentChange} required></textarea>
                    </div>
                  </div>
               
                <div className='gesifan-box-list-4'>
                  <p className='gesifan-box-list-4-top'>
                    <h3>제출 전 꼭 읽고 체크해주세요</h3>
                    <span>동의 후 글을 게시 할 수 있습니다.</span>
                  </p>
                  <div className='gesifan-box-list-4-main'>
                    <p className='gesifan-box-list-4-main-text'>
                      상업성 광고 , 저속한 표현, 특정인에 대한 비방, 정치적 목적이나 성향, 동일인이라고 인정 되는 자가 동일 또는
                      유사 내용을 반복한 게시글 등은 관리자에 의해 <span>통보없이 삭제될 수 있습니다.</span>
                      또한 , 홈페이지를 통하여 불법유해 정보를 게시하거나 배포하면 정보통신망 이용촉진 및 정보보호 등에 관한
                      법률 제 74조 에 의거 <span>1년이하의 징역 또는 1천만원 이하의 벌금</span>에 처해질수 있습니다.
                      본문에 개인정보 &#40; 주민등록번호 , 핸드폰 등  &#41; 가 포함되진 않도록 주의바랍니다
                    </p>
                  </div>
                  <div className='gesifan-box-list-4-agree'>
                    <div
                      htmlFor='agree'
                      className='agree-check'
                      style={
                        agree == true
                        ? {backgroundImage: `url(${check1})`}
                        : {backgroundImage: `url(${check2})`}
                      }
                      onClick={() => {
                        setAgree(!agree)
                      }}
                    ></div>
                    <span 
                      onClick={() => {
                        setAgree(!agree)
                      }}
                    >동의합니다</span>
                  </div>
                  <div className="gesifan-box-list-4-uplode-btn">
                    <button className='cancle-btn' type="button" onClick={gohome}>취소하기</button>
                    <button className='uplode-btn' type="submit">글올리기</button>
                  </div>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>

    

      <div className='Gesifanpage'>
        <div>
          <ul className='Gesifan-sort1'>
            <span>번호</span>
            <span>유형</span>
            <span>제목</span>
            <span>등록일</span>
            <span>조회수</span>
          </ul>
        </div>

        {posts.map((post, index) => (
          <li key={index}>

            <div>
              <ul className='Gesifan-sort2'>
                <span>{index + 1}</span>
                <span>{selectedOption}</span>
                <span style={{ cursor: 'pointer' }} onClick={() => {

                  document.querySelector('.gesifan-box').classList.add('on')
                  document.querySelector('.Gesifangongji').classList.remove('on')
                  document.querySelector('.Gesifanpage').classList.remove('on')
                  document.querySelector('.Geshfan-modal').classList.add('on')
                }}>{post.title}</span>
                {/* <td>{post.content}</td> */}
                <span>{post.date}</span>
                <span>{index + 20}</span>
              </ul>

            </div>

          </li>

        ))}


        <div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }} >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className='Gesifan-number-slide-btn' >
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                  <FontAwesomeIcon className='faAngleLeft' icon={faAngleLeft} />
                </button>
              </div>

              <div className='Gesifan-number-slide'>
                {Array.from({ length: postsPerPage }).map((_, index) => (
                  <div key={index}>
                    {` ${index + 1 + (currentPage - 1) * postsPerPage}`}
                  </div>
                ))}
              </div>

              <div className='Gesifan-number-slide-btn'>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                  <FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />
                </button>
              </div>
            </div>
          </div>
        </div>


        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '700px', height: '160px', backgroundColor: '#f7f7f7', marginTop: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <input style={{ width: '200px', height: '30px' }} type="text" placeholder=' 제목 + 내용' />
              {
                <FontAwesomeIcon style={{ position: 'absolute', top: '10px', left: '180px' }} icon={faMagnifyingGlass} />
              }
              <select style={{ marginLeft: '30px', width: '100px', height: '35px' }} name="" id="">
                <option value="">전체</option>
                <option value="">내용</option>
                <option value="">제목</option>
              </select>

            </div>
          </div>
        </div>
      </div>


      <div className='Gesifangongji'>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <table>
            <div>
              <ul className='Gesifan-sort1'>
                <span>번호</span>
                <span>제목</span>
                <span>작성자</span>
                <span>등록일</span>
                <span>조회수</span>
              </ul>
              <ul className='Gesifan-sort2'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </ul>
            </div>
          </table>
        </div>


        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '700px', height: '160px', backgroundColor: '#f7f7f7', marginTop: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <input style={{ width: '200px', height: '30px' }} type="text" placeholder=' 제목 + 내용' />
              {
                <FontAwesomeIcon style={{ position: 'absolute', top: '10px', left: '180px' }} icon={faMagnifyingGlass} />
              }
              <select style={{ marginLeft: '30px', width: '100px', height: '35px' }} name="" id="">
                <option value="">전체</option>
                <option value="">내용</option>
                <option value="">제목</option>
              </select>

            </div>
          </div>
        </div>
      </div>

      <div className='Geshfan-modal'>
        <div className='Geshfan-modal-moklok'>
          <button
            onClick={() => {
              document.querySelector('.gesifan-box').classList.add('on')
              document.querySelector('.Gesifangongji').classList.remove('on')
              document.querySelector('.Gesifanpage').classList.add('on')
              document.querySelector('.Geshfan-modal').classList.remove('on')
            }
            }>목록으로 돌아가기</button>
        </div>
        <div>
          <ul className='Gesifan-sort3'>
            <span>번호</span>
            <span>제목</span>
            <span>작성자</span>
            <span>등록일</span>
            <span>조회수</span>
          </ul>
          <span className='Gesifan-sort3'></span>
        </div>
        <div>


          <div className='Gesifan-number-slide-btn-wrapper'>
            <div className='Gesifan-number-slide-btn'>
              <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                <FontAwesomeIcon icon={faAngleLeft} />
              </button>
            </div>

            <div className='Gesifan-number-slide'>
              {Array.from({ length: postsPerPage }).map((_, index) => (
                <div
                  key={index}>
                  {` ${index + 1 + (currentPage - 1) * postsPerPage}`}
                </div>
              ))}
            </div>
            <div className='Gesifan-number-slide-btn'>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                  <FontAwesomeIcon className='faChevronRight' icon={faChevronRight} />
                </button>
              </div>
          </div>
        </div>
     
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '700px', height: '160px', backgroundColor: '#f7f7f7', marginTop: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <input style={{ width: '200px', height: '30px' }} type="text" placeholder=' 제목 + 내용' />
              {
                <FontAwesomeIcon style={{ position: 'absolute', top: '10px', left: '180px' }} icon={faMagnifyingGlass} />
              }
              <select style={{ marginLeft: '30px', width: '100px', height: '35px' }} name="" id="">
                <option value="">전체</option>
                <option value="">내용</option>
                <option value="">제목</option>
              </select>

            </div>
          </div>
        </div>
          
        </div>
 

      <div className='GesifanJunche-footer-wrapper'>
        <ul className='GesifanJunche-footer'>
          <li>이용안내</li>
          <li>개인정보처리방침</li>
          <li>영상정보처리기기 운영 관리방침</li>
          <li>누리집 개선의견</li>
          <li>찾아오시는길</li>
        </ul>

        <p>(35242) 대전광역시 서구 둔산로 100 (둔산동)</p>
        <p>(c) DAEJEON METROPOLITAN CITY. ALL RIGHTS RESERVED.</p>

      </div>
         <Routes>
           <Route path='/gohome' element={<Mainpage/>}></Route>
         </Routes>
    
    </div>
  );
}

export default GesifanJunche