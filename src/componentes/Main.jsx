import jsPDF from 'jspdf'
import styles from '../Main.module.css'

function Main(){



       function submitFormulario(e){

        e.preventDefault()

        if(document.getElementById('cliente').value == '' || document.getElementById('telefone').value == ''
        || document.getElementById('servico').value == '' || document.getElementById('descricao').value == ''
        || document.getElementById('valor').value == '' || document.getElementById('status').value == ''){

            alert('Preencha todos os campos!')
        }

           //início else
           else {
       
        let selectStatus = document.getElementById('status')
        let valorSelect = selectStatus.options[selectStatus.selectedIndex].text

        
        const ordemServico = {
            cliente: document.getElementById('cliente').value,
            telefone: document.getElementById('telefone').value,
            servico: document.getElementById('servico').value,
            descricao: document.getElementById('descricao').value,
            valor: document.getElementById('valor').value,
            status: valorSelect

        }



        //console.log(ordemServico)

        //Salvando objeto no localstorage
        let lista = JSON.parse(localStorage.getItem('ordens_de_servico')) || []
        lista.push(ordemServico)
        localStorage.setItem('ordens_de_servico', JSON.stringify(lista))

        //Listando objetos
        lista = JSON.parse(localStorage.getItem('ordens_de_servico'))

        //Listando todas as ordens de serviço do localstorage
        lista.forEach(ordem => {
            console.log(ordem)
        });


        //Gerando pdf
        let doc = new jsPDF()
        doc.text('Ordem de serviço', 70, 10)
        doc.text(`Nome do cliente: ${ordemServico.cliente}`, 10,30)
        doc.text(`Telefone do cliente: ${ordemServico.telefone}`, 10, 50)
        doc.text(`Serviço: ${ordemServico.servico}`, 10, 70)
        doc.text(`Descrição do serviço: ${ordemServico.descricao}` ,10,90)
        doc.text(`Valor do serviço: ${ordemServico.valor}`, 10, 110)
        doc.text(`Status do serviço: ${ordemServico.status}`,10, 130)
        doc.save('a4.pdf')

        //limpa os campos
        document.getElementById('cliente').value = ''
        document.getElementById('telefone').value = ''
        document.getElementById('servico').value = ''
        document.getElementById('descricao').value = ''
        document.getElementById('valor').value = ''
        document.getElementById('status').value = ''
        
    
           
        
    } //fim else

    }


    return(
        <div className= {styles.container}>

        <form id='formulario' onSubmit={submitFormulario}>
            <label htmlFor="cliente">Nome do cliente</label>
            <input type="text"  id="cliente"placeholder='Nome completo'/>

            <label htmlFor="telefone">Telefone do cliente</label>
            <input type="text"  id="telefone" placeholder='(DDD) + telefone'/>

            <label htmlFor="servico">Serviço</label>
            <input type="text"  id="servico"/>

            <label htmlFor="descricao">Descrição do serviço</label>
            <input type="text"  id="descricao"/>

            <label htmlFor="valor">Valor do serviço</label>
            <input type="text"  id="valor" placeholder='R$'/>

            <label htmlFor="status">Status do orçamento</label>
            <select id='status'>
                <option value="">-- Selecione o status do serviço --</option>
                <option value="1">Em análise</option>
                <option value="2">Rejeitado</option>
                <option value="3">Aceito</option>
                <option value="4">Aguardando peças</option>
                <option value="5">Em andamento</option>
                <option value="6">Não concluído</option>
                <option value="7">Finalizado</option>
                <option value="8">Aguardando cliente</option>
            </select>

            <button type="submit">Imprimir</button>
        </form>

        


        </div>
    )

}

export default Main