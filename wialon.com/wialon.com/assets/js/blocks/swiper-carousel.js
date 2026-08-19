const SwiperCarousel = (function() {
    const init = (container) => {
        if (!container) {
            console.warn('Carousel block is not provided or invalid.');
            return;
        }

        const swiper = container.querySelector('[data-js="swiper"]');

        if (!swiper) {
            console.warn('Swiper container not found in:', container);
            return;
        }

        const prevButton = container.querySelector('[data-js="swiper-button-prev"]');
        const nextButton = container.querySelector('[data-js="swiper-button-next"]');
        const pagination = container.querySelector('[data-js="swiper-pagination"]');
        const breakpoints = JSON.parse(container.querySelector('[data-js="breakpoints"]') ? .textContent || '{}');
        const options = JSON.parse(container.querySelector('[data-js="options"]') ? .textContent || '{}');

        new Swiper(swiper, {
            spaceBetween: 25,
            loop: false,
            navigation: {
                nextEl: nextButton,
                prevEl: prevButton,
            },
            pagination: {
                el: pagination,
                clickable: true,
                dynamicBullets: options ? .pagination ? .dynamicBullets || false,
            },
            centerInsufficientSlides: options ? .centerInsufficientSlides || false,
            breakpoints: breakpoints ? breakpoints : {},
            on: {
                init: function() {
                    const totalSlides = this.slides.length;
                    const slidesPerView = this.params.slidesPerView;

                    if (totalSlides <= slidesPerView) {
                        if (!container.querySelector('.swiper-buttons-wrapper')) return;
                        container.querySelector('.swiper-buttons-wrapper').classList.add('d-none');
                    }
                },
            },
        });
    };

    return {
        init,
    };
})();

const swiperCarouselBlocks = document.querySelectorAll('[data-js="swiper-carousel-block"]');

if (swiperCarouselBlocks.length) {
    swiperCarouselBlocks.forEach(SwiperCarousel.init);
}