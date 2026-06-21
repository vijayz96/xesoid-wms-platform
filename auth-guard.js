// Auth Guard for Techrome Logisti

(function () {

    function checkAuth() {
        const loggedIn = sessionStorage.getItem("loggedIn");

        if (loggedIn !== "true") {
            window.location.replace("index.html");
        }
    }

    checkAuth();

    window.addEventListener("pageshow", function () {
        checkAuth();
    });

})();
