    // Define a largura da barra lateral em 250 px 
    // e a margem esquerda do conteúdo da página em 250 px
    function openNav() {
        document.getElementById("myNavbar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    // Define a largura da barra lateral como 0 
    // e a margem esquerda do conteúdo da página como 0
    function closeNav() {
        document.getElementById("myNavbar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }