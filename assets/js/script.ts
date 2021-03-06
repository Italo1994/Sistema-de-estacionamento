interface IVeiculo {
    nome: string;
    placa: string;
    entrada: Date;
}

( function() {
    const $ = (query: string): HTMLInputElement | null => 
        document.querySelector(query);

    function patio() {
        function ler() {

        }

        function adicionar(veiculo: IVeiculo) {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${veiculo.nome}</td>
                <td>${veiculo.placa}</td>
                <td>${veiculo.entrada}</td>
                <td>
                    <button class="delete" data-placa="${veiculo.placa}>X</button>
                </td>
            `;

            $("#patio")?.appendChild(row);
        }

        function remover() {

        }

        function renderizar() {

        }

        function salvar() {

        }

        return { ler, adicionar, remover, renderizar, salvar };
    } // fim da função patio()

    $("#cadastrar")?.addEventListener("click", () => {
        console.log("Cadastrei");
        const nome = $("#nome")?.value;
        const placa = $("#placa")?.value;

        if(!nome || !placa) {
            alert("os campos nome e placa são obrigatórios");
            return;
        }

        patio().adicionar({nome, placa, entrada: new Date()});
    });
} )();