function updateTime() {    
     const currentTime = new Date();

     const timeZoneOffset = currentTime.getTimezoneOffset();
     const timeZoneOffsetHours = timeZoneOffset / 60;

     document.getElementById("timeInfo").textContent = `UTC${timeZoneOffsetHours >= 0 ? '+' : ''}${timeZoneOffsetHours} | ${currentTime.toLocaleTimeString()}`;
 }
 setInterval(updateTime, 1000);




 document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('#goals p');
        let currentIndex = 0;

        function showParagraph(index) {
            paragraphs.forEach((p, i) => {
                p.style.display = i === index ? 'block' : 'none';
            });
        }

        document.getElementById('prev').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + paragraphs.length) % paragraphs.length;
            showParagraph(currentIndex);
        });

        document.getElementById('next').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % paragraphs.length;
            showParagraph(currentIndex);
        });

        // Show the first paragraph initially
        showParagraph(currentIndex);
    console.log('DOM content loaded!');
 });