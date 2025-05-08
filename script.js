const loadingScreen = document.querySelector("#loading-screen");

const mainContentHeaderFrameWebsiteName = document.querySelector("#main-content-header-frame-website-name");
mainContentHeaderFrameWebsiteName.style.setProperty("font-size", window.innerHeight * 0.05 + "px");
mainContentHeaderFrameWebsiteName.style.setProperty("font-weight", "100");
mainContentHeaderFrameWebsiteName.style.setProperty("text-shadow", "0px 0px " + window.innerHeight * 0.015 + "px var(--text-primary)");
mainContentHeaderFrameWebsiteName.textContent = document.title;

const mainContentHeaderFrameFixedHint1 = document.querySelector("#main-content-header-frame-fixed-hint-1");
const mainContentHeaderFrameFixedHint2 = document.querySelector("#main-content-header-frame-fixed-hint-2");
mainContentHeaderFrameFixedHint1.style.setProperty("font-size", window.innerHeight * 0.0175 + "px");
mainContentHeaderFrameFixedHint2.style.setProperty("font-size", window.innerHeight * 0.0175 + "px");

const phoneBrandSelectionFrame = document.querySelector("#phone-brand-selection-frame");
phoneBrandSelectionFrame.style.setProperty("border", window.innerHeight * 0.004 + "px solid var(--text-primary)");

const platformSelectionFrame = document.querySelector("#platform-selection-frame");
platformSelectionFrame.style.setProperty("border", window.innerHeight * 0.004 + "px solid var(--text-primary)");

const fixedFrameHints = document.querySelectorAll(".fixed-frame-hint");
fixedFrameHints.forEach(hint => {
    hint.style.setProperty("font-size", window.innerHeight * 0.02 + "px");
});

const radioButtonsSpans = document.querySelectorAll(".radio-btn-span");
radioButtonsSpans.forEach(span => {
    span.style.setProperty("font-size", window.innerHeight * 0.022 + "px");
});

const platformIcons = document.querySelectorAll(".app-icon-img");
platformIcons.forEach(pi => {
    pi.style.setProperty("height", (((window.innerHeight * 0.4) * 0.8) * 0.8) * 0.25 + "px");
});

window.addEventListener("load", () => {
    loadingScreen.style.setProperty("display", "none");
});