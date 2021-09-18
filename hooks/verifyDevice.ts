export const isMobileDevice = (): boolean => {
    let isMobile = false;
    if (typeof window !== "undefined") {
      isMobile = window.innerWidth < 500 ? true : false;
    }
    return isMobile
};