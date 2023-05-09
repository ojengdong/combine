// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
      <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          breakpoints={{
            700: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
              1500: {
                slidesPerView: 3,
              },
              1928: {
                slidesPerView: 3,
              },
          }}
      >

          <div>
              <div className='gesifan-box11'>
                  <div className='gesifan-mini-box'>
                      <SwiperSlide>
                          <div className='gesifan-box12'>
                              <div className='gesifan-box12-inner'>
                                  <p className='gesifan-span'>조회수 높은 글</p>
                                  <span>
                                      <img src='/icon/moresee-arrow.png' alt="arrow" />
                                  </span>
                                  <p>칭찬합니다</p>
                                  <p>제목 : DW503 이예진 선생님 최고!</p>
                              </div>
                          </div>
                      </SwiperSlide>

                      <SwiperSlide>
                          <div className='gesifan-box12'>
                              <div className='gesifan-box12-inner'>
                                  <p className='gesifan-span'>조회수 높은 글</p>
                                  <span><img src='/icon/moresee-arrow.png' alt="arrow" /></span>
                                  <p>제안합니다</p>
                                  <p>제목 : DW503 이예진 선생님 최고!</p>
                              </div>
                          </div>
                      </SwiperSlide>

                      <SwiperSlide>
                          <div className='gesifan-box12'>
                              <div className='gesifan-box12-inner'>
                                  <p className='gesifan-span'>조회수 높은 글</p>
                                  <span><img src='/icon/moresee-arrow.png' alt="arrow" /></span>
                                  <p>신고합니다</p>
                                  <p>제목 : DW503 이예진 선생님 최고!</p>
                              </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className='gesifan-box12'>
                              <div className='gesifan-box12-inner'>
                                  <p className='/icon/gesifan-span'>조회수 높은 글</p>
                                  <span><img src='/icon/moresee-arrow.png' alt="arrow" /></span>
                                  <p>칭찬합니다</p>
                                  <p>제목 : DW503 이예진 선생님 최고!</p>
                              </div>
                          </div>
                      </SwiperSlide>

                      <SwiperSlide>
                          <div className='gesifan-box12'>
                              <div className='gesifan-box12-inner'>
                                  <p className='gesifan-span'>조회수 높은 글</p>
                                  <span><img src='/icon/moresee-arrow.png' alt="arrow" /></span>
                                  <p>칭찬합니다</p>
                                  <p>제목 : DW503 이예진 선생님 최고!</p>
                              </div>
                          </div>
                      </SwiperSlide>

                      <SwiperSlide>
                          <div className='gesifan-box12'>
                              <div className='gesifan-box12-inner'>
                                  <p className='gesifan-span'>조회수 높은 글</p>
                                  <span><img src='/icon/moresee-arrow.png' alt="arrow" /></span>
                                  <p>칭찬합니다</p>
                                  <p>제목 : DW503 이예진 선생님 최고!</p>
                              </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className='gesifan-box12'>
                              <div className='gesifan-box12-inner'>
                                  <p className='/icon/gesifan-span'>조회수 높은 글</p>
                                  <span><img src='/icon/moresee-arrow.png' alt="arrow" /></span>
                                  <p>칭찬합니다</p>
                                  <p>제목 : DW503 이예진 선생님 최고!</p>
                              </div>
                          </div>
                      </SwiperSlide>

                      <SwiperSlide>
                          <div className='gesifan-box12'>
                              <div className='gesifan-box12-inner'>
                                  <p className='gesifan-span'>조회수 높은 글</p>
                                  <span><img src='/icon/moresee-arrow.png' alt="arrow" /></span>
                                  <p>칭찬합니다</p>
                                  <p>제목 : DW503 이예진 선생님 최고!</p>
                              </div>
                          </div>
                      </SwiperSlide>

                      <SwiperSlide>
                          <div className='gesifan-box12'>
                              <div className='gesifan-box12-inner'>
                                  <p className='gesifan-span'>조회수 높은 글</p>
                                  <span><img src='/icon/moresee-arrow.png' alt="arrow" /></span>
                                  <p>칭찬합니다</p>
                                  <p>제목 : DW503 이예진 선생님 최고!</p>
                              </div>
                          </div>
                      </SwiperSlide>
                  </div>
              </div>
          </div>
      </Swiper>
  );
};




