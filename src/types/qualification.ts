export interface Qualification {
  code: string;
  category: string;
  classification: string;
  description: string;
}

export interface QualificationDocument {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  previewImage: string;
  previewAlt: string;
  downloadName: string;
  badgeLabel?: string;
  note?: string;
}
