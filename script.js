        // JavaScript for the slideshow
        let currentIndex = 0;
        const images = document.querySelectorAll('.hero img');
        const texts = [
            "Welcome to RitTech",
            "Innovative Solutions for Your Business",
            "Transforming Ideas into Reality",
            "Empowering Your Digital Journey",
            "Your Partner in Technology"
        ];

        function showNextImage() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
            images[currentIndex].classList.add('active');

            // Update the text for the current image
            document.querySelector('.hero-overlay h1').textContent = texts[currentIndex];
        }

        // Show the next image every 5 seconds
        setInterval(showNextImage, 5000);