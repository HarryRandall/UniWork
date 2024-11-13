let actionIntervalId = null;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^https:\/\/meet\.google\.com\/[a-zA-Z0-9\-]+$/.test(tab.url)) {
        chrome.storage.sync.get(['googleMeetPlugin'], function(result) {
            if (result.googleMeetPlugin) {
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    func: () => {
                        if (window.hasRun) return;
                        window.hasRun = true;

                        let activitiesClicked = false;
                        let transcriptsClicked = false;
                        let startTranscriptionClicked = false;
                        let startClicked = false;
                        let closeClicked = false;
                        let videoExpanded = false;

                        // Expanding video to fullscreen
                        const expandVideo = () => {
                            console.log('Expanding video...');
                            const videoContainer = document.querySelector('.CNjCjf');
                            if (videoContainer) {
                                // Save original styles for reset
                                videoContainer.dataset.originalStyle = videoContainer.getAttribute('style') || '';

                                // Apply expanded styles forcibly with !important
                                videoContainer.style.setProperty('width', '100vw', 'important');
                                videoContainer.style.setProperty('height', '100vh', 'important');
                                videoContainer.style.setProperty('position', 'fixed', 'important');
                                videoContainer.style.setProperty('top', '0', 'important');
                                videoContainer.style.setProperty('left', '0', 'important');
                                videoContainer.style.setProperty('z-index', '1000', 'important');
                                videoContainer.style.setProperty('background-color', '#000', 'important');
                                videoExpanded = true;
                                console.log('Video expanded to fullscreen');
                            } else {
                                console.error('Video container not found during expandVideo');
                            }

                            document.body.dataset.originalOverflow = document.body.style.overflow || '';
                            document.body.dataset.originalMargin = document.body.style.margin || '';
                            document.body.dataset.originalPadding = document.body.style.padding || '';

                            document.body.style.overflow = 'hidden';
                            document.body.style.margin = '0';
                            document.body.style.padding = '0';
                        };

                        // Resetting video to default state
                        const resetVideo = () => {
                            console.log('Resetting video to original state...');
                            const videoContainer = document.querySelector('.CNjCjf');
                            if (videoContainer) {
                                if (videoContainer.dataset.originalStyle) {
                                    videoContainer.setAttribute('style', videoContainer.dataset.originalStyle);
                                } else {
                                    videoContainer.removeAttribute('style');
                                }
                                videoExpanded = false;
                                console.log('Video reset to original styles');
                            } else {
                                console.error('Video container not found during resetVideo');
                            }

                            document.body.style.overflow = document.body.dataset.originalOverflow || '';
                            document.body.style.margin = document.body.dataset.originalMargin || '';
                            document.body.style.padding = document.body.dataset.originalPadding || '';
                        };

                        // Close button click event
                        const clickCloseButton = (retries) => {
                            console.log('Attempting to click close button...');
                            if (!closeClicked) {
                                const closeButton = document.querySelector('button[aria-label="Close"]');
                                if (closeButton) {
                                    closeButton.click();
                                    closeClicked = true;
                                    console.log('Close button clicked');
                                    resetVideo(); // Call reset to return everything to normal
                                    // Stop the sequence after resetting video
                                    if (actionIntervalId) {
                                        clearInterval(actionIntervalId);
                                        console.log('All actions completed, clearing interval.');
                                    }
                                } else if (retries > 0) {
                                    console.log('Close button not found, retrying...');
                                    setTimeout(() => clickCloseButton(retries - 1), 5000);
                                } else {
                                    console.error('Close button not found after 3 attempts');
                                }
                            }
                        };

                        // Other functions such as clickStartButton, clickStartTranscriptionButton, etc.
                        const clickStartButton = (retries) => {
                            console.log('Attempting to click start button...');
                            if (!startClicked) {
                                const startButton = Array.from(document.querySelectorAll('button'))
                                    .find(el => el.querySelector('span[jsname="V67aGc"]')?.textContent.trim() === 'Start');
                                if (startButton) {
                                    startButton.click();
                                    startClicked = true;
                                    console.log('Start button clicked');
                                } else if (retries > 0) {
                                    console.log('Start button not found, retrying...');
                                    setTimeout(() => clickStartButton(retries - 1), 5000);
                                } else {
                                    console.error('Start button not found after 3 attempts');
                                }
                            }
                        };

                        const clickStartTranscriptionButton = (retries) => {
                            console.log('Attempting to click start transcription button...');
                            if (!startTranscriptionClicked) {
                                const startTranscriptionButton = document.querySelector('button[aria-label="Start transcription"]');
                                if (startTranscriptionButton) {
                                    startTranscriptionButton.click();
                                    startTranscriptionClicked = true;
                                    console.log('Start transcription button clicked');

                                    setTimeout(() => {
                                        clickStartButton(3);
                                    }, 2000);
                                } else if (retries > 0) {
                                    console.log('Start transcription button not found, retrying...');
                                    setTimeout(() => clickStartTranscriptionButton(retries - 1), 5000);
                                } else {
                                    console.error('Start transcription button not found after 3 attempts');
                                }
                            }
                        };

                        const clickTranscriptsButton = (retries) => {
                            console.log('Attempting to click transcripts button...');
                            if (!transcriptsClicked) {
                                const transcriptsButton = document.querySelector('li[aria-label="Transcripts, Capture the conversation for later"]');
                                if (transcriptsButton) {
                                    transcriptsButton.click();
                                    transcriptsClicked = true;
                                    console.log('Transcripts button clicked');

                                    setTimeout(() => {
                                        clickStartTranscriptionButton(3);
                                    }, 2000);
                                } else if (retries > 0) {
                                    console.log('Transcripts button not found, retrying...');
                                    setTimeout(() => clickTranscriptsButton(retries - 1), 5000);
                                } else {
                                    console.error('Transcripts button not found after 3 attempts');
                                }
                            }
                        };

                        const clickActivitiesButton = (retries) => {
                            console.log('Attempting to click activities button...');
                            if (!activitiesClicked) {
                                const activitiesButton = document.querySelector('button[aria-label="Activities"]');
                                if (activitiesButton) {
                                    activitiesButton.click();
                                    activitiesClicked = true;
                                    console.log('Activities button clicked');

                                    setTimeout(() => {
                                        clickTranscriptsButton(3);
                                    }, 2000);
                                } else if (retries > 0) {
                                    console.log('Activities button not found, retrying...');
                                    setTimeout(() => clickActivitiesButton(retries - 1), 5000);
                                } else {
                                    console.error('Activities button not found after 3 attempts');
                                }
                            }
                        };

                        const checkAndClick = () => {
                            console.log('Running checkAndClick sequence...');
                            if (!videoExpanded) {
                                expandVideo();
                            }
                            if (!activitiesClicked) {
                                clickActivitiesButton(3);
                            } else if (!transcriptsClicked) {
                                clickTranscriptsButton(3);
                            } else if (!startTranscriptionClicked) {
                                clickStartTranscriptionButton(3);
                            } else if (!startClicked) {
                                clickStartButton(3);
                            } else if (!closeClicked) {
                                clickCloseButton(3);
                            }
                        };

                        // Run the sequence of actions
                        console.log('Starting the action sequence...');
                        actionIntervalId = setInterval(checkAndClick, 5000);
                    }
                }, () => {
                    if (chrome.runtime.lastError) {
                        console.error(chrome.runtime.lastError.message);
                    }
                });
            }
        });
    }
});
