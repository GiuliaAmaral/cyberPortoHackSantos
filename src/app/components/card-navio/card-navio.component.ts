import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { NaviosProgramados } from 'src/app/model/navios-programados.model';
import { ApiService } from 'src/app/services/api.service';
import { ModalDetalhamentoComponent } from '../modal-detalhamento/modal-detalhamento.component';
import { TxtTranCodeService } from 'src/app/services/txtTranCode.service';

@Component({
  selector: 'app-card-navio',
  templateUrl: './card-navio.component.html',
  styleUrls: ['./card-navio.component.css'],
})
export class CardNavioComponent implements OnInit {

  @Input() navio?: NaviosProgramados;
  textoGeminiAPI: string = '';
  openModalDetail = false;

  constructor(
    public dialog: MatDialog,
    private apiService: ApiService,
    private txtTranCodeService: TxtTranCodeService
  ) { }

  ngOnInit(): void {
  }

  public openDialogIa(): void {
    document.dispatchEvent(new CustomEvent('LOADING', { detail: true }));
    this.openModalDetail = true;
    if (this.navio) {
      this.construirPrompt(this.navio);
      if (this.textoGeminiAPI) {
        this.apiService.enviarDadosParaGemini(this.textoGeminiAPI)
          .subscribe(
            (response) => {
              if (response) {
                sessionStorage.setItem("textoGeradoIA", response.candidates[0].content.parts[0].text)
                document.dispatchEvent(new CustomEvent('LOADING', { detail: false }));
                this.dialog.open(ModalDetalhamentoComponent);
              }
            },
            (error) => {
              console.error('Erro ao enviar dados para o Gemini:', error);
              document.dispatchEvent(new CustomEvent('LOADING', { detail: false }));
            }
          );
      }
    }
  }


  openDialogChamado(): void {
    this.dialog.open(ModalComponent);
  }

  public construirPrompt(navio: NaviosProgramados): string {
    this.textoGeminiAPI = `Crie um relatório detalhado sobre o navio ${navio.nomenavio}, com número IMO ${navio.imo}. O navio está programado para atracar em ${navio.local} no dia ${navio.data}, entre ${navio.periodo}, transportando ${navio.mercadoria}.`;

    // Adicione informações adicionais baseadas nos dados do navio
    this.textoGeminiAPI += `* Data estimada de chegada: ${navio.data}`;
    this.textoGeminiAPI += `* Viagem: ${navio.viagem}` + 'Usar somente os dados que foram mencionados. E gerar algum tipo de estatistica da possibilidade dessa viagem dar certo';

    return this.textoGeminiAPI;
  }

  async downloadTxt() {
    if (this.navio) {
      this.navio.viagem = this.stringToNumber(this.navio?.viagem);
      this.navio.data = this.stringToNumber(this.navio?.data);
      this.navio.hora = this.stringToNumber(this.navio?.periodo);
      const textoTrancode = await this.txtTranCodeService.jsonToTranCode(this.navio);

      // Download
      const blob = new Blob([textoTrancode], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `trancode-viagem-${this.navio.viagem}.txt`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }
  }

  stringToNumber(string: string) {
    return String(Number(String(string).replace(/\D/g, '')));
  }

}
