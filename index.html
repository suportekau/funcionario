<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Relatório de Funcionários</title>
  <!-- Importa jsPDF -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
</head>
<body>
  <button id="btnRelatorio">Gerar Relatório</button>

  <script>
    // 🔹 Exemplo de dados — substitua pelos seus arrays reais
    const employees = [
      { id: 1, name: 'João Silva' },
      { id: 2, name: 'Maria Souza' }
    ];

    const lancamentos = [
      { funcionarioId: 1, tipo: 'Venda', data: '08/10/2025', valor: 1200 },
      { funcionarioId: 1, tipo: 'Comissão', data: '08/10/2025', valor: 300 },
      { funcionarioId: 2, tipo: 'Serviço', data: '07/10/2025', valor: 800 }
    ];

    // 🔹 Função auxiliar para totalizar por funcionário
    function calcTotalByFunc(id) {
      return lancamentos
        .filter(l => l.funcionarioId == id)
        .reduce((soma, l) => soma + Number(l.valor || 0), 0);
    }

    // 🔹 Espera o HTML carregar
    document.addEventListener('DOMContentLoaded', () => {
      const botao = document.getElementById('btnRelatorio');

      botao.addEventListener('click', () => {
        if (!employees.length) {
          alert('Nenhum funcionário cadastrado.');
          return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
        let y = 20;

        // Logo (exemplo — substitua pelo seu)
        const logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABtklEQVRYR+2XwU3DMBSEv+KRoXKEVlpI/YTUKuRBH6D5tGFEVBuRXKgQEXXgl2fXvmuTM8lUScGwfAVeMA3wF8iABFJwnAWtGdIcwCPcILPAvT4gHHAq7wCV/5aB8kJAO5gH+svfZgBLn3xqNRpDo1ALpfnctqX3W4CsZgIQCPcU9YAlQGUB8sJlPQOgN9yD+dEBwg7lwCfiI/oHkH6GvEZo4qDx4wXnCsG4FYF6wF9Q9h8P4eIIMbNgA8vxtWeW4IGVY2IHZUS/4dxKvAKvF0hFuv0ALh5nki4Vt1iBDM5zMDiR1Y10ACr7Au/8xvgHnZnQ2+Gvl8q7Q3jce7On4Qb+2jvRvN+7pU+H9KkbAhcFzi+Cbj7BWkRAq3JrZKQp2U9C04ED7dQ8tH7D0c+ITBvfc+W/1IDxWgR1H8Bp6oZUlR3AdwAAAABJRU5ErkJggg==";
        doc.addImage(logo, 'PNG', 160, 10, 40, 15);

        // Título e data
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(16);
        doc.text('Relatório de Funcionários e Lançamentos', 10, y);
        y += 8;

        const hoje = new Date().toLocaleDateString('pt-BR');
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(11);
        doc.text(`Gerado em: ${hoje}`, 10, y);
        y += 10;

        // Loop pelos funcionários
        employees.forEach(emp => {
          const totalFunc = calcTotalByFunc(emp.id);
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(12);
          doc.text(`${emp.id} - ${emp.name} (Total: R$ ${totalFunc.toFixed(2)})`, 10, y);
          y += 6;

          const lancs = lancamentos.filter(l => l.funcionarioId == emp.id);
          if (lancs.length) {
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(11);
            doc.text('Tipo', 12, y);
            doc.text('Data', 70, y);
            doc.text('Valor (R$)', 120, y);
            y += 5;
            doc.setFont('helvetica', 'normal');

            lancs.forEach(l => {
              doc.text(l.tipo, 12, y);
              doc.text(l.data, 70, y);
              doc.text(Number(l.valor).toFixed(2), 120, y);
              y += 6;
              if (y > 280) { doc.addPage(); y = 20; }
            });
          } else {
            doc.setFont('helvetica', 'normal');
            doc.text('• Nenhum lançamento.', 12, y);
            y += 6;
          }

          y += 4;
          if (y > 280) { doc.addPage(); y = 20; }
        });

        // Total geral
        const totalGeralPDF = lancamentos.reduce((s, l) => s + Number(l.valor || 0), 0);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.text(`TOTAL GERAL: R$ ${totalGeralPDF.toFixed(2)}`, 10, y);

        // ✅ Opção garantida — baixar PDF (funciona em qualquer navegador)
        doc.save('relatorio-funcionarios.pdf');

        // 🔄 Se quiser abrir em nova aba (pode ser bloqueado pelo navegador):
        /*
        const blob = doc.output('blob');
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
        */
      });
    });
  </script>
</body>
</html>
