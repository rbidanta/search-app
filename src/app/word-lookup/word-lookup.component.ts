import { AskDictionaryService } from './../service/ask-dictionary.service';
import { Component, OnInit } from '@angular/core';
import { RobotStatus } from '../model/robot-status';

@Component({
  selector: 'app-word-lookup',
  templateUrl: './word-lookup.component.html',
  styleUrls: ['./word-lookup.component.css'],
  providers: [AskDictionaryService]
})
export class WordLookupComponent implements OnInit {
  title = 'Word Definition Look UP';
  word: string;
  robotStatus: RobotStatus;
  definition: string;
  apistatus: string;

  ngOnInit() {}

  constructor(private service: AskDictionaryService) {
    this.definition = 'Word Definition!';
  }

  public search() {
    this.definition = '';
    this.apistatus = '';
    this.service.searchWord(this.word).subscribe(
      (data: RobotStatus) => {
        this.robotStatus = data;
        this.apistatus = this.robotStatus.status;
        this.definition = this.robotStatus.currentTermDefinition;
        console.log(this.robotStatus);
      },
      (error: any) => {
        console.log('Error Occured', error);
        this.definition =
          'Whoops! ' + JSON.parse(JSON.stringify(error)).error.status;
        this.apistatus = 'error';
      }
    );
  }

  public clearDefinition() {
    this.definition = 'Word Definition!';
    this.apistatus = '';
  }
}
