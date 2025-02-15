export const createOverlay = (overlayId: string) => {
    const overlay = document.createElement("div");
    overlay.id = overlayId;
    overlay.className = "fixed top-0 left-0 w-full h-screen bg-black opacity-50";
    return overlay;
};