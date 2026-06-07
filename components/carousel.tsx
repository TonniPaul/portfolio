'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Children, ReactNode, useId } from 'react';
import SvgIcon from './svg-icon';

type SwiperCarouselProps = {
  children: ReactNode | ReactNode[];
  showNavigation?: boolean;
  showPagination?: boolean;
  spaceBetween?: number;
  slidesPerView?: number | 'auto';
  loop?: boolean;
  className?: string;
};

const Carousel = ({
  children,
  showNavigation = false,
  showPagination = false,
  spaceBetween = 16,
  slidesPerView = 1,
  loop = true,
  className,
}: SwiperCarouselProps) => {
  const id = useId();

  return (
    <div className={className}>
      <Swiper
        key={id}
        modules={[
          ...(showNavigation ? [Navigation] : []),
          ...(showPagination ? [Pagination] : []),
          Autoplay,
        ]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={loop}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={
          showNavigation ? { nextEl: '.next', prevEl: '.prev' } : false
        }
        pagination={
          showPagination
            ? { el: '.carousel-pagination', clickable: true }
            : false
        }
      >
        {Children.toArray(children).map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}

        <div className="flex justify-between items-center mt-6">
          <div className="carousel-pagination flex gap-1" />

          <div className="flex w-max ml-auto gap-2 *:border *:rounded-5">
            <button className="prev p-2">
              <SvgIcon name="chevron-down" className="rotate-90 w-6 h-6" />
            </button>
            <button className="next p-2">
              <SvgIcon name="chevron-down" className="-rotate-90 w-6 h-6 " />
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
