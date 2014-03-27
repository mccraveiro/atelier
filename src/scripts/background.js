chrome.app.runtime.onLaunched.addListener(function () {
    LaunchApp();
});

function LaunchApp() {
    chrome.app.window.create('../main.html', {
        'id': 'main',
        'bounds': {
            'width': 800,
            'height': 600
        },
        'minWidth': 800,
        'minHeight': 600,
        'frame': 'none'
    });
}
