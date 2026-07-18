const content = [
    // LANDSCAPE SECTION
    { type: "landscape", title: "Advertisement For Gym", desc: "Work done with premier pro and capcut", url: "assets/videos/vid1.mp4" },
    { type: "landscape", title: "Travel Video", desc: "Work done in premier pro and shot myself with fujifilm x-m5", url: "assets/videos/vid2.mp4" },
    { type: "landscape", title: "Personal Travel Reel", desc: "Shot mostly on phone and edited on premier pro", url: "assets/videos/vid3.mp4" },
    { type: "landscape", title: "Personal Instagram Content", desc: "Edited on premier pro and special effects in after effects", url: "assets/videos/vid6.mp4" },
    { type: "landscape", title: "Personal Travel Reel", desc: "Shot mostly on phone and edited on premier pro", url: "assets/videos/vid9.mp4" },
    { type: "landscape", title: "Personal Instagram Content", desc: "Shot pixel 7 and edited on premier pro", url: "assets/videos/vid7.mp4" },
 // PORTRAIT REELS SECTION (Paired for side-by-side)
    { 
        type: "reels", 
        items: [
            { title: "Gym Promotion", desc: "Work edited in After effects and premier pro", url: "assets/videos/vid4.mp4" },
            { title: "Onam Promotion", desc: "Work done in after effects and coloured in premier pro", url: "assets/videos/vid5.mp4" },
            { title: "Wedding Page Content", desc: "Work done and coloured in premier pro", url: "assets/videos/vid10.mp4" },
            { title: "Personal Content", desc: "Edited and coloured in premier pro", url: "assets/videos/vid8.mp4" },
        ] 
    }
];

const container = document.getElementById('video-container');

content.forEach(item => {
    if (item.type === "landscape") {
        container.innerHTML += `
            <section class="video-panel">
                <div class="video-wrapper"><video src="${item.url}" controls muted playsinline loop></video></div>
                <div class="video-info-box"><h2>${item.title}</h2><p>${item.desc}</p></div>
            </section>`;
    } else if (item.type === "reels") {
        container.innerHTML += `
            <section class="reels-grid">
                ${item.items.map(reel => `
                    <div class="reel-item">
                        <div class="portrait-wrapper"><video src="${reel.url}" controls muted playsinline loop></video></div>
                        <div class="portrait-info"><h3>${reel.title}</h3><p>${reel.desc}</p></div>
                    </div>
                `).join('')}
            </section>`;
    }
});
