.container {
    position: relative; /* This makes the container the positioning reference */
    width: 100%;
    height: 100vh; /* Full viewport height */
}

.absolute-element {
    position: absolute;
    top: 20%; /* 20% from the top of the container */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Adjust to center based on width */
}