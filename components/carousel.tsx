'use client';

import { Children, ReactNode, useId } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { SwiperProps } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SvgIcon from './svg-icon';

interface CarouselProps extends SwiperProps {
  children: ReactNode | ReactNode[];
  showNavigation?: boolean;
  showPagination?: boolean;
  className?: string;
}

const Carousel = ({
  children,
  showNavigation = false,
  showPagination = false,
  className,
  modules,
  ...swiperProps
}: CarouselProps) => {
  const id = useId();

  return (
    <div className={className}>
      <Swiper
        key={id}
        modules={[
          ...(showNavigation ? [Navigation] : []),
          ...(showPagination ? [Pagination] : []),
          Autoplay,
          ...(modules ?? []),
        ]}
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
        {...swiperProps}
      >
        {Children.toArray(children).map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}

        {(showNavigation || showPagination) && (
          <div className="mt-6 flex items-center justify-between">
            <div className="carousel-pagination flex gap-1" />

            <div className="ml-auto flex w-max gap-2 *:rounded-5 *:border *:disabled:opacity-50">
              <button className="prev p-2">
                <SvgIcon name="chevron-down" className="h-6 w-6 rotate-90" />
              </button>

              <button className="next p-2">
                <SvgIcon name="chevron-down" className="h-6 w-6 -rotate-90" />
              </button>
            </div>
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default Carousel;
