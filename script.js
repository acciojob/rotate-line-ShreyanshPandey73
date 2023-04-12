//your JS code here. If required.
var line = document.getElementById("line");

        // Set the initial rotation angle to 0
        var rotationAngle = 0;

        // Function to rotate the line
        function rotateLine() {
            rotationAngle += 1; // Increment the rotation angle by 1 degree
            line.style.transform = "rotate(" + rotationAngle + "deg)"; // Apply the rotation transformation
            requestAnimationFrame(rotateLine); // Repeat the rotation animation
        }

        // Start the rotation animation
        rotateLine();