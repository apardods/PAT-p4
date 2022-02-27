const loadQuote = async () => {
    let request = await fetch("https://api.kanye.rest/");
    if (request.status === 200){
        if ($("#quote")){
            $("#boton-principal").html("Otra cita!");
        }
        let data = await request.json();
        let texto = data["quote"];
        $("#quote").html(texto);
    }
};
