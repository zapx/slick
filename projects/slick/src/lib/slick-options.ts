/**
 * @license
 * Copyright @zapx/slick. All right Reserved.
 *
 * Slick options
 *
 *
 *
 */
export interface SlickOptions {
    /**
     * Enables tabbing and arrow key navigation.
     *
     */
    accessibility?: boolean;

    /**
     * Enables adaptive height for single slide horizontal carousels.
     *
     */
    adaptiveHeight?: boolean;

    /**
     * Enables Autoplay
     *
     */
    autoplay?: boolean;

    /**
     * Autoplay Speed in milliseconds
     *
     */
    autoplaySpeed?: number;

    /**
     * Prev/Next arrows
     *
     */
    arrows?: boolean;

    /**
     * Set the slider to be the navigation of other slider (Class or ID Name)
     *
     */
    asNavFor?: boolean | null;

    /**
     * Change where the navigation arrows are attached (Selector, htmlString, Array, Element, jQuery object)
     *
     */
    appendArrows?: string;

    /**
     * Change where the navigation dots are attached (Selector, htmlString, Array, Element, jQuery object)
     *
     */
    appendDots?: string | {[key: string]: any};

    /**
     * Allows you to select a node or customize the HTML for the "Previous" arrow
     *
     */
    prevArrow?: string | {[key: string]: any};

    /**
     * Allows you to select a node or customize the HTML for the "Next" arrow.
     *
     */
    nextArrow?: string | {[key: string]: any};

    /**
     * Enables centered view with partial prev/next slides. Use with odd numbered slidesToShow counts.
     *
     */
    centerMode?: boolean;

    /**
     * Side padding when in center mode (px or %)
     *
     */
    centerPadding?: string;

    /**
     * CSS3 Animation Easing
     *
     */
    cssEase?: string;

    /**
     * Custom paging templates. See source for use example
     *
     */
    customPaging?: () => void;

    /**
     * Show dot indicators
     *
     */
    dots?: boolean;

    /**
     * Class for slide indicator dots container
     *
     */
    dotsClass?: string;

    /**
     * Enable mouse dragging
     *
     */
    draggable?: boolean;

    /**
     * Enable fade
     *
     */
    fade?: boolean;

    /**
     * Enable focus on selected element (click)
     *
     */
    focusOnSelect?: boolean;

    /**
     * Add easing for jQuery animate. Use with easing libraries or default easing methods
     *
     */
    easing?: string;

    /**
     * Resistance when swiping edges of non-infinite carousels
     *
     */
    edgeFriction?: number;

    /**
     * Infinite loop sliding
     *
     */
    infinite?: boolean;

    /**
     * Slide to start on
     *
     */
    initialSlide?: number;

    /**
     * Set lazy loading technique. Accepts 'ondemand' or 'progressive'
     *
     */
    lazyLoad?: string;

    /**
     * Responsive settings use mobile first calculation
     *
     */
    mobileFirst?: boolean;

    /**
     * Pause Autoplay On Focus
     *
     */
    pauseOnFocus?: boolean;

    /**
     * Pause Autoplay On Hover
     *
     */
    pauseOnHover?: boolean;

    /**
     * Pause Autoplay when a dot is hovered
     *
     */
    pauseOnDotsHover?: boolean;

    /**
     * Width that responsive object responds to. Can be 'window', 'slider' or 'min' (the smaller of the two)
     *
     */
    respondTo?: string;

    /**
     * Object containing breakpoints and settings objects (see demo). Enables settings sets at given screen width.
     * Set settings to "unslick" instead of an object to disable slick at a given breakpoint.
     *
     */
    responsive?: {
        breakpoint: number;
        settings?: SlickOptions;
    }[];

    /**
     * Setting this to more than 1 initializes grid mode. Use slidesPerRow to set how many slides should be in each row.
     *
     */
    rows?: number;

    /**
     * Element query to use as slide
     *
     */
    slide?: string;

    /**
     * With grid mode intialized via the rows option, this sets how many slides are in each grid row. dver
     *
     */
    slidesPerRow?: number;

    /**
     * # of slides to show
     *
     */
    slidesToShow?: number;

    /**
     * # of slides to scroll
     *
     */
    slidesToScroll?: number;

    /**
     * Slide/Fade animation speed
     *
     */
    speed?: number;

    /**
     * Enable swiping
     *
     */
    swipe?: boolean;

    /**
     * Allow users to drag or swipe directly to a slide irrespective of slidesToScroll
     *
     */
    swipeToSlide?: boolean;

    /**
     * Enable slide motion with touch
     *
     */
    touchMove?: boolean;

    /**
     * To advance slides, the user must swipe a length of (1/touchThreshold) * the width of the slider
     *
     */
    touchThreshold?: boolean;

    /**
     * Enable/Disable CSS Transitions
     *
     */
    useCSS?: boolean;

    /**
     * Enable/Disable CSS Transforms
     *
     */
    useTransform?: boolean;

    /**
     * Variable width slides
     *
     */
    variableWidth?: boolean;

    /**
     * Vertical slide mode
     *
     */
    vertical?: boolean;

    /**
     * Vertical swipe mode
     *
     */
    verticalSwiping?: boolean;

    /**
     * Change the slider's direction to become right-to-left
     *
     */
    rtl?: boolean;

    /**
     * Change the slider's direction to become right-to-left
     *
     */
    waitForAnimate?: boolean;

    /**
     * Set the zIndex values for slides, useful for IE9 and lower
     *
     */
    zIndex?: boolean;
}
