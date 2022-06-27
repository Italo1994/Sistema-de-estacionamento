"use strict";
(function () {
    var _a;
    const $ = (query) => document.querySelector(query);
    function patio() {
        function ler() {
        }
        function adicionar(veiculo) {
            var _a;
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${veiculo.nome}</td>
                <td>${veiculo.placa}</td>
                <td>${veiculo.entrada}</td>
                <td>
                    <button class="delete" data-placa="${veiculo.placa}>X</button>
                </td>
            `;
            (_a = $("#patio")) === null || _a === void 0 ? void 0 : _a.appendChild(row);
        }
        function remover() {
        }
        function renderizar() {
        }
        function salvar() {
        }
        return { ler, adicionar, remover, renderizar, salvar };
    } // fim da função patio()
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a, _b;
        console.log("Cadastrei");
        const nome = (_a = $("#nome")) === null || _a === void 0 ? void 0 : _a.value;
        const placa = (_b = $("#placa")) === null || _b === void 0 ? void 0 : _b.value;
        if (!nome || !placa) {
            alert("os campos nome e placa são obrigatórios");
            return;
        }
        patio().adicionar({ nome, placa, entrada: new Date() });
    });
})();
