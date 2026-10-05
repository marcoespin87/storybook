import { Meta, StoryObj } from '@storybook/angular';
import { FileUploadComponent } from '../../app/components/file-upload/file-upload.component';
import { componentImportDoc } from '../utils';
import { signal } from '@angular/core';

const meta: Meta<FileUploadComponent> = {
  component: FileUploadComponent,
  title: 'Organisms/FileUpload',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: { component: componentImportDoc('FileUploadComponent') }
    }
  },
  args: {
    title: 'Upload',

    configLabel: {
      titleCompleted: 'Archivos cargados',
      titleDropHere: 'Arrastrar y soltar archivos aqui',
      subtitleInfo: 'Cantidad de archivos y peso máximo',
      subtitleAddMore: '¿Quieres agregar más?',
      subtitleOr: 'o',
      searchFiles: 'Buscar archivos',
      loadingFiles: 'Cargando archivos, por favor espere',
      loading: 'Cargando archivos, por favor espere',
      statusReady: 'Listo',
      statusFailed: 'Fallido',
      allowedFormats: 'Formatos permitidos',
      dragFileNotAllowed: 'El archivo no está permitido',
      fileAlreadyAdded: 'Este archivo ya fue seleccionado',
      formatAll: 'Todos los formatos'
    },
    isFocus: false,
    isDisabled: false,
    multiple: false,
    accept: []
  },
  argTypes: {
    title: {
      control: 'text'
    },

    multiple: {
      control: 'boolean'
    },
    maxFileSizeUnit: {
      control: 'select',
      options: ['MB', 'KB'],
      description: 'Unidad del tamaño máximo permitido por archivo'
    },
    maxFileSize: {
      control: { type: 'number' },
      description: 'Tamaño máximo permitido por archivo'
    },
    accept: {
      description:
        'Si no se proporciona o el arreglo está vacío, se permiten todos los formatos de archivo.',
      control: { type: 'object' }
    },
    isFocus: {
      control: 'boolean'
    },
    isDisabled: {
      control: 'boolean'
    },
    pboClick: {
      action: 'Archivos seleccionados',
      table: {
        category: 'Eventos',
        sumary:
          'Evento emitido cuando se seleccionan archivos, ya sea por input o por drag and drop.',
        type: { summary: 'File[]' }
      }
    }
  }
};

export default meta;
type Story = StoryObj<FileUploadComponent>;

export const fileUploadFocused: Story = {
  args: {
    isFocus: true,
    isDisabled: false
  }
};

export const fileUploadDisabled: Story = {
  args: {
    isDisabled: true,
    isFocus: false
  },
  parameters: {
    controls: {
      disable: ['isFocus']
    }
  }
};

export const fileUploadIsLoading: Story = {
  args: {
    isLoading: true,
    isFocus: false,
    isDisabled: false
  }
};

export const fileUploadWithFiles: Story = {
  render: (args): any => ({
    props: {
      ...args,
      files: [
        {
          file: new File(['dummy'], 'example_david_navarrete.pdf', {
            type: 'application/pdf'
          }),
          status: 'success'
        }
      ],
      hasFiles: true,
      isCompleted: signal(true)
    }
  })
};

export const fileUploadWithFilesError: Story = {
  render: (args): any => ({
    props: {
      ...args,
      files: [
        {
          file: new File(['dummy'], 'example_david_navarrete.pdf', {
            type: 'application/pdf'
          }),
          status: 'error'
        }
      ],
      hasFiles: true,
      isCompleted: signal(true)
    }
  })
};

export const fileUploadWithMultipleFiles: Story = {
  render: (args) => ({
    props: {
      ...args,
      files: [
        {
          file: new File(['dummy'], 'example1.pdf', {
            type: 'application/pdf'
          }),
          status: 'success'
        },
        {
          file: new File(['dummy'], 'example2_david_navarrete.pdf', {
            type: 'application/pdf'
          }),
          status: 'success'
        },
        {
          file: new File(['dummy'], 'example_error.pdf', {
            type: 'application/pdf'
          }),
          status: 'error'
        }
      ],
      hasFiles: true,
      isCompleted: signal(true)
    }
  })
};

export const fileNotAllowed: Story = {
  name: 'File not allowed',
  args: {
    accept: ['.txt']
  },
  render: (args) => ({
    props: {
      ...args,
      isDragInvalid: true,
      dragMessage: args.configLabel?.dragFileNotAllowed,
      isDragOver: false,
      hasFiles: false
    }
  })
};

export const allFormats: Story = {
  name: 'All file types',
  args: {
    accept: []
  }
};

export const onlyPDF: Story = {
  name: 'PDF only',
  args: {
    accept: ['.pdf']
  }
};

export const documents: Story = {
  name: 'Documents (Word / Excel)',
  args: {
    accept: ['.docx', '.xlsx', '.xls']
  }
};
