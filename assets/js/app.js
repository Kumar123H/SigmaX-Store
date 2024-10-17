document.addEventListener("DOMContentLoaded", function() {
    fetch('download_list/downloads.json')
        .then(response => response.json())
        .then(data => {
            const appList = document.getElementById('app-list');
            appList.innerHTML = '';
            data.apps.forEach(app => {
                const link = document.createElement('a');
                link.href = app.link;
                link.innerText = `${app.name} - Download`;
                appList.appendChild(link);
            });
        });

    document.getElementById('refresh').addEventListener('click', function() {
        location.reload();
    });
});
