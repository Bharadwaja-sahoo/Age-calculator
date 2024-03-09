var statu=document.getElementById("statu");

        function calculateAge() {
            var inp = document.getElementById("inp").value;
            var today = new Date();
            var newDate = new Date(inp);
            var age = today.getFullYear() - newDate.getFullYear();
        statu.innerHTML = `Your age is ${age} years old`;
        }