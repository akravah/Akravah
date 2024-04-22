import { Component, ElementRef, OnInit, Output } from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  project: Project[] = [];
  projectName: string = '';
  isLoaded = false;

  constructor(public projectService: ProjectService) {
    this.project = this.projectService.getAll();
  }
  ngOnInit(): void {
    this.isLoaded = true;
  }

  getVal(event: any) {
    this.projectName = event.target.value;
    // console.log(this.projectName);
  }
}
