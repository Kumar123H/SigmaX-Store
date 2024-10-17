document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const appName = document.getElementById('appName').value;
    const appLink = document.getElementById('appLink').value;

    const appData = {
        name: appName,
        link: appLink
    };

    fetch('../download_list/downloads.json')
        .then(response => response.json())
        .then(data => {
            data.apps.push(appData);
            return fetch('../download_list/downloads.json', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
        })
        .then(() => alert('App uploaded successfully!'))
        .catch(error => console.error('Error:', error));
});
