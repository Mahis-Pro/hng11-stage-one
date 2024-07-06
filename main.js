function updateTime() {    
     const now= new Date();
     const formattedTime = `${now.getHours()}:${now.getUTCMinutes()}:${now.getUTCSeconds()}`;
     const formattedDate = now.toLocaleDateString("en-GB");

      document.getElementById("timeInfo").textContent =new Date().toString().match(/([A-Z]+[\+-][0-9]+)/)[1] + "  ||  "  + Intl.DateTimeFormat().resolvedOptions().timeZone + "  ||  " +  formattedTime ;
      document.getElementById("day").textContent= formattedDate;
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