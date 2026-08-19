const SwiperTabs = (function() {
    function init(container) {
        const swiperWrapper = container.querySelector('[data-js="swiper-wrapper"]');
        const prevButton = container.querySelector('[data-js="swiper-button-prev"]');
        const nextButton = container.querySelector('[data-js="swiper-button-next"]');
        const tabs = container.querySelectorAll('[data-js="swiper-tab"]');

        const swiper = new Swiper(swiperWrapper, {
            loop: false,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            navigation: {
                nextEl: nextButton,
                prevEl: prevButton,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: true,
            },
            on: {
                slideChange: () => updateActiveTab(container, tabs, swiper.realIndex),
            },
        });

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                swiper.slideTo(index);
                updateActiveTab(container, tabs, index);
            });
        });

        updateActiveTab(container, tabs, 0);
    }

    function updateActiveTab(container, tabs, activeIndex) {
        tabs.forEach((tab, index) => {
            const isActive = index === activeIndex;
            tab.classList.toggle('active', isActive);

            if (isActive && isVisible(container)) {
                tab.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center',
                });
            }
        });
    }

    function isVisible(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    return {
        init,
    };
})();

const swiperTabsBlocks = document.querySelectorAll('[data-js="swiper-tabs-block"]');

if (swiperTabsBlocks.length) {
    swiperTabsBlocks.forEach(SwiperTabs.init);
}