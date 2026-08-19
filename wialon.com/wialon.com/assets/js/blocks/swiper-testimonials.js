const SwiperTestimonials = (function() {
    const init = (container) => {
        if (!container) {
            console.warn('Testimonials block is not provided or invalid.');
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
        const options = JSON.parse(container.querySelector('[data-js="options"]') ? .textContent || '{}');

        new Swiper(swiper, {
            loop: true,
            autoplay: options ? .autoplay ? ? false,
            navigation: {
                nextEl: nextButton,
                prevEl: prevButton,
            },
            spaceBetween: 32,
            pagination: {
                el: pagination,
                clickable: true,
                dynamicBullets: true,
            },
        });
    };

    return {
        init,
    };
})();

document.querySelectorAll('[data-js="swiper-testimonials-block"]').forEach((block) => SwiperTestimonials.init(block));