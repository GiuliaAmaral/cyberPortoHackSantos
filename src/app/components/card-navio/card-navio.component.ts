import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { NaviosProgramados } from 'src/app/model/navios-programados.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card-navio',
  templateUrl: './card-navio.component.html',
  styleUrls: ['./card-navio.component.css'],
})
export class CardNavioComponent implements OnInit {

  @Input() navio?: NaviosProgramados;
  textoGeminiAPI: string = '';

  constructor(
    public dialog: MatDialog,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
  }

  public openDialog(navio?: NaviosProgramados): void {
    if (navio) {
      this.dialog.open(ModalComponent);
      this.construirPrompt(navio);
      if (this.textoGeminiAPI) {
        this.apiService.enviarDadosParaGemini(this.textoGeminiAPI)
          .subscribe(
            (response) => {
              console.log(response);
            },
            (error) => {
              console.error('Erro ao enviar dados para o Gemini:', error);
            }
          );
      }
    }
  }

  public construirPrompt(navio: NaviosProgramados): string {
    this.textoGeminiAPI = `Crie um relatório detalhado sobre o navio ${navio.nomenavio}, com número IMO ${navio.imo}. O navio está programado para atracar em ${navio.local} no dia ${navio.data}, entre ${navio.periodo}, transportando ${navio.mercadoria}.`;

    // Adicione informações adicionais baseadas nos dados do navio
    this.textoGeminiAPI += `* Data estimada de chegada (ETA): ${navio.eta}`;
    this.textoGeminiAPI += `* Viagem: ${navio.viagem}` + 'Usar somente os dados que foram mencionados. E gerar algum tipo de estatistica da possibilidade dessa viagem dar certo';

    return this.textoGeminiAPI;
  }
}
