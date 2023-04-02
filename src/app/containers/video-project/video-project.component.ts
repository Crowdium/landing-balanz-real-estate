import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'video-project',
    templateUrl: './video-project.component.html',
    styleUrls: ['./video-project.component.scss'],
})
export class VideoProjectComponent implements OnInit {
    @Input() url: any;

    constructor(protected sanitizer: DomSanitizer) {}

    ngOnInit(): void {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
}
