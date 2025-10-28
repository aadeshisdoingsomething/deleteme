// A simple API limiting to 5 requests per minute

let attempts = 0;
const maxAttempts = 5;
const timeWindow = 7000; // 1 minute in milliseconds

function canMakeRequest(attempts, maxAttempts) {
    if (attempts < maxAttempts) {
        return true;
    }
    return false;
}

function request (attempts, maxAttempts, timeWindow) {
    if (canMakeRequest(attempts, maxAttempts)) {
        attempts++;
        console.log(`Request successful. You have made ${attempts} requests.`);
    } else {
        console.log(`Request limit reached. Please wait for ${timeWindow / 1000} seconds.`);
    }
    return attempts;
}

// Simulate making requests
setInterval(() => {
    attempts = request(attempts, maxAttempts, timeWindow);
}, 1000); // Attempt a request every 10 seconds

// Reset attempts after the time window
setInterval(() => {
    attempts = 0;
    console.log('Request limit reset. You can make new requests now.');
}, timeWindow); 

