/**
 * PDF export utility using browser Print API
 * Provides a clean way to export the curriculum as PDF
 */

export interface PDFExportOptions {
  filename?: string
  title?: string
}

/**
 * Export curriculum page to PDF using browser print dialog
 * User can save as PDF through browser's native print-to-file feature
 */
export function exportCurriculumPDF(options: PDFExportOptions = {}): void {
  const { title = 'Curriculum' } = options

  // Store original title
  const originalTitle = document.title

  try {
    // Set document title for PDF filename
    document.title = title

    // Trigger print dialog
    window.print()
  } finally {
    // Restore original title
    document.title = originalTitle
  }
}

