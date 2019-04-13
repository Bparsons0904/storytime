import { Component, OnInit } from "@angular/core";
import { StoryService } from "../../services/story.service";

@Component({
  selector: "app-story",
  templateUrl: "./story.component.html",
  styleUrls: ["./story.component.scss"]
})
export class StoryComponent implements OnInit {

  story: Object;
  activeStory: Object;
  options: any[] = [];
  active: number;

  constructor(
    private storyService: StoryService,
  ) {}

  ngOnInit() {
    this.story = this.storyService.story;
    this.loadStory(1);
  }

  loadStory(storyNumber: number): void {
    this.options = [];
    this.active = storyNumber;
    this.activeStory = this.story[storyNumber];
    this.story[storyNumber].choices.forEach(element => {
      let choice: any[] = [];
      choice.push(element);
      choice.push(this.story[element].buttonText);
      console.log(choice[1]);
      
      this.options.push(choice);
    });
    console.log(this.options);
    
  }
}
