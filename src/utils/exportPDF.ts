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

/**
 * Download curriculum as PDF (requires print-to-file or PDF printer)
 * Alternative approach using canvas rendering (requires additional library)
 */
export function downloadCurriculumAsFile(): void {
  // This uses the native print dialog
  // User selects "Save as PDF" from printer options
  exportCurriculumPDF({
    filename: 'curriculum.pdf',
    title: 'Curriculum - Alex Rivera'
  })
}

/**
 * Check if browser supports print API
 */
export function isPrintAPISupported(): boolean {
  return typeof window !== 'undefined' && typeof window.print === 'function'
}
