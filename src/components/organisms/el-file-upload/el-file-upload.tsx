import { Component, Prop, h, Host, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'el-file-upload',
  styleUrl: 'el-file-upload.scss',
  shadow: true,
})
export class ElFileUpload {
  /** Accept file types */
  @Prop() accept?: string;

  /** Multiple files */
  @Prop() multiple = false;

  /** Max file size in bytes */
  @Prop() maxSize?: number;

  /** Max files */
  @Prop() maxFiles?: number;

  /** Variant */
  @Prop() variant: 'button' | 'dropzone' = 'dropzone';

  @State() files: File[] = [];
  @State() isDragging = false;

  @Event() elChange!: EventEmitter<File[]>;

  private inputEl?: HTMLInputElement;

  private onFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      this.addFiles(Array.from(target.files));
    }
  };

  private onDragOver = (event: DragEvent) => {
    event.preventDefault();
    this.isDragging = true;
  };

  private onDragLeave = () => {
    this.isDragging = false;
  };

  private onDrop = (event: DragEvent) => {
    event.preventDefault();
    this.isDragging = false;

    if (event.dataTransfer?.files) {
      this.addFiles(Array.from(event.dataTransfer.files));
    }
  };

  private addFiles(newFiles: File[]) {
    let filesToAdd = newFiles;

    if (this.maxFiles && this.files.length + filesToAdd.length > this.maxFiles) {
      filesToAdd = filesToAdd.slice(0, this.maxFiles - this.files.length);
    }

    this.files = [...this.files, ...filesToAdd];
    this.elChange.emit(this.files);
  }

  private removeFile(index: number) {
    this.files = this.files.filter((_, i) => i !== index);
    this.elChange.emit(this.files);
  }

  private openFilePicker = () => {
    this.inputEl?.click();
  };

  private get hostClass() {
    return {
      'el-file-upload': true,
      [`el-file-upload--${this.variant}`]: true,
      'el-file-upload--dragging': this.isDragging,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <input
          ref={el => (this.inputEl = el)}
          type="file"
          class="el-file-upload__input"
          accept={this.accept}
          multiple={this.multiple}
          onChange={this.onFileChange}
        />

        {this.variant === 'dropzone' && (
          <div
            class="el-file-upload__dropzone"
            onDragOver={this.onDragOver}
            onDragLeave={this.onDragLeave}
            onDrop={this.onDrop}
            onClick={this.openFilePicker}
          >
            <div class="el-file-upload__icon">📁</div>
            <div class="el-file-upload__text">
              <strong>Click to upload</strong> or drag and drop
            </div>
          </div>
        )}

        {this.variant === 'button' && (
          <el-button onClick={this.openFilePicker}>Choose Files</el-button>
        )}

        {this.files.length > 0 && (
          <div class="el-file-upload__list">
            {this.files.map((file, i) => (
              <div key={i} class="el-file-upload__item">
                <span class="el-file-upload__filename">{file.name}</span>
                <button class="el-file-upload__remove" onClick={() => this.removeFile(i)} aria-label="Remove">
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </Host>
    );
  }
}
