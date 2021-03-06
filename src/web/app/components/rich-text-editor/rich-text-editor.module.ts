import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { RichTextEditorComponent } from './rich-text-editor.component';

/**
 * Module for a rich text editor.
 */
@NgModule({
  declarations: [RichTextEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    EditorModule,
  ],
  exports: [
    RichTextEditorComponent,
  ],
})
export class RichTextEditorModule { }
